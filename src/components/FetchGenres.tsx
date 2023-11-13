import useGenres from "../hooks/useGenres";

const FetchGenres = () => {
  const { games, error } = useGenres();
  return (
      <div>
          {error && <p className="text-2xl text-red-500">{error}</p>}
      {games.map((game) => (
        <div key={game.id} className="flex justify-items-center items-center gap-2 hover:bg-slate-600 hover:rounded-md hover:text-sky-500 hover:cursor-pointer">
          <img src={game.image_background} alt="image" className="w-11 h-9 rounded-md object-fit"/>
          <div className="py-2 text-lg font-semibold hover:text-sky-500 cursor-pointer">
            {game.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchGenres;
