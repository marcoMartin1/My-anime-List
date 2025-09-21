
export const getAnimeResponse = async(resource , query)=>{

    //tanda tanya adalah jika mengandung query maka kasih query
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`) 
    const anime = await response.json();


    return anime;

}


export const getManhwaResponse = async(resource , query)=>{

    //tanda tanya adalah jika mengandung query maka kasih query
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`) 
    const manhwa = await response.json();


    return manhwa;

}

export const getNestedAnimeResponse = async(resource , objectProperty)=>{
    

    const response = await getAnimeResponse(resource)
    //yang mau diambil adalah entry makanya pake entry 
    return response.data.flatMap(item => item[objectProperty])


}
//misal ada yang ingin diexport tinggal bikin mirip2 diatas misal getreviewanimeresponse dkk 

export const reproduce = (data,gap)=>{


    const first = ~~(Math.random() * (data.length - gap) + 1);
    const last =   first + gap ;


    //dia mengirim kembali response apinya dengan nilai yang sudah dirandom
    const response = {
        data: data.slice(first , last)
    }

    return response
    
}