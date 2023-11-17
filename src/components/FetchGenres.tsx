import useGenres from "../hooks/useGenres";

const FetchGenres = () => {
  const { genres, error } = useGenres();
  return (
    <div>
      {error && <p className="text-2xl text-red-500">{error}</p>}
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="flex justify-items-center items-center gap-2 hover:bg-slate-600 hover:rounded-md hover:text-sky-500 hover:cursor-pointer"
        >
          <img
            src={genre.image_background}
            alt="image"
            className="w-11 h-9 rounded-md object-fit"
          />
          <div className="py-2 text-lg font-semibold hover:text-sky-500 cursor-pointer">
            {genre.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchGenres;
