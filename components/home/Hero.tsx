import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5 items-center relative">
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

        {/* Packages button */}
        <Link
          href="/#packages"
          className="absolute bg-dark/80 backdrop-blur-lg text-light text-lg w-40 h-40 rounded-full overflow-hidden flex  justify-center items-center uppercase  left-[37%] bottom-[11%] z-[1] shadow-2xl group shadow-dark/50 hover:shadow-violet/50 eq"
        >
          <p className="z-[3]">Packages</p>

          {/* filler 1 */}
          <span className="z-[2] absolute top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet  group-hover:top-1/2 eq"></span>

          {/* filler 2 */}
          <span className="z-[2] absolute -top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet  group-hover:top-0 eq"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
