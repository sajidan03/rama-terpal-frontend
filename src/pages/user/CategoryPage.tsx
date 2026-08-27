import { useState } from "react";
import { Link } from "react-router-dom";
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



    const filteredProducts = products.filter(product => {


        const kategoriCocok =
            active === "Semua"
            ||
            product.type === active;



        const pencarianCocok =
            `${product.nama} ${product.ukuran} ${product.type}`
                .toLowerCase()
                .includes(
                    keyword.toLowerCase()
                );



        return kategoriCocok && pencarianCocok;


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


                            const jumlahProduk =
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
                                            "bg-blue-600 text-white shadow-lg"
                                            :
                                            "bg-white border-gray-100 hover:-translate-y-1 hover:shadow-md"
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
                                        className="
mt-2
text-xs
opacity-80
"
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
                                        className="
mt-4
text-xs
font-medium
"
                                    >

                                        {jumlahProduk} Produk

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

                        placeholder="Cari ukuran atau tipe terpal..."

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







                {/* LIST PRODUK */}


                <div
                    className="
mt-10
mb-6
"
                >


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
overflow-hidden
rounded-2xl
border
border-gray-100
bg-white
transition
duration-300
hover:-translate-y-1
hover:shadow-xl
"

                            >


                                {/* GAMBAR */}


                                <div
                                    className="
relative
h-52
bg-gray-100
overflow-hidden
"
                                >


                                    <img

                                        src={product.image}

                                        alt={product.nama}

                                        className="
h-full
w-full
object-cover
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
shadow
"
                                    >

                                        {product.type}

                                    </div>



                                </div>








                                {/* DETAIL CARD */}


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

                                        {product.nama}

                                    </h3>



                                    <div
                                        className="
mt-4
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

                                            {product.ukuran}

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
items-center
justify-between
"
                                    >


                                        <p
                                            className="
text-lg
font-semibold
text-orange-500
"
                                        >

                                            {formatRupiah(product.harga)}

                                        </p>





                                        <Link

                                            to={`/produk/${product.id}`}

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
hover:bg-blue-700
"

                                        >

                                            Detail

                                            <ArrowRight size={16} />

                                        </Link>



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