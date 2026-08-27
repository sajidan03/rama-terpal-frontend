import { useState } from "react";
import {
    Search,
    Package,
    Ruler,
    ArrowRight
} from "lucide-react";

import { products } from "../../data/products";


const categories = [
    "Semua",
    "A12",
    "A10",
    "A8",
    "A5",
    "A3",
    "A2",
    "Makmur"
];


function formatRupiah(value: number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(value)

}



export default function CategoryPage() {


    const [active, setActive] = useState("Semua");

    const [keyword, setKeyword] = useState("");



    const filteredProducts =
        products.filter(product => {


            const categoryMatch =
                active === "Semua"
                ||
                product.type === active;


            const searchMatch =
                `${product.type} ${product.ukuran}`
                    .toLowerCase()
                    .includes(keyword.toLowerCase());


            return categoryMatch && searchMatch;


        });



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
max-w-7xl
"
            >


                {/* HEADER */}

                <div>

                    <h1
                        className="
text-3xl
font-semibold
tracking-tight
text-gray-900
"
                    >
                        Katalog Terpal
                    </h1>


                    <p
                        className="
mt-2
text-sm
text-gray-500
"
                    >
                        Temukan terpal berdasarkan tipe dan ukuran yang tersedia
                    </p>


                </div>




                {/* CATEGORY */}


                <div
                    className="
mt-8
grid
grid-cols-2
gap-4
sm:grid-cols-4
lg:grid-cols-8
"
                >


                    {
                        categories.map(category => {


                            const total =
                                category === "Semua"
                                    ?
                                    products.length
                                    :
                                    products.filter(
                                        item => item.type === category
                                    ).length;



                            return (

                                <button

                                    key={category}

                                    onClick={() => setActive(category)}

                                    className={`
rounded-2xl
border
p-5
text-left
transition-all
duration-300

${active === category
                                            ?
                                            "border-blue-600 bg-blue-600 text-white shadow-lg"
                                            :
                                            "border-gray-100 bg-white hover:-translate-y-1 hover:shadow-md"
                                        }

`}

                                >


                                    <p
                                        className="
text-2xl
font-semibold
"
                                    >

                                        {category}

                                    </p>


                                    <p
                                        className={`
mt-2
text-xs

${active === category
                                                ?
                                                "text-blue-100"
                                                :
                                                "text-gray-500"
                                            }

`}
                                    >

                                        {
                                            category === "Semua"
                                                ?
                                                "Semua Produk"
                                                :
                                                "Terpal " + category
                                        }

                                    </p>


                                    <p
                                        className={`
mt-4
text-xs
font-medium

${active === category
                                                ?
                                                "text-white"
                                                :
                                                "text-blue-600"
                                            }

`}
                                    >

                                        {total} Produk

                                    </p>


                                </button>

                            )

                        })

                    }


                </div>







                {/* SEARCH */}


                <div
                    className="
relative
mt-10
max-w-xl
"
                >


                    <Search

                        size={20}

                        className="
absolute
left-4
top-3.5
text-gray-400
"

                    />


                    <input

                        value={keyword}

                        onChange={
                            e => setKeyword(e.target.value)
                        }

                        placeholder="
Cari ukuran atau tipe terpal...
"

                        className="
w-full
rounded-xl
border
border-gray-200
bg-white
py-3
pl-12
pr-5
text-sm
outline-none
focus:border-blue-500
focus:ring-2
focus:ring-blue-100
"

                    />


                </div>






                {/* RESULT */}


                <div
                    className="
mt-10
mb-6
flex
items-center
justify-between
"
                >


                    <div>

                        <h2
                            className="
text-xl
font-semibold
text-gray-800
"
                        >
                            Produk Terpal
                        </h2>


                        <p
                            className="
mt-1
text-sm
text-gray-500
"
                        >
                            {filteredProducts.length} produk tersedia
                        </p>


                    </div>


                </div>








                {/* PRODUCT GRID */}


                <div
                    className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
"
                >


                    {
                        filteredProducts.map(product => (


                            <div

                                key={product.id}

                                className="
group
overflow-hidden
rounded-2xl
border
border-gray-100
bg-white
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"

                            >


                                {/* IMAGE */}

                                <div
                                    className="
relative
h-52
overflow-hidden
bg-gray-100
"
                                >


                                    <img

                                        src={product.image}

                                        alt={`Terpal ${product.type}`}

                                        className="
h-full
w-full
object-cover
transition
duration-500
group-hover:scale-105
"

                                    />


                                    <div
                                        className="
absolute
left-4
top-4
rounded-full
bg-white
px-3
py-1
text-xs
font-medium
text-blue-600
shadow-sm
"
                                    >

                                        {product.type}

                                    </div>


                                </div>







                                {/* CONTENT */}


                                <div
                                    className="
p-5
"
                                >


                                    <h3
                                        className="
text-base
font-medium
text-gray-800
"
                                    >

                                        Terpal {product.type}

                                    </h3>


                                    <div
                                        className="
mt-3
space-y-2
text-sm
text-gray-500
"
                                    >


                                        <p
                                            className="
flex
items-center
gap-2
"
                                        >

                                            <Ruler size={15} />

                                            Ukuran {product.ukuran}

                                        </p>



                                        <p
                                            className="
flex
items-center
gap-2
"
                                        >

                                            <Package size={15} />

                                            Stok {product.stok} tersedia

                                        </p>


                                    </div>




                                    <div
                                        className="
mt-5
flex
items-end
justify-between
"
                                    >


                                        <div>

                                            <p
                                                className="
text-xs
text-gray-400
"
                                            >
                                                Harga
                                            </p>


                                            <p
                                                className="
mt-1
text-lg
font-semibold
text-orange-500
"
                                            >

                                                {formatRupiah(product.harga)}

                                            </p>


                                        </div>



                                        <button

                                            className="
flex
items-center
gap-2
rounded-xl
bg-blue-600
px-4
py-2.5
text-sm
font-medium
text-white
transition
hover:bg-blue-700
"
                                        >

                                            Detail

                                            <ArrowRight size={16} />

                                        </button>



                                    </div>



                                </div>


                            </div>


                        ))

                    }


                </div>



            </div>


        </div>


    )

}