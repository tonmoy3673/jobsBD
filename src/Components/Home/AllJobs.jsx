import { useEffect, useState } from "react";
import Job from "./job";

const AllJobs=()=>{
    const [jobs,setJobs]=useState([]);
    const [jobLength,setJobLength]=useState(3);
    useEffect(()=>{
        fetch('/data/jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    
    return (
        <div id="all-jobs" className="py-8 lg:py-12 text-center">
            <div>
                <h2 className="text-xl lg:text-3xl font-semibold text-center mb-3">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 py-2 lg:py-8 mt-2 lg:mt-6 gap-4 lg:gap-8 items-center justify-center">
            {
                jobs && jobs.length>0 ? (
                    jobs.slice(0,jobLength).map((job)=><Job job={job} key={job.id}/>)
                ):(
                    <p>No Jobs Available</p>
                )
            }
            </div>
            {/* ========== show all Button ============ */}
            {
                 jobLength === jobs.length ? null: (
                    <div className="py-2">
                <button onClick={()=>setJobLength(jobLength+3)} className="common-btn hover:bg-amber-500 py-[5px] lg:py-[10px] px-2 lg:px-[15px]">Show All</button>
            </div> 
                )
               
            }
        </div>
    )
};

export default AllJobs;