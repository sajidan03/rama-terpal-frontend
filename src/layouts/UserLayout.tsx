import {
Outlet
} from "react-router-dom";


import UserNavbar from "../components/user/UserNavbar";


export default function UserLayout(){


return (

<div>


<UserNavbar/>


<main
className="
pt-20
"
>

<Outlet/>

</main>


</div>


)


}