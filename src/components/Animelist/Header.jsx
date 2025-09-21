import Link from "next/link";


const Header = ({title , linkHref , linkTitle})=>{
    return(
        <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">{title}</h1>

        {/* jika linkref dan linktitle ada maka lakukan lah */}
        {
        
        linkHref && linkTitle? 
         <Link href={linkHref} 
         className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all">{linkTitle}</Link>:null
        }
       
    
        </div>
    )
}

export default Header;