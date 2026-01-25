import { v4 as uuidv4 } from 'uuid';

const VISITOR_ID_KEY = 'clarity_visitor_id';
const VARIANT_KEY = 'clarity_variant';
const COOKIE_EXPIRY_DAYS = 730; // 2 years

export interface VisitorData {
    visitorId: string;
    variant: 'A' | 'B';
}

/**
 * Get or create visitor ID and variant
 * Returns existing visitor data from cookie or creates new one
 */
export function getOrCreateVisitor(): VisitorData {
    // Try to get existing visitor data from localStorage (more reliable than cookies for SPA)
    const existingVisitorId = localStorage.getItem(VISITOR_ID_KEY);
    const existingVariant = localStorage.getItem(VARIANT_KEY) as 'A' | 'B' | null;

    if (existingVisitorId && existingVariant) {
        return {
            visitorId: existingVisitorId,
            variant: existingVariant,
        };
    }

    // Create new visitor
    const visitorId = uuidv4();
    const variant: 'A' | 'B' = Math.random() < 0.5 ? 'A' : 'B';

    // Store in localStorage
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
    localStorage.setItem(VARIANT_KEY, variant);

    // Also set cookie for cross-domain tracking if needed
    setCookie(VISITOR_ID_KEY, visitorId, COOKIE_EXPIRY_DAYS);
    setCookie(VARIANT_KEY, variant, COOKIE_EXPIRY_DAYS);

    return { visitorId, variant };
}

/**
 * Get current visitor ID
 */
export function getVisitorId(): string | null {
    return localStorage.getItem(VISITOR_ID_KEY);
}

/**
 * Get current variant
 */
export function getVariant(): 'A' | 'B' | null {
    return localStorage.getItem(VARIANT_KEY) as 'A' | 'B' | null;
}

/**
 * Override variant (used when user logs in and we need to sync with User.assignedVariant)
 */
export function setVariant(variant: 'A' | 'B'): void {
    localStorage.setItem(VARIANT_KEY, variant);
    setCookie(VARIANT_KEY, variant, COOKIE_EXPIRY_DAYS);
}

/**
 * Clear visitor data (for testing purposes)
 */
export function clearVisitorData(): void {
    localStorage.removeItem(VISITOR_ID_KEY);
    localStorage.removeItem(VARIANT_KEY);
    deleteCookie(VISITOR_ID_KEY);
    deleteCookie(VARIANT_KEY);
}

// Cookie helper functions
function setCookie(name: string, value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}
