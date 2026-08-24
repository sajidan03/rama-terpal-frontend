import {

Link

} from "react-router-dom";



interface Props{

title:string;

image:string;

description:string;

}



export default function CategoryCard({

title,

image,

description

}:Props){



return (

<div

className="
bg-white
rounded-2xl
overflow-hidden
shadow
hover:shadow-xl
transition
"

>


<img

src={image}

className="
h-48
w-full
object-cover
"

/>



<div

className="
p-5
"

>


<h3

className="
font-bold
text-xl
"

>

{title}

</h3>


<p

className="
text-gray-600
mt-2
"

>

{description}

</p>



<Link

to="/kategori"

className="
inline-block
mt-4
text-blue-600
font-medium
"

>

Lihat Produk →

</Link>


</div>



</div>


)

}