import MyLayout from "@/components/layout/MyLayout";
import SectionOne from "@/components/about-us/section-one";
import SectionThree from "@/components/about-us/section-three";
import SectionTwo from "@/components/about-us/section-two";
//update
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
