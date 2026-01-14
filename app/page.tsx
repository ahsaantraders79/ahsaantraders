/**
 * Home Page
 * 
 * SEO-optimized landing page with all key sections
 * Mobile-first responsive design
 */

import {
  HeroSection,
  ServicesSection,
  AboutSection,
  ProjectsSection,
  StatsSection,
  WhyChooseUsSection,
  ClientsSection,
  CTASection,
  TransformationSection,
  CostCalculatorSection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TransformationSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <CostCalculatorSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
