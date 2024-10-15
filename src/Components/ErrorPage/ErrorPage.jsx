import { Link, useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const error=useRouteError();
    return (
        <div className="text-center py-4 md:py-8">
            <h2 className="text-lg lg:text-2xl font-semibold text-blue-700 py-2">Oops!</h2>
            <h4 className="font-semibold text-red-700 mb-2  text-lg lg:text-xl">An unexpected Error has been Occurred.</h4>
            <div className="py-2">
                {
                    error.status && (
                        <span className="text-red-900 font-bold">{error.status}</span>
                    )
                }
                <p className="text-red-800 font-semibold">{error.statusText || error.message}</p>
            </div>
            <Link to='/home' className="underline text-blue-800">Go Back to Home Page</Link>
        </div>
    )
};

export default ErrorPage;