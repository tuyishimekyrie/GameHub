/* eslint-disable @typescript-eslint/no-unused-vars */
import useData from "./useData";
import { Genre } from "./useGenres";
interface platIcon {
  id: number;
  name: string;
  image_background: string;
  description: string;
  image: string;
}
export interface Platform {
  platform: platIcon;
  id: number;
  name: string;
  image_background: string;
  description: string;
  image: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: [platform: Platform];
  // parent_platforms?: {platform: Platform}[];
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

function useGames(selectedGenre: Genre | null) {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   setLoading(true);F
  //   apiClient
  //     .get<FetchGamesResponse>("/games")
  //     .then((res) => {
  //       setGames(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  //   return () => controller.abort();
  // }, []);
  // return { games, error, isLoading };
}

export default useGames;
