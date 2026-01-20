import {Link} from "@tanstack/react-router";
import {useSelector} from "react-redux";


function DashboardButton(){
    const {isAuthenticated}=useSelector((state)=>state.auth);
    return(
    <>    
    {(isAuthenticated=="T")?
        <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
            Dashboard
        </Link>
        :null
    }
    </>
    );
}

export default DashboardButton;