import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const [appliedJob, setAppliedJob] = useState([]);
  const [filterJobs,setFilterJobs]=useState([]);

const handleFilter=(filter)=>{
if (filter === 'all'){
  setFilterJobs(appliedJob);
}
else if (filter === 'remote'){
  const remoteJob = appliedJob.filter((job)=>job.remote_or_onsite==='Remote');
  setFilterJobs (remoteJob)
}
else if (filter === 'onsite'){
const onsiteJob= appliedJob.filter((job)=>job.remote_or_onsite==='Onsite');
setFilterJobs(onsiteJob)
}
}

  useEffect(() => {
    const getApplied = getJobApplication();
    if (jobs && jobs.length > 0) {
      const applied = jobs.filter((job) => getApplied.includes(job.id));
      setAppliedJob(applied);
      setFilterJobs(applied);
    }
  }, [jobs]);
console.log(filterJobs);
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl py-5 lg:py-10">
          Total Applied Jobs : {appliedJob.length}
        </h2>
      </div>

      <div className="flex justify-center">
        <select onChange={(e)=>handleFilter(e.target.value)} className="select select-info w-2/12 max-w-xs">
          <option value='all' selected>All Jobs</option>
          <option value='remote'>Remote</option>
          <option value='onsite'>Onsite</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 lg:gap-10">
        {
         filterJobs && filterJobs.map((job)=>(
          <div key={job.id}>
            <h2> job ID: {job.id}</h2>
            <h2>Company Name :  {job.company_name}</h2>
            <h2>Job Title : {job.job_title}</h2>
            <h2>Job Type: {job.remote_or_onsite}</h2>
          </div>
         ))
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
