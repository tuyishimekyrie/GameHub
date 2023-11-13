import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
// import PlatformIconList from "./PlatformIconList";
// import { ListPlatforms } from "./ListPlatforms";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
    // console.log(game.platforms[0].platform.image_background);
  return (
    <div className="rounded-md bg-slate-700 gap-4 overbflow-hidden ">
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt="image"
        className="sm:w-64"
      />
      <div className="p-2">
        <p className="2xl py-2">{game.name}</p>
        <div className="flex flex-wrap   gap-2">
          {game.platforms.map((p) => (
            <p className="text-slate-400 font-semibold" key={p.id}>
              {p.platform.name}
            </p>
          ))}
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
