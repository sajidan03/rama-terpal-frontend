import {
useState
} from "react";


export default function CheckoutPage(){


const [form,setForm]=useState({

nama:"",
telepon:"",
alamat:"",
produk:"Terpal A12",
ukuran:"3x4",
bahan:"A12"

});



function checkout(){


const text=

`
Halo Rama Terpal,

Saya ingin pesan:

Nama:
${form.nama}

Telepon:
${form.telepon}

Alamat:
${form.alamat}

Produk:
${form.produk}

Bahan:
${form.bahan}

Ukuran:
${form.ukuran}

`;



window.open(

"https://wa.me/628123456789?text="
+
encodeURIComponent(text)

);


}



return (

<div

className="
max-w-3xl
mx-auto
py-10
px-6
"

>


<h1

className="
text-3xl
font-bold
mb-8
"

>

Checkout


</h1>



<div

className="
bg-white
shadow
rounded-xl
p-8
space-y-4
"

>


{
Object.keys(form).map(

(item)=>(

<input

key={item}

placeholder={item}

className="
border
w-full
p-3
rounded-lg
"

onChange={
e=>

setForm({

...form,

[item]:e.target.value

})

}

/>

)

)

}




<button

onClick={checkout}

className="
bg-green-600
text-white
w-full
py-3
rounded-lg
"

>

Kirim WhatsApp


</button>


</div>



</div>

)

}