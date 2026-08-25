import {
Link
} from "react-router-dom";


interface ProductCardProps{

product:any;

}



export default function ProductCard({

product

}:ProductCardProps){



return (

<div

className="
bg-white
rounded-xl
overflow-hidden
border
border-gray-100
hover:shadow-xl
transition
"

>


<div

className="
relative
h-52
"

>


<img

src={product.image}

className="
w-full
h-full
object-cover
"

/>


<span

className="
absolute
top-3
left-3
bg-orange-500
text-white
text-xs
px-3
py-1
rounded-full
"

>

Terlaris

</span>


</div>





<div className="p-4">


<h3

className="
font-semibold
text-gray-800
"

>

{product.nama}

</h3>



<p

className="
text-orange-500
font-bold
text-xl
mt-3
"

>

Rp
{product.harga.toLocaleString("id-ID")}

</p>




<p

className="
text-sm
text-gray-500
mt-2
"

>

{product.ukuran}

</p>




<div

className="
flex
justify-between
mt-5
text-sm
"

>


<span>

⭐ 4.9

</span>



<Link

to={`/produk/${product.id}`}

className="
text-blue-600
"

>

Lihat Detail

</Link>


</div>



</div>



</div>


)


}