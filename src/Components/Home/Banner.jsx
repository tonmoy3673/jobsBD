
 import user from '/public/Images/users/user.png';
const Banner=()=>{
    return (
        <div className="banner-container lg:flex items-center justify-between py-6 md:py-10 lg:py-16">
           <div>
           <h1 className='text-xl md:text-2xl lg:text-5xl font-semibold leading-relaxed lg:leading-[55px] mb-2 lg:mb-3'>One Step <br/> Closer To Your <br/>
            <span className='text-[#6495ED]'>Dream Job</span>
            </h1>
            <p className='w-full lg:w-[550px] leading-[30px] text-sm md:text-lg mb-2 lg:mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <div>
                <button className="common-btn hover:bg-amber-500 py-[5px] lg:py-[10px] px-2 lg:px-[15px]"> Get Stared</button>
            </div>
           </div>

           {/* ============= Image Part ======== */}
           <div>
            <img src={user} className='lg:w-[400px] md:h-[350px] ' alt='user'/>
           </div>
        </div>
    )
};

export default Banner;