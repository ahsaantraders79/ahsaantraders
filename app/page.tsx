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

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ahsaan Traders | Waterproofing & Construction Solutions in Karachi",
  description: "Leading provider of waterproofing, heat proofing, construction chemicals, cemented blocks, and ready-mix concrete supplies in Karachi. Trusted quality since 2017. Contact: 0321-2420460",
  alternates: {
    canonical: "https://ahsaantraders.com",
  },
};

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
