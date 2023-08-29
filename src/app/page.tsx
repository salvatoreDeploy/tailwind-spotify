import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Maximize2,
  Volume2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <nav className="space-y-6 mt-10">
            <a
              className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
              href="http://"
            >
              <HomeIcon />
              Home
            </a>
            <a
              className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
              href="http://"
            >
              <Search />
              Search
            </a>
            <a
              className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
              href="http://"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6  border-t border-zinc-800 flex flex-col gap-2">
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Blue Birds
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Rock Ricks
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Velozes e Furiosos
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Planet Hits 2009
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              JehJeh
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Samba Mix
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Rap-anos-70
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Animes Hits
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Sertanejo 2002
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Indicações Spotify
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Ana Carolina, as melhores
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              NxZero
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Fatale
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/40 hover:bg-black/10 transition-colors p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 hover:bg-black/10 transition-colors p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <a
              href="#"
              className="flex items-center gap-4 group bg-white/10 rounded overflow-hidden hover:bg-white/20 transiction-collors"
            >
              <Image
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong>Link Park Hibridy</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 group bg-white/10 rounded overflow-hidden hover:bg-white/20 transiction-collors"
            >
              <Image
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong>Link Park Hibridy</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 group bg-white/10 rounded overflow-hidden hover:bg-white/20 transiction-collors"
            >
              <Image
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong>Link Park Hibridy</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 group bg-white/10 rounded overflow-hidden hover:bg-white/20 transiction-collors"
            >
              <Image
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong>Link Park Hibridy</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 group bg-white/10 rounded overflow-hidden hover:bg-white/20 transiction-collors"
            >
              <Image
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong>Link Park Hibridy</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 group bg-white/10 rounded overflow-hidden hover:bg-white/20 transiction-collors"
            >
              <Image
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong>Link Park Hibridy</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-bold text-2xl mt-10">Made for RickPhp</h2>
          <div className="grid grid-cols-10 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wellows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wellows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wellows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wellows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                width={104}
                height={104}
                src="/picture_album_linkpark.jpg"
                alt="Capa do album Hybrid da banda Link Park"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wellows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 boder-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            width={60}
            height={60}
            src="/picture_album_linkpark.jpg"
            alt="Capa do album Hybrid da banda Link Park"
          />
          <div className="flex flex-col ">
            <strong className="font-normal">In The End</strong>
            <span className="text-xs text-zinc-500">Link Park</span>
          </div>
          <button className="flex items-center justify-center hover:text-green-500 ">
            <Heart />
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 w-96 rounded-full bg-zinc-600">
              <div className="h-1 w-28 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-zinc-400">3:19</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume2 />
            <div className="h-1 w-16 rounded-full bg-zinc-600">
              <div className="h-1 w-6 rounded-full bg-green-500"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
