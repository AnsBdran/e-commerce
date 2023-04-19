import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-pink-200 bg-hero bg-center bg-cover p-8 uppercase">
      <div className="container mx-auto flex justify-around items-center h-full">
        {/* text */}
        <div>
          <div className="flex items-center  font-semibold tracking-wide">
            <span className="w-8 h-[2px] bg-red-400 inline-block mr-3"></span>
            <span>New trend</span>
          </div>
          <h1 className="text-7xl font-light ">
            Autumn sale stylish <br />{" "}
            <span className="font-semibold tracking-wide">womens</span>
          </h1>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src="woman_hero.png" alt="woman hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
