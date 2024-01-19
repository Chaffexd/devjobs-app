import { JobData } from "@/app/models/types";
import JobItem from "./JobItem";

const jobData = require("../../../public/data.json");
console.log("JOB DATA = ", jobData);

const JobGrid = () => {
  return (
    <section className="px-36 mt-20 grid grid-cols-3 w-full gap-8">
      {jobData.map((job: JobData) => (
        <JobItem data={job} key={job.id} />
      ))}
    </section>
  );
};

export default JobGrid;
