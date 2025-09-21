import Animelist from "../../../../components/Animelist/animelistgrid";
import { getAnimeResponse } from "../../../../libs/api-libs";
import Header from "../../../../components/Animelist/Header";

const Page = async ({ params }) => {
  const { type, keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);

  // ✅ Dynamically determine endpoint and query
  let endpoint;
  let query;

  if (type === "anime") {
    endpoint = "anime";
    query = `q=${decodedKeyword}&limit=20`;
  } else if (type === "manhwa") {
    endpoint = "manga";
    query = `type=manhwa&q=${decodedKeyword}&limit=20`;
  } else if (type === "manga") {
    endpoint = "manga";
    query = `type=manga&q=${decodedKeyword}&limit=20`;
  } else {
    // Default to anime if type isn't recognized
    endpoint = "anime";
    query = `q=${decodedKeyword}&limit=20`;
  }

  const searchResults = await getAnimeResponse(endpoint, query);

  return (
    <>
      <section>
        <Header title={`Pencarian "${decodedKeyword}" dalam kategori ${type}`} />
        <Animelist api={searchResults} type={endpoint} />
      </section>
    </>
  );
};

export default Page;
