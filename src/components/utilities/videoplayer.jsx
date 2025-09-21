"use client"

import { useState } from "react";
import YouTube from "react-youtube";




const VideoPlayer = ({youtubeId})=>{

    const [isOpen , setisOpen] = useState(true);

    const handleVideoPlayer = ()=>{

        //supaya bisa dibuka dan ditutup lagi
        setisOpen((prevstate) => !prevstate)
    }


    //kek css dan ini udh ada dari dokumentasinya wajib ada ini option
    const option = {
        width: "300",
        height: "250"
    }

    const Player = ()=>{

        return(
            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoPlayer  }
            className="text-color-primary float-right bg-color-secondary px-3">X</button>
             {/* onready adalah ketika videonya ada mau ngapain disini ketika kerender maka vudeonya akan dipause supaya ga mengganggu */}
             <YouTube videoId={youtubeId} 
             onReady={(event)=> event.target.pauseVideo()}
             // nentuin panjang dan tinggi komponen itu sendiri
             opts={option}
             onError={() => alert("video is broken try other one")}
             ></YouTube>
         </div>
        )

      

    }

    const Buttonplay = ()=>{

        return(
<button 
className=" rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl" 
onClick={handleVideoPlayer}>Tonton Trailer</button>
        )

    }

   
return(

isOpen ? <Player></Player> : <Buttonplay></Buttonplay>

)
}

export default VideoPlayer;