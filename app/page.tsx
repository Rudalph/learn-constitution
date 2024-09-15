// import Image from "next/image";
import Sidebar from "@/Components/Sidebar";
import Botton_Navigation from "@/Components/Botton_Navigation";
import Right_Sidebar from "@/Components/Right_Sidebar";
import MiddleSection from "@/Components/MiddleSection";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="lg:w-[20%]">
        <Sidebar />
      </div>
      <div className="lg:w-[50%]">
        <MiddleSection/>
      </div>
      <Right_Sidebar />
      <Botton_Navigation />
    </div>
  );
}
