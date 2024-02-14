"use client";
import LocationIcon from "@/public/assets/desktop/LocationIcon";
import SearchIcon from "@/public/assets/desktop/SearchIcon";
import FilterIcon from "@/public/assets/mobile/FilterIcon";
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
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  console.log("User search criteria: ", title, location, fullTime);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
  }, [title, location, fullTime]);

  return (
    <div className="max-w-5xl w-full m-auto -mt-10 sm:-mt-10 sm:px-8 px-8 ">
      <div className="flex justify-between rounded-md shadow-md items-center bg-white dark:bg-gray-800">
        <div className="flex w-full sm:w-1/3 lg:w-2/4 sm:border-r-2 border-slate-200 dark:border-gray-700 border-solid p-6">
          <SearchIcon />
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitle}
            placeholder="Filter by title, companies, expertise..."
            className="w-full sm:w-4/5 ml-2 dark:bg-gray-800 dark:focus:text-white dark:text-white"
          />
        </div>
        <div className="flex items-center sm:w-1/3 lg:w-1/5 sm:border-r-2 border-slate-200 dark:border-gray-700 border-solid p-6">
          <LocationIcon />
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleLocation}
            placeholder="Filter by location..."
            className="w-4/5 ml-2 hidden sm:block dark:bg-gray-800 dark:focus:text-white dark:text-white"
          />
        </div>
        <div className="flex items-center sm:w-1/3 lg:w-auto p-4">
          <input
            type="checkbox"
            id="fullTime"
            className="accent-slate-200 hidden sm:block"
            checked={fullTime}
            onChange={() => setFullTime(!fullTime)}
          />
          <label htmlFor="fullTime" className="ml-2 mr-4 hidden sm:block dark:text-white">
            Full Time
          </label>
          <div
            className={`absolute right-8 p-4 bg-white rounded-md shadow-md mt-48 w-9/12 ${
              showDropdown ? "block" : "hidden"
            }`}
          >
            <label htmlFor="location" className=" font-bold">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleLocation}
              placeholder="Filter by location..."
              className="w-full mb-2 mt-2"
            />
            <input
            type="checkbox"
            id="fullTime"
            className="accent-slate-200"
            checked={fullTime}
            onChange={() => setFullTime(!fullTime)}
          />
          <label htmlFor="fullTime" className="ml-2 mr-4">
            Full Time
          </label>
          </div>
          <FilterIcon onClick={handleDropdown} />
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white flex items-center justify-center h-10 w-10 sm:w-24 lg:w-28 rounded-md font-bold"
            onClick={handleSearch}
          >
            <span className="hidden sm:block">Search</span>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:hidden"
            >
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
