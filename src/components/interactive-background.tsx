import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    opacity: number;
    phaseOffset: number;
}

interface InteractiveBackgroundProps {
    particleSpacing?: number;
    mouseRadius?: number;
    mouseStrength?: number;
    friction?: number;
    springStrength?: number;
    mouseEase?: number;
}

const BRAND_COLORS = [
    'rgba(0, 0, 0, 0.9)', // brand-teal (#147472)
    'rgba(9, 9, 9, 0.9)', // brand-glow (#50A9A6)
    'rgba(6, 17, 19, 0.8)',   // brand-slate (#2F3A3C)
];

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
    mouseEase = 0.06,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width: number;
        let height: number;
        let particles: Particle[] = [];

        const mouse = { x: -1000, y: -1000 };
        const easedMouse = { x: -1000, y: -1000 };

        const init = () => {
            const parent = canvas.parentElement;
            if (parent) {
                width = canvas.width = parent.offsetWidth;
                height = canvas.height = parent.offsetHeight;
            } else {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }

            particles = [];
            // Significantly reduced particle count for a spread out feel
            const particleCount = Math.min(Math.floor((width * height) / 3500), 1500);

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
                const size = Math.random() * 1.5 + 1.0;
                const baseOpacity = Math.random() * 0.2 + 0.3;
                const phaseOffset = Math.random() * Math.PI * 2;

                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: 0,
                    vy: 0,
                    color,
                    size,
                    opacity: baseOpacity,
                    phaseOffset,
                });
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            easedMouse.x += (mouse.x - easedMouse.x) * mouseEase;
            easedMouse.y += (mouse.y - easedMouse.y) * mouseEase;

            const time = Date.now() * 0.0015;

            particles.forEach((p) => {
                const dx = easedMouse.x - p.x;
                const dy = easedMouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Interaction: Displacement Ripple
                // Spread out way more (activeRadius)
                const activeRadius = 550;
                if (distance < activeRadius) {
                    const force = (activeRadius - distance) / activeRadius;
                    // Ripple wave logic: pushes/pulls slightly in a wave pattern
                    const wave = Math.sin(time * 2.5 - distance * 0.03) * force * 15;
                    p.vx += (dx / distance) * wave * 0.02;
                    p.vy += (dy / distance) * wave * 0.02;
                }

                // Spring back home (very gentle)
                p.vx += (p.baseX - p.x) * 0.0004;
                p.vy += (p.baseY - p.y) * 0.0004;

                // Individual Circular Wave Movement
                const waveRange = 25; // How much they drift naturally
                const waveX = Math.sin(time + p.phaseOffset) * waveRange;
                const waveY = Math.cos(time + p.phaseOffset) * waveRange;

                p.vx *= 0.96;
                p.vy *= 0.96;
                p.x += p.vx;
                p.y += p.vy;

                // Draw at current position + wave offset
                const drawX = p.x + waveX;
                const drawY = p.y + waveY;

                // Visibility: Wide soft spread
                let visibility = 0.15; // Higher base visibility
                if (distance < activeRadius) {
                    visibility += ((activeRadius - distance) / activeRadius) * 0.7;
                }

                ctx.globalAlpha = p.opacity * visibility;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            init();
        };

        init();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [mouseEase]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
};
