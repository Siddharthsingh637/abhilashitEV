import AboutUs from "@/components/Home/AboutUs/AboutUs";
import Brand from "@/components/Home/Brand/Brand";
import HeroWithEnquiry from "@/components/Home/Hero/HeroWithEnquiry";
import ServicebarWithForm from "@/components/Home/Servicebar/ServicebarWithForm";
import ViewModels from "@/components/Home/ViewModels/ViewModels";
import SubDealerApply from "@/components/Home/SubDealerApply/SubDealerApply";

export default function Home() {
  return (
    <div className="bg-gray-0 min-h-screen">
      <HeroWithEnquiry />
      <AboutUs />
      <Brand />
      <ServicebarWithForm />
      <ViewModels />
      <SubDealerApply />
    </div>
  );
}
