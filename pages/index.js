import SectionFour from "@/components/home/section-four";
import SectionThree from "@/components/home/section-three";
import SectionTwo from "@/components/home/section-two";
import StartingPage from "@/components/home/starting-page";
import MyLayout from "@/components/layout/MyLayout";


export default function Home() {

  return (
    <MyLayout>
      <StartingPage />
      <SectionTwo/> 
       <SectionThree /> 
      <SectionFour /> 
      </MyLayout>
  );
}
