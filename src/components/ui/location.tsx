function Location() {
  return (
    <div className="pt-10 sm:pt-10 md:pt-14 lg:pt-20">
      <div className="flex flex-col h-auto w-full px-2 sm:px-2 md:px-4 lg:px-8 py-4 md:py-8 text-center">
        <h3 className="text-[#d264b6] text-sm sm:text-sm md:text-lg lg:text-xl font-anton">Our Locations</h3>
        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-anton py-3 sm:py-3 md:py-6 lg:py-10">Find The Crust & Craft near you</h1>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-2 sm:px-2 md:px-4 lg:px-8">
          Discover The Crust & Craft locations near you for the best pizza
          deals. Visit us today and enjoy delicious, fresh pizza!
        </p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row h-auto text-center py-2 sm:py-2 md:py-4 lg:py-6">
        <div className="flex flex-1/4 flex-col py-2 sm:py-2 md:py-3">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-merienda font-extrabold text-transparent bg-gradient-to-r from-[#5A3F37] to-[#2C7744] bg-clip-text pb-2 sm:pb-2 md:pb-4 lg:pb-6">Kolkata</h1>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">Address: 123 Park Street, Kolkata, West Bengal, 700016</p>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">+91 98765 43210</p>
        </div>
        <div className="flex flex-1/4 flex-col py-2 sm:py-2 md:py-3">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-merienda font-extrabold text-transparent bg-gradient-to-r from-[#5A3F37] to-[#2C7744] bg-clip-text pb-2 sm:pb-2 md:pb-4 lg:pb-6">Bangalore</h1>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">Address: 456 MG Road, Bangalore, Karnataka, 560001</p>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">+91 91234 56789</p>
        </div>
        <div className="flex flex-1/4 flex-col py-2 sm:py-2 md:py-3">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-merienda font-extrabold text-transparent bg-gradient-to-r from-[#5A3F37] to-[#2C7744] bg-clip-text pb-2 sm:pb-2 md:pb-4 lg:pb-6">Mumbai</h1>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">Address: 789 Marine Drive, Mumbai, Maharashtra, 400020</p>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">+91 99887 77665</p>
        </div>
        <div className="flex flex-1/4 flex-col py-2 sm:py-2 md:py-3">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-merienda font-extrabold text-transparent bg-gradient-to-r from-[#5A3F37] to-[#2C7744] bg-clip-text pb-2 sm:pb-2 md:pb-4 lg:pb-6">Delhi</h1>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">Address: 101 Connaught Place, New Delhi, Delhi, 110001</p>
        <p className="text-[#495057] font-kalam text-xs sm:text-xs md:text-md lg:text-lg px-10">+91 90909 80808</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
