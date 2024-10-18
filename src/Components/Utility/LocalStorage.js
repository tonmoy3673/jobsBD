
const getJobApplication= ()=>{
    const storedJob=sessionStorage.getItem('job-application');
    if (storedJob) {
        return JSON.parse(storedJob)
    }
    return []
}

const saveJobApplication =id=>{
    const storeJobApplication=getJobApplication();
    const exists= storeJobApplication.find((jobID)=>jobID===id);
    
    if (!exists) {
        storeJobApplication.push(id)
        sessionStorage.setItem('job-application',JSON.stringify(storeJobApplication))
    }
};

export { getJobApplication, saveJobApplication };

