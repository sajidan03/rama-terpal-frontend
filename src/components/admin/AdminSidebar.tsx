import {
NavLink
} from "react-router-dom";


import {

LayoutDashboard,
Package,
LogOut

} from "lucide-react";



export default function AdminSidebar(){



const menus=[

{
name:"Dashboard",
path:"/admin/dashboard",
icon:<LayoutDashboard size={20}/>
},


{
name:"Kelola Barang",
path:"/admin/product",
icon:<Package size={20}/>
}

];




return (

<aside

className="
fixed
left-0
top-0
h-screen
w-64
bg-blue-700
text-white
p-6
"

>



<h1
className="
text-2xl
font-bold
mb-10
"
>

Rama
<span className="text-orange-400">
Terpal
</span>


</h1>




<div
className="
space-y-3
"
>


{
menus.map(
(menu)=>(


<NavLink

key={menu.name}

to={menu.path}

className={({isActive})=>

`
flex
items-center
gap-3
px-4
py-3
rounded-lg

${
isActive

?
"bg-white text-blue-700"

:

"hover:bg-blue-600"

}

`

}

>


{menu.icon}

{menu.name}


</NavLink>


)

)

}


</div>




<div
className="
absolute
bottom-10
left-6
"
>


<button

className="
flex
items-center
gap-3
hover:text-orange-300
"

>


<LogOut size={20}/>

Logout


</button>


</div>


</aside>

)


}