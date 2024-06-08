import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OurMenu from "./components/OurMenu";
import About from "./components/About";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import { Menubar, MenubarMenu, MenubarTrigger } from "./components/ui/menubar";

function App() {
  return (
    <>
      <header className="fixed w-screen h-28 grid grid-cols-3 items-center justify-center text-center bg-transparent backdrop-blur-sm border-white border-b p-4 shadow-xl z-50">
        <div className="flex items-start justify-start sm:justify-start space-x-2 sm:space-x-4 pb-14 sm:pb-10">
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
        <div className="grid items-center justify-center gap-y-6">
          <h1 className="text-2xl font-comfortoo font-semibold uppercase text-transparent bg-gradient-to-b from-[#d00000] to-[#e85d04] bg-clip-text animate-pulse">
            Crust & Craft
          </h1>
          <Menubar className="bg-transparent border-none mix-blend-darken items-center justify-center">
            <MenubarMenu>
              <MenubarTrigger className="bg-transparent">
                <NavLink
                  to="/"
                  className="text-2xl uppercase font-amaticsc font-bold text-transparent bg-gradient-to-r from-[#e900ff] to-blue-500 bg-clip-text"
                >
                  Home
                </NavLink>
              </MenubarTrigger>
              <MenubarTrigger>
                <NavLink
                  to="ourmenu"
                  className="text-2xl uppercase font-amaticsc font-bold text-transparent bg-gradient-to-r from-[#e900ff] to-blue-500 bg-clip-text"
                >
                  OurMenu
                </NavLink>
              </MenubarTrigger>
              <MenubarTrigger>
                <NavLink
                  to="about"
                  className="text-2xl uppercase font-amaticsc font-bold text-transparent bg-gradient-to-r from-[#e900ff] to-blue-500 bg-clip-text"
                >
                  About
                </NavLink>
              </MenubarTrigger>
              <MenubarTrigger>
                <NavLink
                  to="offers"
                  className="text-2xl uppercase font-amaticsc font-bold text-transparent bg-gradient-to-r from-[#e900ff] to-blue-500 bg-clip-text"
                >
                  Offers
                </NavLink>
              </MenubarTrigger>
              <MenubarTrigger>
                <NavLink
                  to="contact"
                  className="text-2xl uppercase font-amaticsc font-bold text-transparent bg-gradient-to-r from-[#e900ff] to-blue-500 bg-clip-text"
                >
                  Contact
                </NavLink>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex items-end justify-end pb-2 sm:pb-6">
          <a href="#" className="animate-bounce">
            <button className="relative uppercase text-xs sm:text-sm text-slate-400 hover:text-white px-2 py-px sm:px-8 sm:py-2 rounded-md bg-transparent isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-[#e900ff] to-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
              Order Online
            </button>
          </a>
        </div>
      </header>
      <main className="h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourmenu" element={<OurMenu />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
