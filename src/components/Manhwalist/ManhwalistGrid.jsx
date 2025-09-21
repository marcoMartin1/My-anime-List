"use client";

import Image from "next/image";
import Link from "next/link";

const ManhwalistGrid = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-2 items-center justify-center">
      {api.data?.map((manhwa) => (
        <Link 
          key={manhwa.mal_id} 
          className="relative group block rounded-lg overflow-hidden cursor-pointer transition-transform transform scale-100 hover:scale-[1.05] duration-300"
          href={`/manga/${manhwa.mal_id}`} // ✅ Corrected to manga route!
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
          <h3 className="absolute top-2 left-4 text-color-primary font-bold text-md md:text-xl z-10">
            {manhwa.title}
          </h3>
          <Image 
            src={manhwa.images.webp.image_url} 
            alt={manhwa.title} 
            width={350} 
            height={450} 
            className="w-full max-h-64 object-cover" 
          />
        </Link>
      ))}
    </div>
  );
};

export default ManhwalistGrid;
