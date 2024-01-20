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
  }, [filterCriteria]);

  return (
    <section className="px-36 mt-20 grid grid-cols-3 w-full gap-8">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job: JobData) => <JobItem data={job} key={job.id} />)
      ) : (
        <div className="w-full pl-4">
          <p className="font-bold">Oops! Try another search!</p>
        </div>
      )}
    </section>
  );
};

export default JobGrid;
