import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import CommissionExample from "@/components/CommissionExample";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 space-y-12 py-12">
        <FeatureGrid />
        <CommissionExample />
        <Steps />
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
}
