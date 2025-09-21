import Link from "next/link";
import InputSearch from "./inputSearch";
import { signIn } from "next-auth/react";


const Navbar = () => {
  return (
    <header className="bg-color-dark shadow-lg shadow-black/30">
      <div className="flex md:flex-row flex-col justify-between items-center md:items-center p-4 gap-3">
        <Link href="/" className="font-bold text-color-primary text-2xl">
          AnimeList
        </Link>

        <InputSearch />

        <Link
          href="/api/auth/signin"
          className="text-color-primary bg-color-accent p-3 rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
