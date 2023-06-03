import MyLayout from "@/components/MyLayout/MyLayout";
import SectionOne from "@/components/about-us/section-one";
import SectionThree from "@/components/about-us/section-three";
import SectionTwo from "@/components/about-us/section-two";

const AboutUs = () => {
  return (
    <MyLayout>
    <section  className="mx-5 md:mx-20">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    </section>
    </MyLayout>
  );
};

export default AboutUs;
