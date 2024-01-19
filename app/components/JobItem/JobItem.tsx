import { JobData } from "@/app/models/types";

type JobItemData = {
  data: JobData;
};

const JobItem = ({ data }: JobItemData) => {
  console.log(data);
  return (
    <div className="bg-white w-full rounded-md h-60">
      <h1>{data.company}</h1>
    </div>
  );
};

export default JobItem;
