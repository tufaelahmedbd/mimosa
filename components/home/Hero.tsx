import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5  items-center">
        {/* first row */}
        <div className="w-full h-[8rem] grid grid-cols-[30%_auto] gap-20 ">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/6724316/pexels-photo-6724316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Natural
              "
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center ">
            <h2 className=" headline-1 uppercase font-bold">Awaken your</h2>
          </div>
        </div>
        <hr className=" border-grey" />

        {/* second row */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(playfairDisplay.className, " headline-1 lowercase")}
            >
              Inner
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/5069493/pexels-photo-5069493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cosmetologist applying facial mask on customer face in spa salon
              "
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className=" headline-1 uppercase font-bold">
              Goddess<span className="text-green">.</span>
            </h2>
          </div>
        </div>
        <hr className="border-grey" />

        {/* third row */}
        <div className="w-full h-[8rem]  grid grid-cols-[45%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className=" headline-1 uppercase font-bold">Unveiling</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Covered in Towel Lying on Bed
              "
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className=" border-grey" />

        {/* four row */}
        <div className="w-full h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/3763999/pexels-photo-3763999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Topless Woman With Towel on Head
"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className=" headline-1 uppercase font-bold">
              <span
                className={cn(
                  playfairDisplay.className,
                  "lowercase font-normal"
                )}
              >
                With
              </span>{" "}
              M
              <span
                className={cn(
                  playfairDisplay.className,
                  "lowercase font-normal text-pink"
                )}
              >
                i
              </span>
              mosa<span className="text-orange">.</span>
            </h2>
          </div>
        </div>
        <hr className=" border-grey" />
      </div>
    </section>
  );
};

export default Hero;
