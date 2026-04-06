import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/ui/TrustBar';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { COAFeature } from '@/components/home/COAFeature';
import { ResearchHubTeaser } from '@/components/home/ResearchHubTeaser';
import { ServiceReviews } from '@/components/home/ServiceReviews';
import { RewardsCTA } from '@/components/home/RewardsCTA';
import { Reveal } from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Reveal><CategoryGrid /></Reveal>
      <Reveal><FeaturedProducts /></Reveal>
      <Reveal><COAFeature /></Reveal>
      <Reveal><ResearchHubTeaser /></Reveal>
      <Reveal><ServiceReviews /></Reveal>
      <Reveal><RewardsCTA /></Reveal>
    </>
  );
}
