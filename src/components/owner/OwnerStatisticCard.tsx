import {

type LucideIcon

} from "lucide-react";


interface Props{

title:string;

value:string;

icon:LucideIcon;

}



export default function OwnerStatisticCard({

title,

value,

icon:Icon

}:Props){


return (

<div

className="
bg-white
rounded-2xl
shadow
p-6
flex
justify-between
items-center
"

>


<div>


<p

className="
text-gray-500
"

>

{title}

</p>


<h2

className="
text-3xl
font-bold
mt-2
"

>

{value}

</h2>


</div>



<div

className="
bg-blue-600
text-white
p-4
rounded-xl
"

>

<Icon/>

</div>


</div>


)

}