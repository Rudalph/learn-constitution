// import Image from "next/image";
import Sidebar from "@/Components/Sidebar";
import Botton_Navigation from "@/Components/Botton_Navigation";
import Right_Sidebar from "@/Components/Right_Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Botton_Navigation />
      <Right_Sidebar />
    </div>
  );
}
