import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
    const { data,error,isLoading } = usePlatforms();
    console.log(data)
    if (error || isLoading) return null;
  return (
    <div className="pb-2 flex items-center gap-8">
      <label>Platforms:</label>
      <select
        name="menu"
        id=""
        className="bg-slate-700 p-2 rounded-sm items-center"
          >
              {data.map((platform) => <option key={platform.id} className="p-2 bg-slate-700 ">{platform.name}</option>
              )}
      </select>
    </div>
  );
}

export default PlatformSelector