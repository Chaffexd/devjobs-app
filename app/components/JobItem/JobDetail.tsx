"use client";

import { JobData } from "@/app/models/types";
import Image from "next/image";
import Link from "next/link";
const jobData = require("/public/data.json");

type JobDetailProps = {
  params: {
    jobId: string;
  };
};

const JobDetail = ({ params }: JobDetailProps) => {
  // the url must be a string, convert them to get a match using the find method
  const selectedJob: JobData = jobData.find(
    (job: JobData) => Number(job.id) === Number(params.jobId)
  );
  const urlWithoutHttps = selectedJob.website.replace(/^https?:\/\//, '')

  console.log("SELECTED JOB = ", selectedJob);

  const handleApplication = () => {
    alert("You have successfully applied!")
  };

  return (
    <>
      <header className="max-w-4xl w-10/12 sm:w-full flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-gray-800 rounded-md">
        <div className="flex sm:flex-row items-center flex-col">
          <div
            style={{ backgroundColor: selectedJob.logoBackground }}
            className="h-16 w-16 sm:h-36 sm:w-36 -mt-8 sm:-mt-0 flex justify-center items-center rounded-md sm:rounded-l-md"
          >
            <Image
              src={`../../../../${selectedJob.logo}`}
              width={40}
              height={40}
              alt={`Company logo of ${selectedJob.company}`}
            />
          </div>
          <div className="flex items-center sm:items-start flex-col justify-center sm:pl-12">
            <h1 className="text-xl font-bold mb-2 py-2 sm:py-0 dark:text-white">{selectedJob.company}</h1>
            <Link href={selectedJob.website} target="_blank" className="text-slate-400 hover:underline hover:text-slate-800">{urlWithoutHttps}</Link>
          </div>
        </div>
        <Link
          href={selectedJob.website}
          target="_blank"
          className="h-12 w-36 m-auto text-purple-800 bg-purple-200 font-bold hover:text-purple-200 hover:bg-purple-800 flex items-center justify-center rounded-md sm:mr-12 mt-6 mb-6 sm:mb-0 sm:mt-0"
        >
          Company Site
        </Link>
      </header>
      <section className="max-w-4xl w-10/12 sm:w-full bg-white dark:bg-gray-800 rounded-md mt-8 p-12">
        <div>
          <span className="text-slate-400">{selectedJob.postedAt}</span>
          <span className="text-slate-400"> &bull; </span>
          <span className="text-slate-400">{selectedJob.contract}</span>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h3 className="font-bold text-2xl mt-4 mb-4 sm:mb-0 dark:text-white">{selectedJob.position}</h3>
            <button className="h-12 w-full sm:w-36 mb-4 sm:mb-0 text-purple-200 bg-purple-800 font-bold hover:text-purple-800 hover:bg-purple-200 rounded-md" onClick={handleApplication}>
              Apply Now
            </button>
          </div>
          <p className="text-purple-600 ">{selectedJob.location}</p>
          <p className="mt-8 text-lg text-slate-400">
            {selectedJob.description}
          </p>
          <h4 className="text-2xl mt-8 font-bold dark:text-white">Requirements</h4>
          <p className="text-slate-400 text-lg mt-4 mb-4">
            {selectedJob.requirements.content}
          </p>
          <ul>
            {selectedJob.requirements.items.map((item, index) => (
              <li
                key={index}
                className="text-slate-400 text-lg mt-2 list-disc list-inside"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h5 className="text-2xl mt-8 font-bold mb-4 dark:text-white">What You Will Do</h5>
        <p className="text-slate-400 text-lg">{selectedJob.role.content}</p>
        <ol>
          {selectedJob.role.items.map((item, index) => (
            <li key={index} className="list-decimal text-slate-400 text-lg mt-2 marker:text-purple-800 list-inside">
              {item}
            </li>
          ))}
        </ol>
      </section>
      <footer className="w-screen bg-white dark:bg-gray-800 h-28 mt-16 flex items-center justify-center">
        <div className="flex max-w-4xl w-10/12 lg:w-full justify-between">
          <h3 className="font-bold text-2xl mt-2 md:block hidden dark:text-white">{selectedJob.position}</h3>
          <button className="h-12 w-full md:w-36 m-auto sm:m-0 text-purple-200 bg-purple-800 font-bold hover:text-purple-800 hover:bg-purple-200 rounded-md" onClick={handleApplication}>
            Apply Now
          </button>
        </div>
      </footer>
    </>
  );
};

export default JobDetail;
