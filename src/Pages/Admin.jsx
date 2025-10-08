import { useNavigate } from "react-router-dom";

function Admin () {
    const auth = localStorage.getItem("auth");
    const navigate = useNavigate();

    if(!auth){
        navigate("/login");
    }

    return(
        <div>
            <h1>Admin Panel</h1>
        </div>
    )
}

export default Admin;