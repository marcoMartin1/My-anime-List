"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft , ChevronRight } from "@mui/icons-material";

const ManhwalistSlider = ({api}) => {

  const scrollRef = useRef(null);

  // Fungsi untuk scroll ke kiri/kanan
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Jarak scroll dalam piksel
      scrollRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };



  return (
    <div className="relative w-full">
      {/* Tombol Navigasi Kiri */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={32} className="text-white" />
      </button>

      {/* Container Scroll */}
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide px-4 py-4"
      >
        {api.data?.map((anime) => (
          <Link 
            key={anime.mal_id} 
            className="relative group flex-shrink-0 w-48 md:w-60 cursor-pointer transition-transform transform hover:scale-[1.05]" 
            href={`/manga/${anime.mal_id}`}
          >
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>

            {/* Judul Anime */}
            <h3 className="absolute bottom-2 left-4 text-white font-bold text-md md:text-lg z-10">
              {anime.title}
            </h3>

            {/* Gambar Anime */}
            <Image 
              src={anime.images.webp.image_url} 
              alt={anime.title} 
              width={300} 
              height={400} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>

      {/* Tombol Navigasi Kanan */}
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={32} className="text-white" />
      </button>
    </div>
  );
}

export default ManhwalistSlider;