import { FiHome } from "react-icons/fi";
import {
  BsSearch,
  BsBookmarkHeartFill,
  BsFillPlayFill,
  BsHeart,
} from "react-icons/bs";
import {
  MdAddBox,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { SiApplepodcasts } from "react-icons/si";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-56 bg-zinc-950 p-6">
          <div className="mb-6">
            <Image
              src="/spotify-logo.png"
              width={150}
              height={150}
              alt="Logo do Spotify"
            />
          </div>
          <nav className="space-y-5">
            <div className="flex items-center gap-3 ">
              <FiHome />
              <a href="/" className=" text-xs font-semibold text-zinc-200">
                Home
              </a>
            </div>
            <div className="flex items-center gap-3 ">
              <BsSearch />
              <a href="/" className="text-xs font-semibold text-zinc-200">
                Search
              </a>
            </div>
            <div className="flex items-center gap-3 ">
              <BiLibrary />
              <a href="/" className="text-xs font-semibold text-zinc-200">
                Your Library
              </a>
            </div>
          </nav>

          <nav className="mt-6 pt-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 ">
              <MdAddBox className="w-5 h-5" />
              <a href="/" className=" text-xs font-semibold text-zinc-200">
                Create Your Playlist
              </a>
            </div>
            <div className="flex items-center gap-2 ">
              <BsBookmarkHeartFill className="w-5 h-5 text-indigo-400" />
              <a href="/" className=" text-xs font-semibold text-zinc-200">
                Liked Songs
              </a>
            </div>
            <div className="flex items-center gap-2 ">
              <SiApplepodcasts className="w-5 h-5 text-green-600" />
              <a href="/" className=" text-xs font-semibold text-zinc-200">
                Your Episodes
              </a>
            </div>
          </nav>

          <nav className="mt-6 pt-6 flex flex-col gap-1 border-t border-zinc-600">
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              FAV
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily Mix 1
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Discover Weekly
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Malayalam
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Dance/EletroMix
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              EDM/Popular
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-2">
              <MdOutlineArrowBackIosNew />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <MdOutlineArrowForwardIos />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10">Good morning</h1>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <a
              href="/"
              className="group bg-white/10 rounded overflow-hidden text-sm flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/coracao.png"
                width={90}
                height={90}
                alt="Imagem de um ícone de coração"
              />
              <strong>Liked Songs</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <BsFillPlayFill className="text-zinc-950 w-6 h-6" />
              </button>
            </a>
            <a
              href="/"
              className="group bg-white/10 rounded overflow-hidden text-sm flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/neffex.png"
                width={90}
                height={90}
                alt="Imagem de um ícone de coração"
              />
              <strong>Neffex Playlist</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <BsFillPlayFill className="text-zinc-950 w-6 h-6" />
              </button>
            </a>
            <a
              href="/"
              className="group bg-white/10 rounded overflow-hidden text-sm flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/kda.png"
                width={90}
                height={90}
                alt="Imagem de um ícone de coração"
              />
              <strong>K/DA</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <BsFillPlayFill className="text-zinc-950 w-6 h-6" />
              </button>
            </a>
            <a
              href="/"
              className="group bg-white/10 rounded overflow-hidden text-sm flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/liked-songs.png"
                width={90}
                height={90}
                alt="Imagem de um ícone de coração"
              />
              <strong>Liked Songs</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <BsFillPlayFill className="text-zinc-950 w-6 h-6" />
              </button>
            </a>
            <a
              href="/"
              className="group bg-white/10 rounded overflow-hidden text-sm flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/dance.png"
                width={90}
                height={90}
                alt="Imagem de um ícone de coração"
              />
              <strong>Dance/Electronic Mix</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-500 ml-auto mr-8 invisible group-hover:visible">
                <BsFillPlayFill className="text-zinc-950 w-6 h-6" />
              </button>
            </a>
          </div>

          <h2 className="font-bold text-2xl mt-10">Shows you might like</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href="/"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                src="/capa1.png"
                width={231}
                height={288}
                alt="Imagem do album"
              />
              <strong className="font-semibold">Weekly Motivation</strong>
              <span className="text-sm text-zinc-500">Ben Ina Scott</span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                src="/capa2.png"
                width={231}
                height={288}
                alt="Imagem do album"
              />
              <strong>Weekly Motivation</strong>
              <span className="text-sm text-zinc-500">Ben Ina Scott</span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                src="/capa3.png"
                width={231}
                height={288}
                alt="Imagem do album"
              />
              <strong>Weekly Motivation</strong>
              <span className="text-sm text-zinc-500">Ben Ina Scott</span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                src="/capa4.png"
                width={231}
                height={288}
                alt="Imagem do album"
              />
              <strong>Weekly Motivation</strong>
              <span className="text-sm text-zinc-500">Ben Ina Scott</span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                src="/capa5.png"
                width={231}
                height={288}
                alt="Imagem do album"
              />
              <strong>Weekly Motivation</strong>
              <span className="text-sm text-zinc-500">Ben Ina Scott</span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                src="/capa6.png"
                width={231}
                height={288}
                alt="Imagem do album"
              />
              <strong>Weekly Motivation</strong>
              <span className="text-sm text-zinc-500">Ben Ina Scott</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3 w-1/6">
          <Image
            src="/capa-player.png"
            width={60}
            height={60}
            alt="Capa da música que está tocando"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Dreaming On</strong>
            <span className="text-xs text-zinc-400">NEFFEX</span>
          </div>
          <button className="ml-auto mr-8">
            <BsHeart />
          </button>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}
