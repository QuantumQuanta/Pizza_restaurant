import { motion } from "framer-motion";

function OurMenu() {
  return (
    <>
      <div
        className="relative h-3/4 bg-cover bg-center md:bg-fill rounded-b-[90px] opacity-90"
        style={{
          backgroundImage: "url('src/assets/ourmenuBack.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-anton">
            Our Menu
          </h1>
        </div>
      </div>
      <div className="absolute w-full bg-transparent flex flex-row justify-center items-center">
        <div className="flex flex-1 flex-col items-center justify-center -mt-16 sm:-mt-16 md:-mt-24 lg:-mt-40">
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="/src/assets/pasta_menu.png"
              alt="#"
              className="h-[125px] w-[125px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] rounded-full object-cover object-center"
            />
          </motion.div>
          <p className="text-center text-2xl font-extrabold font-dancingscript pt-1 pb-4">
            Pasta
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center -mt-16 sm:-mt-16 md:-mt-24 lg:-mt-40">
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="/src/assets/pizza_menu.png"
              alt="#"
              className="h-[125px] w-[125px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] rounded-full object-cover"
            />
          </motion.div>
          <p className="text-center text-2xl font-extrabold font-dancingscript pt-1 pb-4">
            Pizza
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center -mt-16 sm:-mt-16 md:-mt-24 lg:-mt-40">
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="/src/assets/delicious-pie-table (1).png"
              alt="#"
              className="h-[125px] w-[125px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] rounded-full object-cover"
            />
          </motion.div>
          <p className="text-center text-2xl font-extrabold font-dancingscript pt-1 pb-4">
            Dessert
          </p>
        </div>
      </div>
      {/*Pasta Menu Start*/}
      <div className="flex mt-40 sm:mt-40 md:mt-56 lg:mt-72">
        <div className="flex flex-1 flex-col md:flex-row">
          <h1 className="font-titillium font-bold text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-gradient-to-b from-[#d00000] to-[#e85d04] bg-clip-text px-2 md:px-12 lg:px-14 py-6 sm:py-0">
            PASTA
          </h1>
          <p className="text-md md:text-lg lg:text-xl font-dancingscript text-center sm:text-left text-[#595959] px-4">
            Savor the authentic taste of Italy with our delicious pasta dishes,
            crafted from the freshest ingredients and traditional recipes.
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-4 sm:pt-4 md:pt-10 lg:pt-14">
        <div className="flex flex-col sm:flex-row px-4 sm:px-4 md:px-6 py-4 sm:py-4 md:py-6 lg:py-8 space-y-6 sm:space-y-0">
          <div className="flex flex-1 flex-row">
            <div className="flex px-4 sm:px-4 md:px-6 lg:px-8">
              <img
                src="src/assets/spaghetti-with-bolognese-sauce-wooden-tablexa.jpg"
                alt=""
                className="h-[150px] w-[150px] rounded-xl shadow-lg shadow-black object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center">
              <h3 className="text-xl sm:text-xl md:text-2xl font-titillium text-[#9d0208]">
                SPAGHETTI BOLOGNESE
              </h3>
              <p className="text-md md:text-lg lg:text-xl font-dancingscript sm:text-left text-[#595959]">
                With Chianti-braised meat sauce and fresh basil.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-row">
            <div className="flex px-4 sm:px-4 md:px-6 lg:px-8">
              <img
                src="src/assets/ai-generated-pasta-food.jpg"
                alt=""
                className="h-[150px] w-[150px] rounded-xl shadow-lg shadow-black object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center">
              <h3 className="text-xl sm:text-xl md:text-2xl font-titillium text-[#9d0208]">
                CAPRESE PASTA
              </h3>
              <p className="text-md md:text-lg lg:text-xl font-dancingscript sm:text-left text-[#595959]">
                Roma tomatoes, fresh basil, Sicilian extra-virgin olive oil,
                pine nuts, and fresh mozzarella.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-4 sm:px-4 md:px-6 py-4 sm:py-4 md:py-6 lg:py-8 space-y-6 sm:space-y-0">
          <div className="flex flex-1 flex-row">
            <div className="flex px-4 sm:px-4 md:px-6 lg:px-8">
              <img
                src="src/assets/pasta-with-cheese.jpg"
                alt=""
                className="h-[150px] w-[150px] rounded-xl shadow-lg shadow-black object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center">
              <h3 className="text-xl sm:text-xl md:text-2xl font-titillium text-[#9d0208]">
                FETTUCCINE ALFREDO
              </h3>
              <p className="text-md md:text-lg lg:text-xl font-dancingscript sm:text-left text-[#595959]">
                Freshly prepared fettuccine pasta swirled in homemade cream
                sauce.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-row">
            <div className="flex px-4 sm:px-4 md:px-6 lg:px-8">
              <img
                src="src/assets/truffle-spaghetti-plate-with-mushroom-sauce-grated-parmesan.jpg"
                alt=""
                className="h-[150px] w-[150px] rounded-xl shadow-lg shadow-black object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center">
              <h3 className="text-xl sm:text-xl md:text-2xl font-titillium text-[#9d0208]">
                TRUFFLE TORTELLONI
              </h3>
              <p className="text-md md:text-lg lg:text-xl font-dancingscript sm:text-left text-[#595959]">
                Cheese tortelloni with truffle mushroom sauce, topped with fresh
                arugula.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Pasta Menu End*/}
    </>
  );
}

export default OurMenu;
