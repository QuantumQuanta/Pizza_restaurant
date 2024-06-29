function Footer() {
  return (
    <div className="h-auto bg-[#f7f7ff] pt-10 sm:pt-10 md:pt-14 lg:pt-16 space-y-16 sm:space-y-16 md:space-y-16 lg:space-y-20">
      <div className="flex flex-1 flex-col sm:flex-row ">
        <div className="flex flex-col sm:flex-row basis-full">
          <div className="flex flex-col basis-2/3 px-2 sm:px-2 md:px-6 lg:px-8">
            <h3 className="text-center sm:text-left text-md sm:text-md md:text-lg lg:text-2xl font-anton font-base text-transparent bg-gradient-to-b from-[#6f2dbd] to-[#a53860] bg-clip-text py-2 sm:py-2 md:py-3 lg:py-4">
              Free Delivery!
            </h3>
            <h1 className="text-center sm:text-left text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-anton text-[#bb010b] shine py-2 sm:py-2 md:py-3 lg:py-4">
              Download the App now!
            </h1>
            <p className="text-center sm:text-left font-caveat text-lg sm:text-lg md:text-xl lg:text-2xl">
              Download the Crust & Craft app for quick, delicious pizza
              delivered to your door. Order now and enjoy exclusive deals!
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 py-6 sm:py-6 md:py-8 lg:py-18">
              <button className="h-[50px] w-[150px] sm:h-[50px] sm:w-[150px] md:h-[60px] md:w-[170px] lg:h-[65px] lg:w-[200px] flex flex-row space-x-1 justify-center items-center font-bold font-titillium hover:bg-[#7f7f7f] hover:text-[#f5f1ed] rounded-lg border-4 border-double p-2 sm:p-2 md:p-3 lg:p-4 border-[#bcb8b1] shadow-lg">
                <img
                  src="src/assets/google-play_732208.png"
                  className="h-[20px] w-[20px] sm:h-[20px] sm:w-[20px] md:h-[25px] md:w-[25px] lg:h-[35px] lg:w-[35px]"
                  alt="#"
                />
                <span className="hover:animate-wiggle">Google Play</span>
              </button>
              <button className="h-[50px] w-[150px] sm:h-[50px] sm:w-[150px] md:h-[60px] md:w-[170px] lg:h-[65px] lg:w-[200px] flex flex-row space-x-1 justify-center items-center font-bold font-titillium hover:bg-[#7f7f7f] hover:text-[#f5f1ed] rounded-lg border-4 border-double p-2 sm:p-2 md:p-3 lg:p-4 border-[#bcb8b1] shadow-lg">
                <img
                  src="src/assets/game_16566128.png"
                  className="h-[20px] w-[20px] sm:h-[20px] sm:w-[20px] md:h-[25px] md:w-[25px] lg:h-[35px] lg:w-[35px]"
                  alt="#"
                />
                <span className="hover:animate-wiggle">App Store</span>
              </button>
            </div>
          </div>
          <div className="flex basis-1/3 justify-center items-center px-2 sm:px-2 md:px-6 lg:px-8">
            <img
              src="src/assets/close-up-hand-holding-device.jpg"
              alt="#"
              className="h-[280px] lg:h-[350px] w-full object-cover rounded-xl shadow-lg shadow-black"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col sm:flex-row ">
        <div className="flex basis-1/4 flex-col space-y-2 lg:space-y-4 py-3">
          <h1 className="text-center text-lg md:text-xl font-comfortoo font-semibold uppercase text-transparent bg-gradient-to-b from-[#d00000] to-[#e85d04] bg-clip-text animate-pulse">
            Crust & Craft
          </h1>
          <p className="text-center md:text-left text-xs sm:text-sm md:text-md text-[#767b91] font-kalam pt-2 md:pt-2 px-6">
            At Crust & Craft, indulge in fresh, crispy, cheesy pizzas loaded
            with premium toppings. Where every bite is a delicious adventure!
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-4 px-6">
            <div className="h-4 w-4 relative ">
              <img
                src="./src/assets/facebook_2504903.png"
                alt="fb"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-4 w-4 relative">
              <img
                src="./src/assets/instagram_2504918.png"
                alt="in"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-4 w-4 relative">
              <img
                src="./src/assets/twitter_2504947.png"
                alt="tw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex basis-1/4 flex-col justify-start space-y-4 py-3">
          <h1 className="text-center text-lg md:text-xl font-anton text-[#324a5f]">
            About Us
          </h1>
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 items-center justify-center">
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Our Locations
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Current Deals
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex basis-1/4 flex-col justify-start space-y-4 py-3">
          <h1 className="text-center text-lg md:text-xl font-anton text-[#324a5f]">
            Our Menu
          </h1>
          <div className="flex flex-row sm:flex-col space-x-6 sm:space-x-0 items-center justify-center">
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Pizza
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Pasta
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Dessert
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Take & Bake
            </a>
          </div>
        </div>
        <div className="flex basis-1/4 flex-col justify-start space-y-4 py-3">
          <h1 className="text-center text-lg md:text-xl font-anton text-[#324a5f]">
            Our Location
          </h1>
          <div className="flex flex-row sm:flex-col space-x-6 sm:space-x-0 items-center justify-center">
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Kolkata
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Bangalore
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              Mumbai
            </a>
            <a
              href="#"
              className="text-center text-md md:text-lg text-[#767b91] font-robotocondensed"
            >
              New Delhi
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1/2 flex-col sm:flex-row items-center justify-between px-6 py-6 border-t-2 border-[#bb010b]">
      <p className="font-titillium text-md sm:text-md lg:text-lg text-[#a5a5a5]">Copyright © 2024 The Crust & Craft</p>
      <h1 className="font-titillium text-md sm:text-md lg:text-lg text-[#a5a5a5]">Powered by The Crust & Craft</h1>
      </div>
    </div>
  );
}

export default Footer;
