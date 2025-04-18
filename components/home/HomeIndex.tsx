import AllPhoneCards from "@/components/home/AllPhoneCards";
import Hero from "@/components/home/Hero";
import IconCloudDemo from "@/components/home/IconCloud";
import ScrollingCats from "@/components/home/ScrollingCats";
import ScrollTest from "@/components/home/ScrollTest";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} langName={langName} />
      {/* <SocialProof locale={dict.SocialProof} /> */}
      <IconCloudDemo locale={dict.SocialProof} />
      <ScrollingCats id="Cats" />
      {/* <Phone /> */}

      <AllPhoneCards locale={dict.AllPhoneCards} />

      <ScrollTest />
      {/* display technology stack, partners, project honors, etc. */}
      {/* <ScrollingLogos /> */}

      {/* Showcase */}
      {/* <Showcase id="Showcase" locale={dict.Showcase} /> */}

      {/* USP (Unique Selling Proposition) */}
      {/* <Feature id="Features" locale={dict.Feature} langName={langName} /> */}

      {/* Pricing */}
      {/* <Pricing id="Pricing" locale={dict.Pricing} langName={langName} /> */}

      {/* Testimonials */}
      {/* <Testimonials id="Testimonials" locale={dict.Testimonials} /> */}

      {/* FAQ (Frequently Asked Questions) */}
      {/* <FAQ id="FAQ" locale={dict.FAQ} langName={langName} /> */}

      {/* CTA (Call to Action) */}
      {/* <CTA locale={dict.CTA} CTALocale={dict.CTAButton} /> */}
    </>
  );
}
