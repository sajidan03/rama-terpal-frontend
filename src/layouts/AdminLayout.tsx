import {
Outlet
} from "react-router-dom";


import AdminSidebar 
from "../components/admin/AdminSidebar";



export default function AdminLayout(){



return (

<div>


<AdminSidebar/>



<main

className="
ml-64
p-8
min-h-screen
bg-gray-100
"

>


<Outlet/>


</main>



</div>

)


}