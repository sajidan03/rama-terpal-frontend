import {

Link

} from "react-router-dom";


import {

ArrowRight

} from "lucide-react";


export default function HeroSection(){


return (

<section

className="
bg-gradient-to-r
from-blue-700
to-blue-500
text-white
py-24
"

>


<div

className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
"

>


<div>


<h1

className="
text-5xl
font-bold
leading-tight
"

>

Terpal Berkualitas
Untuk Semua Kebutuhan


</h1>



<p

className="
mt-5
text-lg
text-blue-100
"

>

Produk terpal dengan berbagai pilihan bahan,
ukuran standar dan custom.


</p>



<div

className="
mt-8
flex
gap-4
"

>


<Link

to="/kategori"

className="
bg-orange-500
px-6
py-3
rounded-xl
flex
gap-2
items-center
"

>

Lihat Produk

<ArrowRight size={18}/>


</Link>



<Link

to="/custom"

className="
bg-white
text-blue-700
px-6
py-3
rounded-xl
"

>

Custom


</Link>



</div>


</div>





<div>

<img

src="
https://images.unsplash.com/photo-1586864387789-628af9feed72
"

className="
rounded-3xl
shadow-xl
"
/>

</div>




</div>


</section>


)


}