import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

ResponsiveContainer

} from "recharts";



const data=[

{
bulan:"Jan",
penjualan:15000000
},

{
bulan:"Feb",
penjualan:20000000
},

{
bulan:"Mar",
penjualan:17500000
},

{
bulan:"Apr",
penjualan:30000000
},

{
bulan:"Mei",
penjualan:25000000
}

];



export default function SalesChart(){


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
font-bold
text-xl
mb-5
"

>

Grafik Penjualan

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<LineChart

data={data}

>


<CartesianGrid

strokeDasharray="3 3"

/>



<XAxis

dataKey="bulan"

/>



<YAxis />



<Tooltip />



<Line

type="monotone"

dataKey="penjualan"

stroke="#2563eb"

strokeWidth={3}

/>



</LineChart>


</ResponsiveContainer>



</div>


)

}