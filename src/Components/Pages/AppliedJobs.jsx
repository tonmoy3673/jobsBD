import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const [appliedJob, setAppliedJob] = useState([]);

  useEffect(() => {
    const getApplied = getJobApplication();
    if (jobs && jobs.length > 0) {
      const applied = jobs.filter((job) => getApplied.includes(job.id));
      setAppliedJob(applied);
    }
  }, [jobs]);

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl py-5 lg:py-10">
          Total Applied Jobs : {appliedJob.length}
        </h2>
      </div>

      <div className="flex justify-center">
        <select className="select select-info w-2/12 max-w-xs">
          <option selected>All Jobs</option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10"></div>
    </div>
  );
};

export default AppliedJobs;
