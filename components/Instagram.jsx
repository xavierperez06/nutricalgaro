import Link from "next/link";

import InstagramImage from "@/components/IntagramImage";
import IGImg01 from "@/public/assets/images/Insta_Pic01.png";
import IGImg02 from "@/public/assets/images/Insta_Pic02.png";
import IGImg03 from "@/public/assets/images/Insta_Pic03.png";
import IGImg04 from "@/public/assets/images/Insta_Pic04.png";
import IGImg05 from "@/public/assets/images/Insta_Pic05.png";
import IGImg06 from "@/public/assets/images/Insta_Pic06.png";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold text-main-color">Sigueme en Instagram</p>
      <Link
        href="https://www.instagram.com/nutricalgaro/"
        target="_blank"
        className="pb-4"
      >
        @nutricalgaro
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImage img={IGImg01} />
        <InstagramImage img={IGImg02} />
        <InstagramImage img={IGImg03} />
        <InstagramImage img={IGImg04} />
        <InstagramImage img={IGImg05} />
        <InstagramImage img={IGImg06} />
      </div>
    </div>
  );
};

export default Instagram;
