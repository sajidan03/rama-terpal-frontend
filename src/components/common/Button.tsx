import clsx from "clsx";


interface Props{

children:React.ReactNode;

variant?:
"primary" |
"orange" |
"outline";

onClick?:()=>void;

className?:string;

}



export default function Button({

children,

variant="primary",

onClick,

className

}:Props){


return (

<button

onClick={onClick}

className={clsx(

"px-6 py-3 rounded-xl font-medium transition",

{

"bg-blue-600 text-white hover:bg-blue-700":
variant==="primary",


"bg-orange-500 text-white hover:bg-orange-600":
variant==="orange",


"border border-blue-600 text-blue-600 hover:bg-blue-50":
variant==="outline"

},

className

)}

>

{children}

</button>


)

}