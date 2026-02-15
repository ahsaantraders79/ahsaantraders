
interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbJsonLdProps {
    items?: BreadcrumbItem[];
    title?: string;
}

export default function BreadcrumbJsonLd({ items, title }: BreadcrumbJsonLdProps) {
    // If items are provided, use them. Otherwise, default to Home > Title
    const resolvedItems: BreadcrumbItem[] = items || (title ? [
        { label: 'Home', href: '/' },
        { label: title },
    ] : []);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: resolvedItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href ? `https://ahsaantraders.com${item.href}` : undefined,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
