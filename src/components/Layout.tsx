/* eslint-disable @typescript-eslint/no-unused-vars */
import GameGrid from "./GameGrid";
import Header from "./Header";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hooks/usePlatforms";


const Layout = () => {
  const [change, setChange] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform,setSelectedPlatform] = useState<Platform | null>(null);
console.log(selectedGenre)
  return (
    <div
      className={`p-2 h-full ${
        change ? "bg-slate-900 text-slate-100" : "bg-slate-200 text-slate-950"
      } `}
    >
      <Header onClick={() => setChange(!change)} change={change} />
      <div className="grid grid-cols-5 mt-2 ml-2">
        <div className="hidden sm:flex sm:col-span-1 my-5">
          <Sidebar
            // selectedGenre={(genre) => setSelectedGenre(genre)}
            setSelectedGenre={setSelectedGenre}
          />
        </div>
        <div className="col-span-5 sm:col-span-4 my-6">
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
