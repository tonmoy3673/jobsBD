import { useLoaderData, useParams } from "react-router-dom";


const JobDetails=()=>{
    const jobs= useLoaderData();
    const {id}=useParams();
    const jobId= parseInt(id);

    const job=jobs.find((job)=>job.id===jobId)
    const {company_name,educational_requirements,job_description,job_title,job_responsibility,logo}=job

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
        </div>
    )
};

export default JobDetails;