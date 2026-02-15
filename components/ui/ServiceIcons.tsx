/**
 * Professional SVG Service Icons for Ahsaan Traders
 *
 * Industry-grade vector icons no emojis.
 * Each icon is a clean, single-color SVG that inherits currentColor.
 */

import React from 'react';

interface IconProps {
    size?: number;
    className?: string;
}

// ─── Roof Waterproofing ──────────────────────────
export function RoofWaterproofingIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3 21h18" />
            <path d="M5 21V11" />
            <path d="M19 21V11" />
            <path d="M2 11l10-8 10 8" />
            <path d="M9 21v-6h6v6" />
            {/* Water drops representing waterproofing */}
            <path d="M8 6.5c0 .5-.5 1-1 1.5s-1-1-1-1.5.45-1 1-1 1 .5 1 1z" fill="currentColor" strokeWidth="0" opacity="0.5" />
            <path d="M18 6.5c0 .5-.5 1-1 1.5s-1-1-1-1.5.45-1 1-1 1 .5 1 1z" fill="currentColor" strokeWidth="0" opacity="0.5" />
        </svg>
    );
}

// ─── Basement Waterproofing ──────────────────────
export function BasementWaterproofingIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Ground level */}
            <path d="M2 12h20" strokeDasharray="3 2" />
            {/* Foundation walls */}
            <rect x="5" y="12" width="14" height="9" rx="1" />
            {/* Roof above ground */}
            <path d="M3 12l9-7 9 7" />
            {/* Moisture barrier layer */}
            <path d="M7 15h10" opacity="0.4" />
            <path d="M7 18h10" opacity="0.4" />
            {/* Shield indicator */}
            <path d="M12 14v4" strokeWidth="2" opacity="0.6" />
        </svg>
    );
}

// ─── Bathroom Leakage ────────────────────────────
export function BathroomLeakageIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Shower head */}
            <rect x="9" y="2" width="6" height="3" rx="1" />
            <path d="M12 5v2" />
            {/* Shower arm */}
            <path d="M8 3h-3a1 1 0 00-1 1v4" />
            {/* Water drops */}
            <path d="M9 9v2" opacity="0.5" />
            <path d="M12 9v3" opacity="0.5" />
            <path d="M15 9v2" opacity="0.5" />
            {/* Floor/tile line */}
            <path d="M3 16h18" />
            {/* Pipe below */}
            <path d="M8 16v4a2 2 0 002 2h4a2 2 0 002-2v-4" />
            {/* Seal mark */}
            <path d="M10 19h4" strokeWidth="2" opacity="0.6" />
        </svg>
    );
}

// ─── Water Tank Waterproofing ────────────────────
export function WaterTankIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Tank body */}
            <rect x="4" y="5" width="16" height="14" rx="2" />
            {/* Tank lid */}
            <path d="M6 5h12a1 1 0 00-1-1H7a1 1 0 00-1 1z" />
            {/* Water level inside */}
            <path d="M6 12c2-1 4 1 6 0s4 1 6 0" opacity="0.5" />
            <path d="M6 15c2-1 4 1 6 0s4 1 6 0" opacity="0.5" />
            {/* Inlet pipe */}
            <path d="M12 2v3" />
            <circle cx="12" cy="2" r="0.5" fill="currentColor" />
            {/* Outlet */}
            <path d="M20 16h2" />
        </svg>
    );
}

// ─── Heat Proofing ───────────────────────────────
export function HeatProofingIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Sun */}
            <circle cx="12" cy="6" r="3" />
            <path d="M12 1v1" />
            <path d="M17 6h1" />
            <path d="M6 6h1" />
            <path d="M15.5 2.5l-.7.7" />
            <path d="M9.2 2.5l.7.7" />
            {/* Roof with reflection */}
            <path d="M3 16l9-5 9 5" />
            {/* Reflection arrows going up */}
            <path d="M8 13l-1-2" opacity="0.5" strokeWidth="1" />
            <path d="M12 11v-2" opacity="0.5" strokeWidth="1" />
            <path d="M16 13l1-2" opacity="0.5" strokeWidth="1" />
            {/* Building below */}
            <path d="M5 16v5h14v-5" />
            <path d="M3 21h18" />
        </svg>
    );
}

