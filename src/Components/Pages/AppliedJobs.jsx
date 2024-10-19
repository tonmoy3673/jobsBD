import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/LocalStorage";
import FilterJobs from "./FilterJobs";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterApplied,setFilterApplied]=useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedID = getJobApplication();
    if (jobs && jobs.length > 0) {
      const applied = jobs.filter((job) => storedID.includes(job.id));
      setAppliedJobs(applied);
      setFilterApplied(applied);
    }
  }, [jobs]);

  const handleFilter=filter=>{
    if(filter==='all'){
      setFilterApplied(filterApplied)
    }
    
  }


  console.log(appliedJobs);
  return (
    <div className="py-6 lg:py-12 text-center">
      <h2 className="text-lg md:text-xl lg:text-3xl">
        {" "}
        Total Applied Jobs : {appliedJobs.length}
      </h2>

      {/* ============== selection ============= */}
      <div className="py-4 lg:py-6">
      <select  className="select select-primary w-full max-w-xs">
        <option defaultChecked onSelect={()=>handleFilter('all')}>All Jobs</option>
        <option>Remote</option>
        <option>On-Site</option>
      </select>
      </div>
      <div>
        {
          filterApplied.map((job)=><FilterJobs FilterJobs={job} key={job.id}></FilterJobs>)
        }
      </div>
      
    </div>
  );
};

export default AppliedJobs;
