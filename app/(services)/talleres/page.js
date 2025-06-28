"use client";

import Image from "next/image";

import AnimatedText from "@/components/AnimatedText";

const Talleres = () => {
  return (
    <>
      <div className="bg-[#FAE48D] min-h-[200px] flex justify-center">
        <AnimatedText
          text="Talleres"
          className="text-white text-6xl font-bold"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-screen-xl">
          <div className="">
            <Image
              className="p-6"
              src="/assets/images/Talleres.JPG"
              alt=""
              width={700}
              height={300}
            />
          </div>
        </div>
        <div className="pl-6 pt-6 max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Dolor magna eget est
          lorem ipsum dolor sit amet consectetur. Id consectetur purus ut
          faucibus pulvinar elementum integer enim neque. Nunc scelerisque
          viverra mauris in aliquam sem. Accumsan tortor posuere ac ut
          consequat. Ultrices dui sapien eget mi proin sed libero enim sed.
          Viverra mauris in aliquam sem fringilla ut morbi. Volutpat blandit
          aliquam etiam erat. Auctor augue mauris augue neque gravida in
          fermentum. Consequat interdum varius sit amet mattis vulputate enim
          nulla. Nisi vitae suscipit tellus mauris. Nunc sed blandit libero
          volutpat sed cras ornare arcu. Metus vulputate eu scelerisque felis
          imperdiet proin fermentum leo vel. Netus et malesuada fames ac turpis.
          Iaculis eu non diam phasellus vestibulum. Diam vulputate ut pharetra
          sit amet aliquam. Lacus vestibulum sed arcu non. Odio morbi quis
          commodo odio aenean sed adipiscing diam. Tempus iaculis urna id
          volutpat lacus laoreet non curabitur gravida. In ante metus dictum at
          tempor commodo ullamcorper. Augue neque gravida in fermentum. Enim
          blandit volutpat maecenas volutpat blandit aliquam etiam. Nunc vel
          risus commodo viverra maecenas accumsan lacus. Morbi leo urna molestie
          at elementum. Nisi est sit amet facilisis magna etiam tempor orci eu.
          Massa sed elementum tempus egestas sed sed risus. Purus in massa
          tempor nec feugiat nisl. Massa tempor nec feugiat nisl. Tellus integer
          feugiat scelerisque varius morbi enim nunc faucibus a. Aliquet eget
          sit amet tellus cras. Lobortis feugiat vivamus at augue eget arcu
          dictum varius duis. Fusce ut placerat orci nulla pellentesque
          dignissim enim sit amet. Pretium aenean pharetra magna ac placerat.
          Etiam tempor orci eu lobortis elementum. Cras fermentum odio eu
          feugiat pretium nibh ipsum consequat nisl. Sem fringilla ut morbi
          tincidunt augue interdum velit euismod. Rhoncus urna neque viverra
          justo nec ultrices. Convallis a cras semper auctor neque vitae tempus
          quam pellentesque. Lectus quam id leo in vitae turpis massa sed.
          Aliquam purus sit amet luctus venenatis lectus. Purus gravida quis
          blandit turpis cursus. Faucibus a pellentesque sit amet porttitor eget
          dolor. Iaculis urna id volutpat lacus laoreet non. Mauris ultrices
          eros in cursus turpis massa tincidunt. Magna eget est lorem ipsum
          dolor.
        </div>
      </div>
    </>
  );
};
export default Talleres;
