import SectionFour from "@/components/home/section-four";
import SectionThree from "@/components/home/section-three";
import SectionTwo from "@/components/home/section-two";
import StartingPage from "@/components/home/starting-page";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <StartingPage />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
}
