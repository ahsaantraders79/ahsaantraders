import Breadcrumb from '@/components/ui/Breadcrumb';

export default function AboutHero() {
    return (
        <Breadcrumb
            title="About Ahsan Traders"
            subtitle="Your trusted partner in waterproofing and construction solutions since 2017"
            backgroundImage="/images/Working1.jpg"
            items={[
                { label: 'Home', href: '/' },
                { label: 'About Us' },
            ]}
            minHeight="420px"
        />
    );
}