// ─── Construction Chemicals ──────────────────────
export function ConstructionChemicalsIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Flask/beaker */}
            <path d="M9 3h6" />
            <path d="M10 3v5.5L6 17a2 2 0 002 2h8a2 2 0 002-2l-4-8.5V3" />
            {/* Liquid level */}
            <path d="M7.5 14h9" opacity="0.4" />
            {/* Bubbles */}
            <circle cx="10" cy="16" r="0.8" fill="currentColor" opacity="0.3" />
            <circle cx="13" cy="15" r="0.6" fill="currentColor" opacity="0.3" />
            <circle cx="11.5" cy="17.5" r="0.5" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

// ─── Cemented Blocks ─────────────────────────────
export function CementedBlocksIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Bottom row 2 blocks */}
            <rect x="2" y="15" width="9" height="6" rx="0.5" />
            <rect x="13" y="15" width="9" height="6" rx="0.5" />
            {/* Middle row offset */}
            <rect x="5" y="9" width="9" height="6" rx="0.5" />
            <rect x="16" y="9" width="6" height="6" rx="0.5" />
            {/* Top row */}
            <rect x="8" y="3" width="9" height="6" rx="0.5" />
        </svg>
    );
}

// ─── Ready-Mix Concrete ──────────────────────────
export function ReadyMixConcreteIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Truck body */}
            <path d="M2 17h14" />
            <rect x="2" y="13" width="6" height="4" rx="1" />
            {/* Mixer drum */}
            <ellipse cx="14" cy="10" rx="5" ry="6" />
            <path d="M11 5l6 3" opacity="0.4" />
            <path d="M11 8l6 3" opacity="0.4" />
            <path d="M11 11l6 3" opacity="0.4" />
            {/* Chute */}
            <path d="M19 8l3-3" />
            <path d="M20 5h2v2" />
            {/* Wheels */}
            <circle cx="5" cy="19" r="2" />
            <circle cx="15" cy="19" r="2" />
        </svg>
    );
}

// ─── De-Watering ─────────────────────────────────
export function DeWateringIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Pump housing */}
            <rect x="7" y="8" width="10" height="8" rx="2" />
            {/* Motor top */}
            <rect x="9" y="5" width="6" height="3" rx="1" />
            {/* Inlet pipe (water in) */}
            <path d="M4 14h3" />
            <path d="M2 12l2 2-2 2" />
            {/* Outlet pipe (water out, going up) */}
            <path d="M17 10h3v-6" />
            <path d="M19 2l1 2h-2l1-2" fill="currentColor" strokeWidth="0" />
            {/* Water surface below */}
            <path d="M3 19c2-1 4 1 6 0s4 1 6 0 4-1 6 0" opacity="0.4" />
            <path d="M3 22c2-1 4 1 6 0s4 1 6 0 4-1 6 0" opacity="0.4" />
        </svg>
    );
}

// ─── Generic Wrench/Tool icon as fallback ────────
export function ServiceToolIcon({ size = 24, className = '' }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
    );
}

// ─── Icon Registry ───────────────────────────────
// Maps service slugs to their icon components
const iconRegistry: Record<string, React.FC<IconProps>> = {
    'roof-waterproofing': RoofWaterproofingIcon,
    'basement-waterproofing': BasementWaterproofingIcon,
    'bathroom-leakage-treatment': BathroomLeakageIcon,
    'water-tank-waterproofing': WaterTankIcon,
    'heat-proofing': HeatProofingIcon,
    'construction-chemicals': ConstructionChemicalsIcon,
    'cemented-blocks': CementedBlocksIcon,
    'ready-mix-concrete': ReadyMixConcreteIcon,
    'dewatering': DeWateringIcon,
};

/**
 * Render a service icon by slug.
 * Falls back to a wrench/tool icon if slug not found.
 */
export function ServiceIcon({
    slug,
    size = 24,
    className = '',
}: {
    slug: string;
    size?: number;
    className?: string;
}) {
    const IconComponent = iconRegistry[slug] || ServiceToolIcon;
    return <IconComponent size={size} className={className} />;
}

export default ServiceIcon;
