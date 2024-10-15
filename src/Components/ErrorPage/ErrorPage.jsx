import { Link, useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const error=useRouteError();
    return (
        <div>
            <h2 className="text-lg lg:text-xl font-semibold text-blue-700 py-2">Oops!</h2>
            <h4 className="font-semibold text-red-700 mb-2  text-lg lg:text-xl">An unexpected Error has been Occurred.</h4>
            <div className="py-2">
                <p className="text-red-800">{error.statusText || error.message}</p>
            </div>
            <Link to='/home'>Go Back to Home Page</Link>
        </div>
    )
};

export default ErrorPage;