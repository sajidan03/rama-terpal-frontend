import {

DollarSign,

Package,

TrendingUp,

ShoppingBag

} from "lucide-react";



import OwnerStatisticCard

from "../../components/owner/OwnerStatisticCard";


import BestProduct

from "../../components/owner/BestProduct";


import StockWarning

from "../../components/owner/StockWarning";



export default function DashboardOwner(){



return (

<div>


<h1

className="
text-3xl
font-bold
mb-8
"

>

Dashboard Pemilik

</h1>





{/* FILTER */}

<div

className="
bg-white
shadow
rounded-xl
p-5
mb-8
"

>


<h3

className="
font-medium
"

>

Periode Laporan

</h3>



<select

className="
border
rounded-lg
p-3
mt-3
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


<OwnerStatisticCard

title="Total Omzet"

value="Rp 75 Juta"

icon={DollarSign}

/>



<OwnerStatisticCard

title="Total Produk"

value="150"

icon={Package}

/>




<OwnerStatisticCard

title="Pertumbuhan"

value="+25%"

icon={TrendingUp}

/>




<OwnerStatisticCard

title="Pesanan"

value="320"

icon={ShoppingBag}

/>


</div>







<div

className="
grid
md:grid-cols-2
gap-8
"

>


<BestProduct/>


<StockWarning/>


</div>




</div>


)

}