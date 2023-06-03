import SectionFour from "@/components/home/section-four";
import SectionThree from "@/components/home/section-three";
import SectionTwo from "@/components/home/section-two";
import StartingPage from "@/components/home/starting-page";
import Layout from "@/components/layout/layout";


export default function Home() {
  return (
    <Layout>
      <StartingPage />
      <SectionTwo /> 
       <SectionThree /> 
      <SectionFour /> 
      </Layout>
  );
}
