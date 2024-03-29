import JobDetail from "@/app/components/JobItem/JobDetail";


const JobDetailPage = ({ params }: { params: { jobId: string } }) => {

  return (
    <article className="sm:px-14 lg:px-36 flex flex-col items-center -mt-12">
      <JobDetail params={params} />
    </article>
  );
};

export default JobDetailPage;
