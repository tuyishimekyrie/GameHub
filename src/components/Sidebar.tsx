/* eslint-disable @typescript-eslint/no-unused-vars */
import FetchGenres from "./FetchGenres";
import { Genre } from "../hooks/useGenres";
interface Props {
  setSelectedGenre: (genre: Genre) => void;
}

const Sidebar = ({ setSelectedGenre }: Props) => {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  
  return (
    <div>
      <FetchGenres
        onSelectGenre={(genre) => setSelectedGenre(genre)}
      />
    </div>
  );
};

export default Sidebar;
