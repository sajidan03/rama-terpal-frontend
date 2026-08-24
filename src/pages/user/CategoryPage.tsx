import ProductCard from "../../components/user/ProductCard";


const products=[

{
id:1,
bahan:"Terpal A12",
warna:"Biru",
ukuran:"3x4",
stok:50,
harga:250000
},

{
id:2,
bahan:"PVC",
warna:"Orange",
ukuran:"4x6",
stok:20,
harga:500000
}

]


export default function CategoryPage(){


return (

<div
className="
px-6
py-10
"
>


<h1
className="
text-3xl
font-bold
mb-8
"
>

Kategori Terpal

</h1>



<div
className="
flex
gap-4
mb-10
"
>

<button
className="
bg-blue-600
text-white
px-5
py-2
rounded-lg
"
>

Semua

</button>


<button
className="
border
px-5
py-2
rounded-lg
"
>

PVC

</button>


<button
className="
border
px-5
py-2
rounded-lg
"
>

Kanvas

</button>


</div>




<div

className="
grid
md:grid-cols-3
gap-8
"

>


{
products.map(

p=>(

<ProductCard

key={p.id}

product={p}

/>

)

)

}


</div>


</div>

)

}