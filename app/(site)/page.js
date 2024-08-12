import ClientSay from "@/components/home/clientSay";
import FeaturedPet from "@/components/home/featuredPet";
import FeaturedServices from "@/components/home/featuredServices";
import Health from "@/components/home/health";
import Intro from "@/components/home/intro";
import Listing from "@/components/home/listing";
import LookingFor from "@/components/home/lookingFor";
import Partners from "@/components/home/partners";
import PopularBreeds from "@/components/home/popularBreeds";
import ShopbyPeat from "@/components/home/shopbyPeat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-[140px]">
      <Intro></Intro>
      <FeaturedPet/>
      <FeaturedServices />
      <PopularBreeds></PopularBreeds>
      <LookingFor/>
      <Listing></Listing>
      <ClientSay></ClientSay>
      <ShopbyPeat />
      <Health></Health>
      <Partners></Partners>
    </div>
  );
}
