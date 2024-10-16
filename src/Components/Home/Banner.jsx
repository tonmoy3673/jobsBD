
 import user from '/public/Images/users/user.png';
const Banner=()=>{
    return (
        <div className="banner-container ">
           <div>
           <h1>One Step <br/> Closer To Your <br/>
            <span>Dream Job</span>
            </h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <div>
                <button className="common-btn bg-[#2596be] text-white"> Get Stared</button>
            </div>
           </div>

           {/* ============= Image Part ======== */}
           <div>
            <img src={user} className='lg:w-[450px] md:h-[350px] ' alt='user'/>
           </div>
        </div>
    )
};

export default Banner;