import { JobData } from "@/app/models/types";
import Image from "next/image";
import Link from "next/link";

type JobItemData = {
  data: JobData;
};

const JobItem = ({ data }: JobItemData) => {
  const jobId = data.id;
  const formattedCountry = data.location.replace(/\s+/g, "-").toLocaleLowerCase();
  const formattedJobTitle = data.position.replace(/\s+/g, "-").toLocaleLowerCase();
  const formattedCompany = data.company.replace(/\s+/g, "-").toLocaleLowerCase();
  const formattedUrl = `${formattedCountry}/${formattedCompany}/${jobId}?job=${formattedJobTitle}`;

  return (
    <Link href={formattedUrl}>
      <div className="bg-white w-full rounded-md h-52 p-6 mb-8">
        <div
          className="h-12 w-12 rounded-lg flex items-center justify-center -mt-12"
          style={{ backgroundColor: data.logoBackground }}
        >
          <Image
            src={data.logo}
            alt={`Logo of ${data.company}`}
            width={35}
            height={35}
          />
        </div>
        <div className="pt-6">
          <span className="text-slate-400">{data.postedAt}</span>
          <span className="text-slate-400"> &bull; </span>
          <span className="text-slate-400">{data.contract}</span>
        </div>
        <div className="pt-4">
          <h1 className="font-bold">{data.position}</h1>
          <h2 className="pt-4 text-slate-400">{data.company}</h2>
        </div>
        <p className="pt-10 text-purple-600 font-bold">{data.location}</p>
      </div>
    </Link>
  );
};

export default JobItem;
