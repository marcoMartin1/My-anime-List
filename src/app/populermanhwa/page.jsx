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
import { getAnimeResponse, getManhwaResponse } from "../../libs/api-libs";
import AnimelistGrid from "../../components/Animelist/animelistgrid";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import ManhwalistGrid from "../../components/Manhwalist/ManhwalistGrid"


const Page = () => {
  const [page, setPage] = useState(1);
  const [topManhwa, setTopManhwa] = useState([]); 
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false); // ✅ Track loading state

  const fetchData = async () => {
    setLoading(true); 
  
    try {
      const populerManhwa = await getManhwaResponse(
        "top/manga",
        `type=manhwa&page=${page}`
      );

   
  
      setTopManhwa(populerManhwa || []);
      setLastPage(populerManhwa.pagination?.last_visible_page || 1);
    } catch (error) {
      console.error("Failed to fetch manhwa data:", error);
      setTopManhwa([]);
    }
  
    setLoading(false);
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

        <HeaderMenu title={`MANHWA POPULER #${page}`} />
        <Pagination page={page} lastpage={lastPage} setPage={setPage} />
      </div>

      {/* Anime List (Keep Old Data While Fetching) */}
      <div className={`${loading ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}>
        <ManhwalistGrid api={topManhwa}></ManhwalistGrid>
      </div>

      {/* Pagination at Bottom */}
      <Pagination page={page} lastpage={lastPage} setPage={setPage} />
    </>
  );
};

export default Page;
