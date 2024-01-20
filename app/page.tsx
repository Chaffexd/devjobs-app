"use client";
import { useState } from "react";
import JobGrid from "./components/JobItem/JobGrid";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Home() {
  const [filterCriteria, setFilterCriteria] = useState({
    title: '',
    location: '',
    fullTime: false
  });

  const handleSearch = (criteria: { title: string, location: string, fullTime: boolean}) => {
    setFilterCriteria(criteria);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <JobGrid filterCriteria={filterCriteria} />
    </>
  );
}
