function Home() {
  return (
    <>
      {/* Background Image */}
      <div
        className="relative h-3/4 bg-cover bg-center md:bg-fill rounded-b-[90px] opacity-90"
        style={{
          backgroundImage: "url('src/assets/delicious-pizza-indoors.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col h-full w-full">
          {/* First Div: Heading and Paragraph */}
          <div className="text-center text-white pt-32 md:pt-28 lg:pt-32">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold font-kalam">
              Savor the art of PIZZA
            </h1>
            <p className="text-xs sm:text-sm md:text-lg font-kalam pt-2 md:pt-2 px-2">
              At Crust & Craft, indulge in fresh, crispy, cheesy pizzas loaded
              with premium toppings. Where every bite is a delicious adventure!
            </p>
          </div>
          <div className="flex-grow"></div>
          {/* Second Div: Buttons */}
          <div className="flex space-x-8 items-center justify-center pb-24 sm:pb-44 md:pb-48">
            <a
              href="#"
              className="uppercase text-white font-semibold font-merienda"
            >
              <button className="px-6 py-2 md:px-10 md:py-2 lg:px-10 lg:py-2 text-white backdrop-blur-lg border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.1] text-sm sm:text-xl transition duration-200 whitespace-nowrap">
                Book Table
              </button>
            </a>
            <a
              href="#"
              className="uppercase text-white font-semibold font-merienda"
            >
              <button className="px-6 py-2 md:px-10 md:py-2 lg:px-10 lg:py-2 text-white backdrop-blur-lg border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.1] text-sm sm:text-xl transition duration-200 whitespace-nowrap">
                Take Away
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-full bg-transparent flex justify-center items-center">
        <img
          src="/src/assets/pizza_logo_size.png"
          alt="#"
          className="h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[350px] lg:w-[350px] -mt-20 sm:-mt-10 md:-mt-12 lg:-mt-40 animate-wiggle"
        />
      </div>

      <div className="flex flex-wrap flex-col md:flex-row pt-20 sm:pt-12 md:pt-12 lg:pt-14 items-center justify-center space-y-6 space-x-0 md:space-y-0 ">
        <div className="flex flex-col flex-1 items-center justify-center px-2">
          <div className="flex flex-col flex-1">
            <img
              src="/src/assets/fresh_veg.jpg"
              alt="#"
              className="h-[150px] w-[150px] md:h-[210px] md:w-[210px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 text-center">
            <h4 className="text-2xl font-semibold uppercase text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Farm-Fresh Ingredients
            </h4>
            <p className="px-8">
              Our pizzas are crafted using locally sourced, farm-fresh
              ingredients ensuring quality and flavor in every bite.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center px-2 pt-0 sm:pt-14 md:pt-32 lg:pt-48">
          <div className="flex flex-col flex-1">
            <img
              src="/src/assets/spicies_on_table.jpg"
              alt="#"
              className="h-[150px] w-[150px] md:h-[210px] md:w-[210px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 text-center">
            <h4 className="text-2xl font-semibold uppercase text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              "Secret Spicies" Sauce
            </h4>
            <p className="px-8">
              Experience the unique flavor of our signature "Secret Spicies"
              sauce, meticulously crafted to tantalize your taste buds.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center px-2">
          <div className="flex flex-col flex-1">
            <img
              src="/src/assets/delicious-pieces-cheese.jpg"
              alt="#"
              className="h-[150px] w-[150px] md:h-[210px] md:w-[210px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 text-center">
            <h4 className="text-2xl font-semibold uppercase text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Handmade Mozarella
            </h4>
            <p className="px-8">
              Indulge in the creamy richness of our handmade mozzarella cheese,
              crafted with care for an authentic pizza experience.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative h-full bg-top bg-cover opacity-80  "
        style={{
          backgroundImage: "url('src/assets/2149256895.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center">
          <div className="basis-1/3 flex flex-col items-center justify-center">
            <h1 className="bg-white bg-opacity-80 rounded-tr-2xl rounded-bl-2xl text-4xl md:text-4xl lg:text-7xl font-bold text-black text-center md:text-start mix-blend-screen px-4 py-4 md:py-5 mx-4 ">
              Bringing Happiness To You
            </h1>
            <p className="text-md md:text-md lg:text-xl text-black bg-white bg-opacity-50 border-l-4 border-r-4 mt-2 px-4 mx-4">
              At our core, we believe that every meal should be an that brings
              joy and satisfaction
            </p>
          </div>
          <div className="basis-2/3 flex flex-wrap flex-col md:flex-row items-center justify-center space-y-2 pt-2">
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col flex-1 items-center justify-center">
                <img
                  src="/src/assets/1284824_155026-OVC2P0-519.jpg"
                  alt="#"
                  className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 text-center">
                <h4 className="text-2xl font-semibold capitalize text-white ">
                  Online Delivery
                </h4>
                <a href="#" className="px-8 uppercase ">
                  <button className="relative uppercase font-bold text-xs sm:text-sm text-white hover:text-white px-2 py-px sm:px-8 sm:py-2 rounded-md bg-transparent isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-[#e900ff] to-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                    Order Online
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col flex-1 items-center justify-center">
                <img
                  src="/src/assets/11525654_4780032.jpg"
                  alt="#"
                  className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 text-center">
                <h4 className="text-2xl font-semibold capitalize text-white ">
                  Click & Collect
                </h4>
                <a href="#" className="px-8 uppercase">
                <button className="relative uppercase font-bold text-xs sm:text-sm text-white hover:text-white px-2 py-px sm:px-8 sm:py-2 rounded-md bg-transparent isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-[#e900ff] to-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                    Takeout Order
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col flex-1 items-center justify-center">
                <img
                  src="/src/assets/2685788_9118.jpg"
                  alt="#"
                  className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 text-center">
                <h4 className="text-2xl font-semibold capitalize text-white ">
                  Restaurant Dining
                </h4>
                <a href="#" className="px-8 uppercase">
                <button className="relative uppercase font-bold text-xs sm:text-sm text-white hover:text-white px-2 py-px sm:px-8 sm:py-2 rounded-md bg-transparent isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-[#e900ff] to-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                    Book A Table
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
