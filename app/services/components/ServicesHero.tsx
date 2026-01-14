import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ServicesHero() {
    return (
        <Breadcrumb
            title="Our Services"
            subtitle="Comprehensive construction solutions with premium-grade materials and expert workmanship"
            backgroundImage="/images/Roof13.jpg"
            items={[
                { label: 'Home', href: '/' },
                { label: 'Services' },
            ]}
            minHeight="420px"
        />
    );
}
