import Feed from "@/components/Feed";
import Content from "@/components/common/Content";
import Image from "next/image";


export default function Home() {
  return (
    <div className=" bg-lightGreen max-w-[393px] mx-auto">
      <Content />
      <Feed />
    </div>

  );
}
