import { Link } from "react-router-dom"

export function Logo({ className = "" }: { className?: string }) {
    return (
        <Link to="/" className={`${className}`}>
            <img
                src="/logo.png"
                alt="Clarity Inside Logo"
                className="w-[114px] h-[60px] object-contain"
            />
        </Link>
    )
}
