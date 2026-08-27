import { useState } from "react";


export default function CheckoutPage() {


    const [form, setForm] = useState({

        nama: "",
        telepon: "",
        alamat: "",
        produk: "Terpal A12",
        ukuran: "3x4 Meter",
        bahan: "A12 Premium",
        jumlah: "1",
        catatan: ""

    });



    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };




    const checkout = () => {


        if (
            !form.nama ||
            !form.telepon ||
            !form.alamat
        ) {

            alert("Silahkan lengkapi data pemesan");

            return;

        }



        const pesan = `
Halo Rama Terpal,

Saya ingin melakukan pemesanan.

Produk:
${form.produk}

Ukuran:
${form.ukuran}

Bahan:
${form.bahan}

Jumlah:
${form.jumlah}

Nama:
${form.nama}

Nomor WhatsApp:
${form.telepon}

Alamat:
${form.alamat}

Catatan:
${form.catatan}

Terima kasih.
`;



        window.open(

            "https://wa.me/6285743116635?text=" +
            encodeURIComponent(pesan),

            "_blank"

        );


    };






    const inputStyle = `
    w-full
    border
    border-gray-200
    rounded-lg
    px-4
    py-3
    text-sm
    outline-none
    focus:border-blue-500
  `;



    return (

        <div className="
      min-h-screen
      bg-gray-50
      py-10
    ">



            <div className="
        max-w-6xl
        mx-auto
        px-5
      ">



                <h1 className="
          text-3xl
          font-bold
          text-gray-800
          mb-8
        ">
                    Checkout
                </h1>





                <div className="
          grid
          lg:grid-cols-2
          gap-6
        ">






                    {/* PRODUCT CARD */}


                    <div className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-6
          ">


                        <div className="
              h-64
              bg-blue-600
              rounded-xl
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-bold
            ">

                            RAMA TERPAL

                        </div>




                        <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mt-6
            ">

                            {form.produk}

                        </h2>




                        <p className="
              text-gray-500
              mt-2
            ">

                            Produk terpal berkualitas dengan pilihan ukuran dan bahan.

                        </p>






                        <div className="
              mt-6
              border
              border-gray-200
              rounded-xl
              p-4
            ">



                            <div className="
                flex
                justify-between
                py-2
              ">

                                <span className="text-gray-500">
                                    Ukuran
                                </span>


                                <b>
                                    {form.ukuran}
                                </b>


                            </div>





                            <div className="
                flex
                justify-between
                py-2
              ">


                                <span className="text-gray-500">
                                    Bahan
                                </span>


                                <b>
                                    {form.bahan}
                                </b>


                            </div>





                            <div className="
                flex
                justify-between
                py-2
              ">


                                <span className="text-gray-500">
                                    Jumlah
                                </span>


                                <b>
                                    {form.jumlah}
                                </b>


                            </div>



                        </div>


                    </div>









                    {/* FORM CARD */}


                    <div className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-6
          ">



                        <h2 className="
              text-xl
              font-bold
              text-gray-800
              mb-6
            ">

                            Detail Pemesanan

                        </h2>





                        <div className="
              space-y-5
            ">





                            <div>

                                <label className="
                  text-sm
                  text-gray-700
                  font-medium
                ">
                                    Nama Lengkap
                                </label>


                                <input

                                    name="nama"

                                    value={form.nama}

                                    onChange={handleChange}

                                    placeholder="Masukkan nama"

                                    className={inputStyle}

                                />

                            </div>







                            <div>

                                <label className="
                  text-sm
                  text-gray-700
                  font-medium
                ">
                                    Nomor WhatsApp
                                </label>


                                <input

                                    name="telepon"

                                    value={form.telepon}

                                    onChange={handleChange}

                                    placeholder="08xxxxxxxx"

                                    className={inputStyle}

                                />


                            </div>







                            <div>


                                <label className="
                  text-sm
                  text-gray-700
                  font-medium
                ">
                                    Alamat Pengiriman
                                </label>



                                <textarea

                                    name="alamat"

                                    value={form.alamat}

                                    onChange={handleChange}

                                    placeholder="Alamat lengkap"

                                    className={`
                    ${inputStyle}
                    h-28
                    resize-none
                  `}

                                />


                            </div>








                            <div className="
                grid
                grid-cols-2
                gap-4
              ">



                                <div>


                                    <label className="
                    text-sm
                    text-gray-700
                    font-medium
                  ">
                                        Ukuran
                                    </label>



                                    <select

                                        name="ukuran"

                                        value={form.ukuran}

                                        onChange={handleChange}

                                        className={inputStyle}

                                    >

                                        <option>
                                            3x4 Meter
                                        </option>

                                        <option>
                                            4x6 Meter
                                        </option>

                                        <option>
                                            Custom
                                        </option>


                                    </select>


                                </div>







                                <div>


                                    <label className="
                    text-sm
                    text-gray-700
                    font-medium
                  ">
                                        Bahan
                                    </label>



                                    <select

                                        name="bahan"

                                        value={form.bahan}

                                        onChange={handleChange}

                                        className={inputStyle}

                                    >


                                        <option>
                                            A12 Premium
                                        </option>


                                        <option>
                                            A15
                                        </option>


                                        <option>
                                            Heavy Duty
                                        </option>


                                    </select>


                                </div>



                            </div>









                            <div>


                                <label className="
                  text-sm
                  text-gray-700
                  font-medium
                ">
                                    Jumlah
                                </label>



                                <input

                                    type="number"

                                    name="jumlah"

                                    value={form.jumlah}

                                    onChange={handleChange}

                                    className={inputStyle}

                                />


                            </div>








                            <div>


                                <label className="
                  text-sm
                  text-gray-700
                  font-medium
                ">
                                    Catatan
                                </label>



                                <textarea

                                    name="catatan"

                                    value={form.catatan}

                                    onChange={handleChange}

                                    placeholder="Tambahkan catatan jika ada"

                                    className={`
                    ${inputStyle}
                    h-24
                    resize-none
                  `}

                                />


                            </div>








                            <button

                                onClick={checkout}

                                className="
                  w-full
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  font-semibold
                  py-3
                  rounded-lg
                "

                            >

                                Kirim WhatsApp


                            </button>




                        </div>



                    </div>






                </div>



            </div>



        </div>

    );

// cecep ganteng
}