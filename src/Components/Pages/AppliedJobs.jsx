import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterApplied,setFilterApplied]=useState([]);
  const jobs = useLoaderData();

  const handleFilter=filter=>{
    if(filter ==='all'){
      setFilterApplied(appliedJobs)
    }
    else if(filter === 'remote'){
      const remoteJob= appliedJobs.filter((job)=> job.remote_or_onsite ==='Remote')
      setFilterApplied(remoteJob)
    }
    else if (filter === 'onsite')
    {
      const jobOnsite = appliedJobs.filter((job)=>job.remote_or_onsite === 'Onsite');
      setFilterApplied(jobOnsite)
    }
  }
  useEffect(() => {
    const storedID = getJobApplication();
    if (jobs && jobs.length > 0) {
      const applied = jobs.filter((job) => storedID.includes(job.id));
      setAppliedJobs(applied);
      setFilterApplied(applied);
    }
  }, [jobs]);

  


  console.log(appliedJobs);
  return (
    <div className="py-6 lg:py-12 text-center">
      <h2 className="text-lg md:text-xl lg:text-3xl">
        {" "}
        Total Applied Jobs : {appliedJobs.length}
      </h2>
      {/* ============== selection ============= */}
      <div className="py-4 lg:py-6">
      <select onChange={(e)=>handleFilter(e.target.value)}  className="select select-primary w-full max-w-xs">
        <option value='all' >All Jobs</option>
        <option value='remote'>Remote</option>
        <option value='onsite'>On-Site</option>
      </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
         filterApplied && filterApplied?.map((job)=><div key={job.id}>
          <div >
          <p>Company Name: {job.company_name}</p>
          <p> Job Id: {job.id}</p>
          <p>Job Type: {job.job_title}</p>
          <p>Job Type: {job.remote_or_onsite}</p>
          </div>
         </div>)
        }
      </div>
      
    </div>
  );
};

export default AppliedJobs;
