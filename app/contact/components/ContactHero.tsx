import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ContactHero() {
    return (
        <Breadcrumb
            title="Contact Us"
            subtitle="Get in touch for a free consultation and quote"
            backgroundImage="/images/Working1.jpg"
            items={[
                { label: 'Home', href: '/' },
                { label: 'Contact' },
            ]}
            minHeight="420px"
        />
    );
}
