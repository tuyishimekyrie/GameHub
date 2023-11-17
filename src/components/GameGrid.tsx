import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div className="">
      {error && <p className="text-red-500 font-bold">{error}</p>}
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <div key={game.id}>
            {isLoading &&
              skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
            <GameCard key={game.id} game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
