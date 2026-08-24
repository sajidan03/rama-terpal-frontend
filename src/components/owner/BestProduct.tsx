const products=[

{
nama:"Terpal A12",
terjual:120
},

{
nama:"Terpal PVC",
terjual:80
},

{
nama:"Terpal Kanvas",
terjual:50
}

];



export default function BestProduct(){


return (

<div

className="
bg-white
rounded-2xl
shadow
p-6
"

>


<h2

className="
text-xl
font-bold
mb-5
"

>

Produk Terlaris

</h2>



<div

className="
space-y-4
"

>


{

products.map(

(item,index)=>(


<div

key={index}

className="
flex
justify-between
border-b
pb-3
"

>


<span>

{item.nama}

</span>


<span

className="
font-bold
text-blue-600
"

>

{item.terjual} pcs

</span>


</div>


)

)

}



</div>


</div>


)

}