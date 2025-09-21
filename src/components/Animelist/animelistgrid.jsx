"use client";

import Image from "next/image";
import Link from "next/link";

const AnimelistGrid = ({ api, type }) => {
  const routeType = type === "anime" ? "anime" : "manga"; // Manga and manhwa share the same manga endpoint

  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-2 items-center justify-center">
      {api.data?.map((item) => (
        <Link
          key={item.mal_id}
          className="relative group block rounded-lg overflow-hidden cursor-pointer transition-transform transform scale-100 hover:scale-[1.05] duration-300"
          href={`/${routeType}/${item.mal_id}`} // ✅ clearly dynamic
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
          <h3 className="absolute top-2 left-4 text-color-primary font-bold text-md md:text-xl z-10">
            {item.title}
          </h3>
          <Image
            src={item.images.webp.image_url}
            alt={item.title}
            width={350}
            height={450}
            className="w-full max-h-64 object-cover"
          />
        </Link>
      ))}
    </div>
  );
};

export default AnimelistGrid;
