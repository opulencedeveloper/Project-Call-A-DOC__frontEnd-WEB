import Layout from "@/components/layout/layout";
import SectionOne from "@/components/about-us/section-one";
import SectionThree from "@/components/about-us/section-three";
import SectionTwo from "@/components/about-us/section-two";

const AboutUs = () => {
  return (
    <Layout>
    <section  className="mx-5 md:mx-20">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    </section>
    </Layout>
  );
};

export default AboutUs;
