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
  PackagesSection,
} from '@/components/sections';


// Revalidate page every hour to keep content fresh for ISR
export const revalidate = 3600;

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
      <PackagesSection />
      <CostCalculatorSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
