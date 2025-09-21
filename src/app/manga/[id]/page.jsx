import { getAnimeResponse } from "../../../libs/api-libs";
import Synopsis from "../../../components/utilities/synopsis";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);

  return (
    <div className="p-4 md:max-w-screen-lg max-w-screen-md mx-auto relative ">
      {/* Top Bar */}
      <div className="p-4 rounded-lg gap-9 ">
        <Link href="/" className="cursor-pointer">
          <ArrowLeft size={32} className="text-color-primary"></ArrowLeft>
        </Link>

        <h3 className="text-2xl text-color-primary font-bold">
          {manga.data.title}
        </h3>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {/* Left Sidebar - Image */}
        <div className="bg-white/10 p-4 rounded-lg border border-color-primary flex flex-col items-start ">
          <Image
            src={manga.data.images.webp.image_url}
            alt={manga.data.title}
            width={250}
            height={350}
            className="w-full h-auto rounded object-cover transition-transform transform scale-100 hover:scale-[1.05] duration-300 "
          />

          {/* Description Box */}
          <div className="p-4 rounded-lg text-white mt-2 gap-3 text-start">
            <h1 className="text-lg font-bold border-b-2">Description</h1>
            {[
              { title: "Title", value: `${manga.data.title_english || "?"} / ${manga.data.title_japanese}` },
              { title: "Type", value: manga.data.type },
              { title: "Status", value: manga.data.status },
              { title: "Chapters", value: manga.data.chapters },
              { title: "Volumes", value: manga.data.volumes },
              { title: "Genres", value: manga.data.genres.map(g => g.name).join(", ") },
            ].map((stat, index) => (
              <h3 key={index} className="text-sm">
                <span className="font-semibold">{stat.title}:</span> {stat.value}
              </h3>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Stats Section */}
          <div className="grid grid-cols-4 grid-flow-row gap-4 text-color-primary w-full overflow-x-auto">
            {[
              { title: "Peringkat", value: manga.data.rank },
              { title: "Skor", value: manga.data.score },
              { title: "Anggota", value: manga.data.members },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col justify-center items-center w-full h-28 bg-white/10 rounded-lg border border-color-primary p-4">
                <h3 className="text-sm font-semibold">{stat.title}</h3>
                <h3 className="text-lg font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Synopsis Box */}
          <div className="p-4 rounded-lg">
            <Synopsis text={manga.data.synopsis} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
