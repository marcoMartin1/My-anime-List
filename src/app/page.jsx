import { data } from "autoprefixer";
import Animelist from "../components/Animelist/index"
import Link from "next/link";
// import search from "../components/search/search"
import Header from "../components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce  , getManhwaResponse} from "../libs/api-libs";
import Animelistslider from "../components/Animelist/index";
import ManhwalistSlider from "../components/Manhwalist/ManhwalistSlider"


const  Page = async()=>{

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`); 

  // const topanime = await response.json();

  // const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?filter=favorite&limit=10`); 

  // const topmanga = await response2.json();

    //angka 8 nya bisa didapetin dari state supaya lebih dinamis tapi biarlah begini biar basic
    const topanime = await getAnimeResponse("top/anime" , "limit=20")
    let reccomendation = await getNestedAnimeResponse("recommendations/anime" , "entry")
 
    // reccomendation = reproduce(reccomendation , 20)

    reccomendation = {
      data: reccomendation.sort(()=> Math.random() - 0.5).slice(0,30)
    }



  //supaya animelist masih punya mappingan data karena animelist cuman punya mappingan data 
  //kita bisa buat mapnya lebih fleksibel tapi nanti gw coba ulik lagi 


  

  const topmanhwa = await getManhwaResponse("top/manga" , "type=manhwa&limit=25");

  let manhwareccomendation = await getNestedAnimeResponse("recommendations/manga" , "entry")
 
    // reccomendation = reproduce(reccomendation , 20)

    manhwareccomendation = {
      data: manhwareccomendation.sort(()=> Math.random() - 0.5).slice(0,40)
    }


  return(
    <>

    {/* animek populer */}

    <section>
    <Header title="Paling Populer" linkHref="/populer" linkTitle="lihat semua" ></Header>
    <Animelistslider api={topanime}></Animelistslider>
    </section>

    <section>
    <Header title="Rekomendasi Anime" linkHref="/populer"></Header>
    <Animelistslider api={reccomendation}></Animelistslider>
    </section>

    <section>
    <Header title="Populer Manhwa" linkHref="/populermanhwa" linkTitle="lihat semua" ></Header>
    <ManhwalistSlider api={topmanhwa}></ManhwalistSlider>

    </section>

    <section>
    <Header title="Manhwa dan Manga Reccomendation" linkHref="/populermanhwa"></Header>
    <ManhwalistSlider api={manhwareccomendation}></ManhwalistSlider>

    </section>

    </>
  )
}

export default Page;
