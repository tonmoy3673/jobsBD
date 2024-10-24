import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/LocalStorage";

const AppliedJobs =()=>{
  const jobs= useLoaderData();
  console.log(jobs);
  const [appliedJob,setAppliedJob]= useState([]);

  useEffect(()=>{
    const getApplied = getJobApplication();
    if (jobs && jobs.length>0) {
      const applied = jobs.filter((job)=>getApplied.includes(job.id))
      setAppliedJob(applied);
    }
      
    
  },[jobs])

  return (
    <div>
        <div>
          <h2 className="text-center text-3xl py-5 lg:py-10">Total Applied Jobs : {appliedJob.length}</h2>
        </div>
    </div>
  )
};

export default AppliedJobs;