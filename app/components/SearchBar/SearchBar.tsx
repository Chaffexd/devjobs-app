"use client";
import LocationIcon from "@/public/assets/desktop/LocationIcon";
import SearchIcon from "@/public/assets/desktop/SearchIcon";
import { useEffect, useState } from "react";

type SearchBarProps = {
  onSearch: (criteria: {
    title: string;
    location: string;
    fullTime: boolean;
  }) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);

  console.log("User search criteria: ", title, location, fullTime);

  const handleSearch = () => {
    onSearch({ title, location, fullTime });
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    if (title === "" && location === "") {
      onSearch({ title: "", location: "", fullTime });
    }
  }, [title, location, fullTime, onSearch]);

  return (
    <div className="max-w-5xl w-full m-auto -mt-10">
      <div className="flex justify-between rounded-md shadow-md items-center bg-white">
        <div className="flex w-2/4 border-r-2 border-slate-200 border-solid p-6">
          <SearchIcon />
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitle}
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
            value={location}
            onChange={handleLocation}
            placeholder="Filter by location..."
            className="w-4/5 ml-2"
          />
        </div>
        <div className="flex items-center w-auto p-4">
          <input
            type="checkbox"
            id="fullTime"
            checked={fullTime}
            onChange={() => setFullTime(!fullTime)}
          />
          <label htmlFor="fullTime" className="mx-4">
            Full Time Only
          </label>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white h-10 w-28 rounded-md font-bold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
