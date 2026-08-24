import {

Package,

ShoppingCart,

DollarSign,

Layers

} from "lucide-react";


import StatisticCard 
from "../admin/StatisticCard";


import SalesChart
from "../admin/SalesChart";



export default function Dashboard(){


return (

<div>


<h1

className="
text-3xl
font-bold
mb-8
"

>

Dashboard Admin

</h1>





{/* FILTER */}

<div

className="
bg-white
p-5
rounded-xl
shadow
mb-8
"

>


<label

className="
font-medium
"

>

Filter Bulan

</label>



<select

className="
border
p-3
rounded-lg
ml-5
"

>

<option>

Januari 2026

</option>


<option>

Februari 2026

</option>


<option>

Maret 2026

</option>


</select>


</div>





{/* STATISTIC */}

<div

className="
grid
md:grid-cols-4
gap-6
mb-10
"

>


<StatisticCard

title="Total Produk"

value="120"

icon={Package}

color="bg-blue-600"

/>


<StatisticCard

title="Total Stok"

value="5.400"

icon={Layers}

color="bg-green-600"

/>


<StatisticCard

title="Penjualan"

value="Rp 25 Juta"

icon={DollarSign}

color="bg-orange-500"

/>


<StatisticCard

title="Pesanan"

value="85"

icon={ShoppingCart}

color="bg-purple-600"

/>


</div>





<SalesChart />



</div>


)

}