import JobGrid from "./components/JobItem/JobGrid";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <JobGrid />
    </>
  );
}
