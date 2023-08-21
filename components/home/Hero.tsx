import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5  items-center">
        {/* first row */}
        <div className="w-full h-[8rem] grid grid-cols-[30%_auto] gap-20 ">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Cream Sheer looking Down"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center ">
            <h2 className=" text-7xl uppercase font-semibold">
              Lorem ipsum dolorr
            </h2>
          </div>
        </div>
        <hr className=" border-grey" />

        {/* second row */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-7xl uppercase font-semibold">Lorems</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Cream Sheer looking Down"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className=" text-7xl uppercase font-semibold">Loremes ipsum</h2>
          </div>
        </div>
        <hr className="border-grey" />

        {/* third row */}
        <div className="w-full h-[8rem]  grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className=" text-7xl uppercase font-semibold">Loremes ips</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Cream Sheer looking Down"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className=" border-grey" />

        {/* four row */}
        <div className="w-full h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/9430980/pexels-photo-9430980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Cream Sheer looking Down"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className=" text-7xl uppercase font-semibold">
              Lorem ipsum dolor
            </h2>
          </div>
        </div>
        <hr className=" border-grey" />
      </div>
    </section>
  );
};

export default Hero;
