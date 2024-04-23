import Articles from "@/components/Articles";
import BreakingNews from "@/components/BreakingNews";
import FootballNews from "@/components/FootballNews";
import Footer from "@/components/Footer";
import ForYou from "@/components/ForYou";
import HeroHighlight from "@/components/HeroHighlight";
import QuickLinks from "@/components/QuickLinks";
import Stories from "@/components/Stories";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex mt-10 ml-xPadding">
        <div className="bg-[#197DDA] text-white p-3 flex items-center px-5">
          FLASH STORY
        </div>

        <div className="flex bg-[#FCDF984D] px-5 py-2 gap-5">
          <div className="flex gap-3 items-center">
            <img width={50} height={50} src="https://play-lh.googleusercontent.com/NUvIXijlsTJRl2d829bIuBdZjqyCnf9VG98ZT3FqQl9ffEvy4ynhs1tsxI5nD75xKA" alt="" />

            <p className="text-[14px] font-[600]">
              Revealed, The Top Scoring Nationals In The SPL
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <img width={50} height={50} src="https://play-lh.googleusercontent.com/NUvIXijlsTJRl2d829bIuBdZjqyCnf9VG98ZT3FqQl9ffEvy4ynhs1tsxI5nD75xKA" alt="" />

            <p className="text-[14px] font-[600]">
              Revealed, The Top Scoring Nationals In The SPL
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <img width={50} height={50} src="https://play-lh.googleusercontent.com/NUvIXijlsTJRl2d829bIuBdZjqyCnf9VG98ZT3FqQl9ffEvy4ynhs1tsxI5nD75xKA" alt="" />

            <p className="text-[14px] font-[600]">
              Revealed, The Top Scoring Nationals In The SPL
            </p>
          </div>
        </div>

      </div>

      <HeroHighlight />

      <BreakingNews />

      <Stories />
      <ForYou />
      <QuickLinks />
      <FootballNews title="MEN'S" />
      <img src="./hero2.png" alt="" className="mx-auto w-2/3 my-5"/>
      <Articles />
      <img src="./hero2.png" alt="" className="mx-auto w-2/3 my-5"/>
      <FootballNews title="WOMEN'S"/>
      <img src="./hero2.png" alt="" className="mx-auto w-2/3 my-5"/>
      <Articles />



      <Footer />
    </>
  );
}
