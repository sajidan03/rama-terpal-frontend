interface Props {

products:any[];

}



export default function ProductTable({

products

}:Props){



return (

<div

className="
bg-white
rounded-2xl
shadow
overflow-hidden
"

>


<table

className="
w-full
"

>


<thead

className="
bg-blue-600
text-white
"

>

<tr>


<th className="p-4 text-left">

ID

</th>


<th className="p-4 text-left">

Bahan

</th>


<th className="p-4 text-left">

Ukuran

</th>


<th className="p-4 text-left">

Warna

</th>


<th className="p-4 text-left">

Stok

</th>


<th className="p-4">

Action

</th>


</tr>


</thead>



<tbody>


{

products.map(

(item)=>(


<tr

key={item.id}

className="
border-b
"

>


<td className="p-4">

{item.id}

</td>


<td className="p-4">

{item.bahan}

</td>


<td className="p-4">

{item.ukuran}

</td>


<td className="p-4">

{item.warna}

</td>


<td className="p-4">

{item.stok}

</td>



<td

className="
p-4
space-x-2
"

>


<button

className="
bg-blue-500
text-white
px-3
py-1
rounded
"

>

Edit

</button>



<button

className="
bg-red-500
text-white
px-3
py-1
rounded
"

>

Hapus

</button>


</td>


</tr>


)

)

}



</tbody>



</table>


</div>


)

}