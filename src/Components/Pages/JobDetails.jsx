import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/LocalStorage";


const JobDetails=()=>{
    const jobs= useLoaderData();
    const [applied,setApplied]=useState(false);
    const {id}=useParams();
    const jobId= parseInt(id);


    const job=jobs.find((job)=>job.id===jobId)
    console.log(applied);
    const {company_name,educational_requirements,job_description,job_title,job_responsibility,logo}=job


    const handleApply=()=>{
        saveJobApplication(jobId);
        setApplied(true);
    }

    return (
        <div className="py-8 lg:py-12 text-center">
            <div className="flex items-center justify-center">
                <img src={logo} alt="logo"/>
            </div>
            <h3 className="py-2">{company_name}</h3>
            <h3>{educational_requirements}</h3>
            <h3>{job_description}</h3>
            <h3>{job_title}</h3>
            <p>{job_responsibility}</p>

            <div className="py-2 md:py-4">
                <button onClick={handleApply}  className={`${applied ? '!cursor-not-allowed !bg-red-500' : 'common-btn hover:bg-amber-500'} py-[5px] lg:py-[10px] px-2 lg:px-[15px]`} >{applied ?'Applied':'Apply'}</button>
            </div>
        </div>
    )
};

export default JobDetails;