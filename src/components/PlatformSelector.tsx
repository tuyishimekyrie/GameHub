import usePlatforms, { Platform } from "../hooks/usePlatforms";
interface Props {
  onSelectPlatform: (Platform: Platform) => void;
}
const PlatformSelector = ({onSelectPlatform}:Props) => {
    const { data,error,isLoading } = usePlatforms();
    if (error || isLoading) return null;
  return (
    <div className="pb-2 flex items-center gap-8">
      <label>Platforms:</label>
      <select
        name="menu"
        id=""
        className="bg-slate-700 p-2 rounded-sm items-center"
          >
              {data.map((platform) => <option key={platform.id} className="p-2 bg-slate-700 " onClick={() => onSelectPlatform(platform)}>{platform.name}</option>
              )}
      </select>
    </div>
  );
}

export default PlatformSelector