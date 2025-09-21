"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
  return (
    <div className=" min-h-screen max-w-xl mx-auto flex justify-center items-center">

        <div className="flex justify-center items-center flex-col gap-2 ">
        <FileSearch size={32} className="text-color-accent"></FileSearch>
        <h3 className="text-color-accent text-2xl font-bold">404| NOT FOUND</h3>
        <Link href= "/" className="text-color-primary bg-color-accent transition-all text-2xl p-3 rounded-lg  transform scale-100 hover:scale-[1.20] duration-200 ">Kembali</Link>
        </div>
    </div>
  ) 
}

export default Page