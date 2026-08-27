import { useState } from "react";
import {
  Ruler,
  Send,
  Layers,
  FileText
} from "lucide-react";


const types = [
  "A12",
  "A10",
  "A8",
  "A5",
  "A3",
  "A2",
  "Makmur"
];


export default function CustomPage(){


const [type,setType]=useState("A12");

const [panjang,setPanjang]=useState("");

const [lebar,setLebar]=useState("");

const [catatan,setCatatan]=useState("");



const pesanWhatsapp = () => {


const pesan = `
Halo Rama Terpal,

Saya ingin membuat pesanan terpal custom.

Detail pesanan:

Type : ${type}

Ukuran :
${panjang || "-"} Meter x ${lebar || "-"} Meter


Catatan:
${catatan || "-"}


Mohon informasi harga dan ketersediaan.

Terima kasih.
`;



window.open(

`https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`,

"_blank"

);


};



return (

<div
className="
min-h-screen
bg-gray-50
px-5
py-10
"
>


<div
className="
mx-auto
max-w-4xl
"
>


{/* HEADER */}

<div>

<h1
className="
text-3xl
font-semibold
text-gray-900
"
>
Custom Terpal
</h1>


<p
className="
mt-2
text-gray-500
"
>
Buat ukuran terpal sesuai kebutuhan Anda
</p>


</div>






<div
className="
mt-8
rounded-3xl
bg-white
p-6
shadow-sm
border
border-gray-100
sm:p-8
"
>




{/* TYPE */}


<div>

<div
className="
flex
items-center
gap-2
text-gray-800
font-medium
"
>

<Layers size={20}/>

Pilih Type Terpal

</div>



<div
className="
mt-4
flex
flex-wrap
gap-3
"
>


{
types.map(item=>(


<button

key={item}

onClick={()=>setType(item)}

className={`
rounded-xl
px-5
py-3
text-sm
transition

${
type===item
?
"bg-blue-600 text-white shadow-md"
:
"bg-gray-100 text-gray-700 hover:bg-gray-200"
}

`}

>

{item}

</button>


))

}


</div>


</div>







{/* UKURAN */}


<div
className="
mt-8
"
>


<div
className="
flex
items-center
gap-2
font-medium
text-gray-800
"
>

<Ruler size={20}/>

Ukuran Custom

</div>



<div
className="
mt-4
grid
gap-5
sm:grid-cols-2
"
>


<div>


<label
className="
text-sm
text-gray-500
"
>
Panjang (Meter)
</label>


<input

type="number"

step="0.01"

placeholder=""

value={panjang}

onChange={
e=>setPanjang(e.target.value)
}

className="
mt-2
w-full
rounded-xl
border
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>




<div>


<label
className="
text-sm
text-gray-500
"
>
Lebar (Meter)
</label>


<input

type="number"

step="0.01"

placeholder=""

value={lebar}

onChange={
e=>setLebar(e.target.value)
}

className="
mt-2
w-full
rounded-xl
border
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>


</div>


</div>








{/* PREVIEW */}


<div
className="
mt-8
rounded-2xl
bg-blue-50
p-5
"
>


<p
className="
text-sm
text-blue-600
"
>
Preview Pesanan
</p>


<h3
className="
mt-3
text-lg
font-medium
text-gray-800
"
>

Terpal {type}

</h3>


<p
className="
mt-1
text-gray-600
"
>

Ukuran:

{panjang || "0"}

Meter ×

{lebar || "0"}

Meter

</p>


</div>








{/* CATATAN */}


<div
className="
mt-8
"
>


<div
className="
flex
items-center
gap-2
font-medium
text-gray-800
"
>

<FileText size={20}/>

Catatan Tambahan

</div>



<textarea

value={catatan}

onChange={
e=>setCatatan(e.target.value)
}

placeholder="
Contoh:
Untuk penutup kolam,
warna biru,
tambahkan ring,
dll
"

rows={4}

className="
mt-3
w-full
rounded-xl
border
p-4
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>








<button

onClick={pesanWhatsapp}

className="
mt-8
flex
w-full
items-center
justify-center
gap-3
rounded-xl
bg-orange-500
py-4
font-medium
text-white
transition
hover:bg-orange-600
"

>


<Send size={20}/>

Pesan Custom via WhatsApp


</button>



</div>


</div>


</div>


)

}