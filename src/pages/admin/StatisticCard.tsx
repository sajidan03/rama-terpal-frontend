import { type LucideIcon
} from "lucide-react";


interface Props {

title:string;

value:string;

icon:LucideIcon;

color:string;

}



export default function StatisticCard({

title,

value,

icon:Icon,

color

}:Props){


return (

<div

className="
bg-white
rounded-2xl
shadow
p-6
flex
items-center
justify-between
"

>


<div>

<p

className="
text-gray-500
text-sm
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

className={`
p-4
rounded-xl
${color}
`}

>

<Icon

className="
text-white
"

/>

</div>



</div>

)


}