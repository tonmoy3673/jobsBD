

const Job = ({job}) => {
    const {location,remote_or_onsite,company_name,job_title,job_type,salary,logo}=job
    console.log(job);
    return (
        <div>
            <div>
                <img src={logo} alt="logo"/>
            </div>
        </div>
    );
};

export default Job;