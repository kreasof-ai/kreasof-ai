import HomepageAbout from "@/components/homepage/about";
import HomepageBlog from "@/components/homepage/blog";
import HomepageClients from "@/components/homepage/clients";
import HomepageCTA from "@/components/homepage/cta";
import HomepageHero from "@/components/homepage/hero";
import HomepageManagement from "@/components/homepage/management";
import HomepageProjects from "@/components/homepage/projects";
import HomepageServices from "@/components/homepage/services";
import HomepageSolutions from "@/components/homepage/solutions";
import HomepageTestimonials from "@/components/homepage/testimonials";
import HomepageTimeline from "@/components/homepage/timeline";
import AkpagerLayout from "@/layouts/AkpagerLayout";

const Index = () => {
  return (
    <AkpagerLayout onePage={true}>
      <HomepageHero />
      <HomepageServices />
      <HomepageAbout />
      <HomepageSolutions />
      <HomepageCTA />
      <HomepageProjects />
      <HomepageTimeline />
      <HomepageManagement />
      {/* <HomepageTestimonials /> */}
      {/* <HomepageBlog /> */}
      {/* <HomepageClients /> */}
    </AkpagerLayout>
  );
};
export default Index;
