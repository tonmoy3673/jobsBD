import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {location,remote_or_onsite,company_name,job_title,job_type,salary,logo}=job
    console.log(job);
    return (
        <div className="">
            <div>
                <img src={logo} alt="logo" className="w-[50px] lg:w-[100px] mx-auto"/>
            </div>
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <div className="flex gap-2 items-center justify-center">
                <button>{remote_or_onsite}</button>
                <button>{job_type}</button>
            </div>
            <div>
            <div>
                {/* ======== img= */}
            <p>{location}</p>
            </div>
            <div>
                {/* ====== img ========= */}
                <p>{salary}</p>
            </div>
            </div>
            <div className="py-2 md:py-4">
                <Link to=''>
                <button className="common-btn hover:bg-amber-500 py-[5px] lg:py-[10px] px-2 lg:px-[15px]">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Job;