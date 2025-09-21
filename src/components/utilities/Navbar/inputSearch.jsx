"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { useRouter } from "next/navigation";
import { useState } from "react";

const InputSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("anime"); // ✅ default type is anime

  const handleSearch = (event) => {
    event.preventDefault();
    if (!search.trim()) return;

    // ✅ dynamically build URL with type included
    router.push(`/search/${type}/${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="rounded p-2"
      >
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
        <option value="manhwa">Manhwa</option>
      </select>
      <input
        placeholder={`Cari ${type}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-color-primary text-color-dark p-2 rounded">
        Cari
      </button>
    </form>
  );
};

export default InputSearch;
