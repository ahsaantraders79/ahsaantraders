import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ProjectsHero() {
    return (
        <Breadcrumb
            title="Our Projects"
            subtitle="Showcasing quality workmanship across residential, commercial, and industrial projects"
            backgroundImage="/images/Roof20.jpg"
            items={[
                { label: 'Home', href: '/' },
                { label: 'Projects' },
            ]}
            minHeight="420px"
        />
    );
}
