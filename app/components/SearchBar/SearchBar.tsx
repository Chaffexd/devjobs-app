import LocationIcon from "@/public/assets/desktop/LocationIcon";
import SearchIcon from "@/public/assets/desktop/SearchIcon";

const SearchBar = () => {
  return (
    <div className="px-36 -mt-10">
      <div className="flex justify-between rounded-md shadow-md items-center bg-white">
        <div className="flex w-2/4 border-r-2 border-slate-200 border-solid p-6">
          <SearchIcon />
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Filter by title, companies, expertise..."
            className="w-4/5 ml-2"
          />
        </div>
        <div className="flex items-center w-1/5 border-r-2 border-slate-200 border-solid p-6">
          <LocationIcon />
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Filter by location..."
            className="w-4/5 ml-2"
          />
        </div>
        <div className="flex items-center w-auto p-4">
          <input type="checkbox" id="fullTime" value={"fullTime"} />
          <label htmlFor="fullTime" className="mx-4">Full Time Only</label>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white h-10 w-28 rounded-md font-bold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
