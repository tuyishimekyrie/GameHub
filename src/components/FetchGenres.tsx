import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const FetchGenres = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading)
    return (
      <>
        <div className="m-4 animate-spin w-4 h-4 bg-yellow-200"></div>
      </>
    );
  if (error) return null;
  return (
    <div>
      {/* {error && <p className="text-2xl text-red-500">{error}</p>} */}
      {data.map((genre) => (
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
            <button onClick={() => onSelectGenre(genre)}>{genre.name}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchGenres;
