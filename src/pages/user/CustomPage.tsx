import {
useState
} from "react";


export default function CustomPage(){


const [data,setData]=useState({

nama:"",
panjang:"",
lebar:"",
bahan:"A12"

});



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

Custom Terpal

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


<input

placeholder="Nama"

className="input"

onChange={
e=>
setData({
...data,
nama:e.target.value
})
}

/>



<select

className="input"

onChange={
e=>
setData({
...data,
bahan:e.target.value
})
}

>

<option>A12</option>

<option>PVC</option>

<option>Kanvas</option>


</select>




<input

placeholder="Panjang Meter"

className="input"

onChange={
e=>
setData({
...data,
panjang:e.target.value
})
}

/>



<input

placeholder="Lebar Meter"

className="input"

onChange={
e=>
setData({
...data,
lebar:e.target.value
})
}

/>



<button

className="
bg-orange-500
text-white
px-6
py-3
rounded-lg
"

>

Pesan WhatsApp

</button>


</div>



</div>


)

}