import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../Utility/LocalStorage";


const AppliedJobs = () => {
    const [appliedJobs,setAppliedJobs]=useState([])
    const jobs=useLoaderData();
    console.log(jobs);
    useEffect(()=>{
        const storedID=getJobApplication();
        if (jobs && jobs.length>0) {
            const applied=jobs.filter((job)=>storedID.includes(job.id));
            setAppliedJobs(applied);
        }
    },[jobs])
console.log(appliedJobs);
    return (
        <div className="py-6 lg:py-12 text-center">
            <h2 className="text-lg md:text-xl lg:text-3xl"> Total Applied Jobs : {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;