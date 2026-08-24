import ProductTable 
from "../admin/ProductTable";



const products=[

{
id:1,
bahan:"A12",
ukuran:"3x4",
warna:"Biru",
stok:50
},

{
id:2,
bahan:"PVC",
ukuran:"4x6",
warna:"Orange",
stok:30
},

{
id:3,
bahan:"Kanvas",
ukuran:"2x3",
warna:"Hijau",
stok:20
}

];



export default function ManageProduct(){


return (

<div>


<div

className="
flex
justify-between
items-center
mb-8
"

>


<h1

className="
text-3xl
font-bold
"

>

Kelola Barang

</h1>



<button

className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"

>

Tambah Barang

</button>


</div>




<ProductTable

products={products}

/>



</div>


)

}