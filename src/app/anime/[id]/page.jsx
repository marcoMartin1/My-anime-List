
import { getAnimeResponse } from "../../../libs/api-libs";
import VideoPlayer from "../../../components/utilities/videoplayer";
import Synopsis from "../../../components/utilities/synopsis";

import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


  



const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);



  return (

    
    <div className="p-4 md:max-w-screen-lg  max-w-screen-md mx-auto relative ">




      {/* Top Bar */}
      <div className=" p-4  rounded-lg gap-9 ">
      <Link href="/" className="cursor-pointer">  <ArrowLeft size = {32} className="text-color-primary" ></ArrowLeft></Link>
      

        <h3 className="text-2xl text-color-primary font-bold">
           {anime.data.title}
        </h3>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mt-4">
        {/* Left Sidebar - Image */}
        <div className="bg-white/10 p-4 rounded-lg border border-color-primary flex flex-col items-start ">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.title}
            width={250}
            height={350}
            className="w-full h-auto rounded object-cover transition-transform transform scale-100 hover:scale-[1.05] duration-300 "
          />


          {/* Description Box */}
          <div className=" p-4 rounded-lg text-white mt-2 gap-3 text-start">
              <h1 className="text-lg font-bold border-b-2">Description</h1>
              {[
                { title: "Title", value: `${anime.data.title_english || "?"} / ${anime.data.title_japanese}` },
                { title: "Rating", value: anime.data.rating || "?" },
                { title: "Season", value: anime.data.season || "?" },
                { title: "Type", value: anime.data.type },
                { title: "Source", value: anime.data.source },
                { title: "Studios", value: anime.data.studios.map(studio => studio.name).join(", ") },
                { title: "Genre", value: anime.data.genres.map(genre => genre.name).join(", ") },
                { 
                  title: "Aired", 
                  value: `${anime.data.aired.prop.from.day || "?"}-${anime.data.aired.prop.from.month || "?"}-${anime.data.aired.prop.from.year || "?"} to ${anime.data.aired.prop.to.day || "?"}-${anime.data.aired.prop.to.month || "?"}-${anime.data.aired.prop.to.year || "?"}`
                },
                { title: "Broadcast", value: `${anime.data.broadcast.time || "?"}, ${anime.data.broadcast.timezone || "?"} , ${anime.data.broadcast.day || "?"}` },
              ].map((stat, index) => (
                <h3 key={index} className="text-sm ">
                  <span className="font-semibold">{stat.title}:</span> {stat.value}
                </h3>
              ))}
            </div>

          
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 flex flex-col gap-6">
       {/* Stats Section */}
  <div className="grid grid-cols-4 grid-flow-row md:grid-cols-4 gap-4 text-color-primary w-full overflow-x-auto">
    {[
      { title: "Peringkat", value: anime.data.rank },
      { title: "Skor", value: anime.data.score },
      { title: "Anggota", value: anime.data.members },
      { title: "Episode", value: anime.data.episodes },

    ].map((stat, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center w-full h-28 bg-white/10 rounded-lg border border-color-primary p-4"
      >
        <h3 className="text-sm font-semibold">{stat.title}</h3>
        <h3 className="text-lg font-bold">{stat.value}</h3>
      </div>
    ))}
  </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-1  gap-4 w-full">
          

            {/* Synopsis Box */}
            <div className=" p-4 rounded-lg  grid-rows-5">
              <Synopsis text={anime.data.synopsis} />
            </div>

           

          

             {/* to do : tambahin character  */}


          </div>
        </div>
      </div>

      {/* Video Trailer */}
      {anime.data.trailer.youtube_id && (
        <div className="pt-6">
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
      )}
    </div>
  );
};

export default Page;
