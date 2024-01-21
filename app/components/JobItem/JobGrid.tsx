"use client";
import { JobData } from "@/app/models/types";
import JobItem from "./JobItem";
import { useEffect, useState } from "react";

const jobData = require("../../../public/data.json");
console.log("JOB DATA = ", jobData);

type JobGridProps = {
  filterCriteria: { title: string; location: string; fullTime: boolean };
};

const JobGrid = ({ filterCriteria }: JobGridProps) => {
  const [filteredJobs, setFilteredJobs] = useState<JobData[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<number>(12);

  useEffect(() => {
    const filteredData = jobData.filter(
      (job: JobData) =>
        (job.position
          .toLowerCase()
          .includes(filterCriteria.title.toLowerCase()) ||
          job.company
            .toLowerCase()
            .includes(filterCriteria.title.toLowerCase())) &&
        job.location
          .toLowerCase()
          .includes(filterCriteria.location.toLowerCase()) &&
        (filterCriteria.fullTime
          ? job.contract.toLowerCase() === "full time"
          : true)
    );

    setFilteredJobs(filteredData);
    setVisibleJobs(12);
  }, [filterCriteria]);

  const handleJobLoad = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 3);
  };

  return (
    <section className="max-w-5xl w-full mt-20 px-8 flex flex-col sm:grid sm:grid-cols-2 sm:px-8 lg:grid-cols-3 sm:items-center m-auto gap-8">
      {filteredJobs.length > 0 ? (
        filteredJobs
          .slice(0, visibleJobs)
          .map((job: JobData) => <JobItem data={job} key={job.id} />)
      ) : (
        <div className="w-full pl-4">
          <p className="font-bold">Oops! Try another search!</p>
        </div>
      )}
      {visibleJobs < filteredJobs.length && (
        <button onClick={handleJobLoad} className="bg-indigo-500 hover:bg-indigo-600 text-white h-12 w-32 rounded-md font-bold sm:col-span-2 lg:col-span-1 lg:col-start-2 m-auto mb-8">
          Load More
        </button>
      )}
    </section>
  );
};

export default JobGrid;
