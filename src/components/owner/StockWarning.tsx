const stocks=[

{
nama:"Terpal Kanvas",
stok:5
},

{
nama:"Terpal PVC",
stok:8
}

];



export default function StockWarning(){


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

Stok Menipis

</h2>




<div

className="
space-y-4
"

>


{

stocks.map(

(item,index)=>(


<div

key={index}

className="
flex
justify-between
bg-red-50
p-4
rounded-xl
"

>


<span>

{item.nama}

</span>


<span

className="
text-red-600
font-bold
"

>

{item.stok}

</span>


</div>


)

)

}



</div>



</div>


)

}