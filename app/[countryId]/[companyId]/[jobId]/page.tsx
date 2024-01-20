import { JobData } from "@/app/models/types";
import Image from "next/image";
import Link from "next/link";

const jobData = require("../../../../public/data.json");

const JobDetailPage = ({ params }: { params: { jobId: string } }) => {
  // the url must be a string, convert them to get a match using the find method
  console.log("PARAMS = ", params);

  const selectedJob = jobData.find(
    (job: JobData) => Number(job.id) === Number(params.jobId)
  );
  console.log("Selected Job = ", selectedJob);

  return (
    <article className="px-36 flex justify-center">
      <header className="w-full flex items-center justify-between bg-white rounded-md">
        <div className="flex">
          <div
            style={{ backgroundColor: selectedJob.logoBackground }}
            className="h-36 w-36 flex justify-center items-center rounded-l-md"
          >
            <Image
              src={`../../../../${selectedJob.logo}`}
              width={40}
              height={40}
              alt={`Company logo of ${selectedJob.company}`}
            />
          </div>
          <div className="flex items-start flex-col justify-center pl-12">
            <h1 className="text-xl font-bold mb-2">{selectedJob.company}</h1>
            <h2 className="text-slate-400">{selectedJob.website}</h2>
          </div>
        </div>
        <div className="bg-purple-200 h-10 w-36 flex items-center justify-center rounded-md hover:cursor-pointer mr-12 hover:bg-purple-800">
          <Link
            href={selectedJob.website}
            target="_blank"
            className="text-purple-800 font-bold hover:text-purple-200"
          >
            Company Site
          </Link>
        </div>
      </header>
    </article>
  );
};

export default JobDetailPage;
