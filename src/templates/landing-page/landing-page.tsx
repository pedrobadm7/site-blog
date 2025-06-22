import {
  CallToAction,
  CustomerHistorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from '@/templates/landing-page/sections'

export const LandingPage = () => {
  return (
    <article className="my-6 flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerHistorySection />
      <CallToAction />
    </article>
  )
}
