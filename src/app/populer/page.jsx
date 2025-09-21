"use client";


// import { getAnimeResponse } from "../../../libs/api-libs";
// import VideoPlayer from "../../../components/utilities/videoplayer";
// import Synopsis from "../../../components/utilities/synopsis";

// import Image from "next/image";
// import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
// import Link from "next/link";

import HeaderMenu from "../../components/utilities/HeaderMenu"
import Pagination from "../../components/utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";
import AnimelistGrid from "../../components/Animelist/animelistgrid";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";


const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]); 
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false); // ✅ Track loading state

  const fetchData = async () => {
    setLoading(true); // ✅ Start loading



    try {

      setTopAnime([]);



      //kalo dibaca kita bakal cari populeranime dan dapatin dari getanimeresponse yang kita buat dan kita masukkin parameter yang kita mahu

      const populerAnime = await getAnimeResponse("top/anime" , `page=${page}`)

      setTopAnime(populerAnime || []); // ✅ Store only the anime list
      setLastPage(populerAnime.pagination?.last_visible_page || 1);
    } catch (error) {
      console.error("Failed to fetch anime data:", error);
    }

    setLoading(false); // ✅ Stop loading
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {/* Top Bar with Header & Pagination Controls */}
      

       

       

      <div className="flex justify-center md:justify-around flex-wrap items-center px-2 relative">

      <Link href="/" className="cursor-pointer "> 
      <ArrowLeft size = {42} className="text-color-primary " ></ArrowLeft></Link>

        <HeaderMenu title={`ANIME POPULER #${page}`} />
        <Pagination page={page} lastpage={lastPage} setPage={setPage} />
      </div>

      {/* Anime List (Keep Old Data While Fetching) */}
      <div className={`${loading ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}>
        <AnimelistGrid api={topAnime}></AnimelistGrid>
      </div>

      {/* Pagination at Bottom */}
      <Pagination page={page} lastpage={lastPage} setPage={setPage} />
    </>
  );
};

export default Page;
