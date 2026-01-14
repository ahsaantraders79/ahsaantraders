import SectionHeader from '@/components/ui/SectionHeader';
import { FeatureCard } from '@/components/ui/Card';
import { ShieldCheckIcon, TrophyIcon, UsersIcon, ClockIcon } from '@/components/ui/Icons';

const values = [
    {
        title: 'Quality First',
        description: 'We never compromise on material quality or workmanship standards in any project.',
        icon: <ShieldCheckIcon size={26} />,
    },
    {
        title: 'Customer Focus',
        description: 'Your satisfaction is our top priority. We listen, understand, and deliver exactly what you need.',
        icon: <TrophyIcon size={26} />,
    },
    {
        title: 'Expert Team',
        description: 'Skilled professionals with years of specialized experience in waterproofing and construction.',
        icon: <UsersIcon size={26} />,
    },
    {
        title: 'Timely Delivery',
        description: 'We respect your time and are committed to completing projects on schedule.',
        icon: <ClockIcon size={26} />,
    },
];

export default function ValuesSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    label="Our Values"
                    title="What Drives Us"
                    subtitle="The core principles that guide everything we do"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {values.map((value) => (
                        <FeatureCard
                            key={value.title}
                            title={value.title}
                            description={value.description}
                            icon={value.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
