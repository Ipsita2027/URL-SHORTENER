import { logout } from "../store/slices/authSlice";
import {useDispatch,useSelector} from "react-redux";
import {Link,useNavigate} from "@tanstack/react-router";
import { logUserOut } from "../api/auth_user";

function AuthButton(){
    const {isAuthenticated}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogout=async (e)=>{
        try{
            const {message}=await logUserOut();
            console.log(message);
        }
        finally{
            dispatch(logout());
            navigate({to:"/"});
        }
    }
    

    return(
    <>
    {isAuthenticated=="T" ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium"
            >
              Logout
            </button>
          ) : (
            <Link to="/auth" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
              Login
            </Link>
          )}
    </>
    );
}

export default AuthButton;

