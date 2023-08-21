const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full grid grid-rows-6 bg-red">
        {/* First row */}
        <div className="w-full h-full ">Div1</div>

        {/* second row */}
        <div className="w-full h-full bg-pink grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full bg-rose-500 gap-20"></div>
          <div className="w-full h-full bg-slate-800"></div>
        </div>

        {/* third row */}
        <div className="w-full h-full bg-lime-500 grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full bg-blue gap-20"></div>
          <div className="w-full h-full bg-violet"></div>
          <div className="w-full h-full bg-white"></div>
        </div>

        {/* fourth row */}
        <div className="w-full h-full  grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full bg-orange gap-20"></div>
          <div className="w-full h-full bg-green"></div>
        </div>

        {/* five row */}
        <div className="w-full h-full bg-green grid grid-cols-[30%_auto_45%] gap-20">
          <div className="w-full h-full bg-rose-500 gap-20"></div>
          <div className="w-full h-full bg-slate-800"></div>
          <div className="w-full h-full bg-violet"></div>
        </div>

        {/* sixth row */}
        <div className="w-full h-full ">Div1</div>
      </div>
    </section>
  );
};

export default Hero;
