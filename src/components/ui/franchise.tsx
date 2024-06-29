function Franchise() {
  return (
    <div className="pt-12 sm:pt-12 md:pt-16 lg:pt-24 ">
      <div className="flex flex-col sm:flex-row px-2 sm:px-2 md:px-6 lg:px-8">
        <div className="flex basis-1/2 flex-col items-center justify-center md:items-start py-4">
          <h3 className="text-sm sm:text-sm md:text-md lg:text-lg font-kalam font-extrabold text-transparent bg-gradient-to-b from-[#6f2dbd] to-[#a53860] bg-clip-text">
            Join The Table
          </h3>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-anton text-transparent bg-gradient-to-b from-[#6f523b] to-[#1e555c] bg-clip-text shine">
            Franchise Opportunities
          </h1>
        </div>
        <div className="flex basis-1/2 flex-col pt-4 space-y-6 sm:space-y-6 md:space-y-8 justify-center items-center md:items-start pb-8 sm:pb-8 md:pb-10 lg:pb-16">
          <p className="font-dancingscript text-center sm:text-center md:text-left">
            Discover franchise opportunities with Crust & Craft! Join our
            thriving pizza community, bringing artisanal flavors and unmatched
            quality to your city. Benefit from our proven business model,
            comprehensive support, and passionate customer base. Start your
            journey with Crust & Craft and taste success today!
          </p>
          <button className="px-8 py-2 rounded-md bg-[#335c67] font-titillium text-white font-bold transition duration-200 hover:bg-white hover:text-[#335c67] font-merienda border-2 border-transparent hover:border-[#335c67] font-merienda">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Franchise;
