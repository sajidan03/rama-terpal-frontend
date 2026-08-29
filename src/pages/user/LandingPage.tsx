// import { Link } from "react-router-dom";

// import {
//   ArrowRight,
//   ShieldCheck,
//   Ruler,
//   Truck,
//   Boxes,
//   MapPin,
//   Phone,
//   Mail,
//   ShoppingBag,
//   Clock,
//   Camera,
//   Users,
//   Check,
// } from "lucide-react";

// import ProductCard from "../../components/user/ProductCard";
// import heroImage from "../../assets/landing.jpeg";

// // ======================================================
// // DATA DUMMY
// // ======================================================

// const products = [
//   {
//     id: 1,
//     nama: "Terpal A12 Premium Biru",
//     bahan: "A12",
//     warna: "Biru",
//     ukuran: "3 x 4 Meter",
//     harga: 250000,
//     stok: 50,
//     image:
//       "https://images.unsplash.com/photo-1586864387789-628af9feed72",
//   },
//   {
//     id: 2,
//     nama: "Terpal PVC Anti Air Premium",
//     bahan: "PVC",
//     warna: "Orange",
//     ukuran: "4 x 6 Meter",
//     harga: 500000,
//     stok: 30,
//     image:
//       "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
//   },
//   {
//     id: 3,
//     nama: "Terpal Kanvas Tebal",
//     bahan: "Kanvas",
//     warna: "Hijau",
//     ukuran: "2 x 3 Meter",
//     harga: 350000,
//     stok: 20,
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//   },
//   {
//     id: 4,
//     nama: "Terpal Truck Heavy Duty",
//     bahan: "Heavy Duty",
//     warna: "Hitam",
//     ukuran: "5 x 8 Meter",
//     harga: 850000,
//     stok: 15,
//     image:
//       "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
//   },
// ];

// const categories = [
//   {
//     title: "A5",
//     desc: "Terpal A5",
//   },
//   {
//     title: "A8",
//     desc: "Terpal A8",
//   },
//   {
//     title: "A12",
//     desc: "Terpal A12",
//   },
//   {
//     title: "PVC",
//     desc: "Terpal PVC",
//   },
//   {
//     title: "Kanvas",
//     desc: "Terpal Kanvas",
//   },
//   {
//     title: "Custom",
//     desc: "Custom Ukuran",
//   },
// ];

// const features = [
//   {
//     title: "Bahan Berkualitas",
//     desc: "Material kuat dan tahan lama",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Custom Ukuran",
//     desc: "Dibuat sesuai kebutuhan",
//     icon: Ruler,
//   },
//   {
//     title: "Banyak Pilihan",
//     desc: "Beragam tipe dan ukuran",
//     icon: Boxes,
//   },
//   {
//     title: "Mudah Dipesan",
//     desc: "Checkout melalui WhatsApp",
//     icon: Truck,
//   },
// ];

// // ======================================================
// // LANDING PAGE
// // ======================================================

// export default function LandingPage() {
//   const featuredProducts = products.slice(0, 4);

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-gray-50">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section className="relative overflow-hidden bg-[#f6f5f1]">

//         {/* DECORATION LINE */}
//         <div className="absolute left-0 top-0 hidden h-full w-px bg-gray-200 xl:block" />

//         <div
//           className="
//             mx-auto
//             max-w-7xl

//             px-4
//             py-8

//             sm:px-6
//             sm:py-10

//             lg:px-8
//             lg:py-12

//             xl:px-30
//             xl:py-14
//           "
//         >
//           <div
//             className="
//               grid
//               items-stretch
//               gap-8

//               lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]
//               lg:gap-10

//               xl:gap-14
//             "
//           >

//             {/* ==================================================
//                 HERO LEFT
//             ================================================== */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 justify-center

//                 py-3

//                 lg:min-h-[520px]
//                 lg:py-6
//               "
//             >

//               {/* SMALL LABEL */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3

//                   text-[11px]
//                   font-bold
//                   uppercase
//                   tracking-[0.22em]
//                   text-gray-500

//                   sm:text-xs
//                 "
//               >
//                 <span
//                   className="
//                     block
//                     h-[2px]
//                     w-8
//                     bg-orange-500
//                   "
//                 />

//                 Rama Terpal
//               </div>

//               {/* TITLE */}
//               <h1
//                 className="
//                   mt-5
//                   max-w-[620px]

//                   text-[38px]
//                   font-bold
//                   leading-[1.06]
//                   tracking-[-0.035em]
//                   text-gray-950

//                   sm:text-[48px]

//                   md:text-[54px]

//                   lg:text-[52px]

//                   xl:text-[60px]
//                 "
//               >
//                 Terpal yang tepat
//                 <br className="hidden sm:block" />
//                 untuk setiap{" "}
//                 <span className="text-blue-600">
//                   kebutuhan.
//                 </span>
//               </h1>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//                   mt-6
//                   max-w-[550px]

//                   text-sm
//                   leading-7
//                   text-gray-600

//                   sm:text-base
//                   sm:leading-8

//                   lg:text-[17px]
//                 "
//               >
//                 Mulai dari kebutuhan rumah, toko, kendaraan, proyek,
//                 hingga usaha. Pilih ukuran yang tersedia atau pesan ukuran
//                 custom sesuai kebutuhan Anda.
//               </p>

//               {/* CTA */}
//               <div
//                 className="
//                   mt-7
//                   flex
//                   flex-col
//                   gap-3

//                   sm:flex-row
//                   sm:items-center
//                 "
//               >
//                 <Link
//                   to="/kategori"
//                   className="
//                     group

//                     inline-flex
//                     min-h-[52px]
//                     w-full
//                     items-center
//                     justify-center
//                     gap-3

//                     rounded-xl

//                     bg-orange-500

//                     px-6

//                     text-sm
//                     font-semibold
//                     text-white

//                     transition-all
//                     duration-300

//                     hover:bg-orange-600

//                     sm:w-auto
//                     sm:px-7
//                     sm:text-base
//                   "
//                 >
//                   Lihat Produk

//                   <ArrowRight
//                     size={19}
//                     className="
//                       transition-transform
//                       duration-300

//                       group-hover:translate-x-1
//                     "
//                   />
//                 </Link>

//                 <a
//                   href="https://wa.me/6281234567890"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-flex
//                     min-h-[52px]
//                     w-full
//                     items-center
//                     justify-center
//                     gap-2

//                     rounded-xl

//                     border
//                     border-gray-300

//                     bg-transparent

//                     px-6

//                     text-sm
//                     font-semibold
//                     text-gray-800

//                     transition-all
//                     duration-300

//                     hover:border-gray-900
//                     hover:bg-white

//                     sm:w-auto
//                     sm:text-base
//                   "
//                 >
//                   <Phone size={18} />

//                   Konsultasi
//                 </a>
//               </div>

//               {/* SMALL BENEFITS */}
//               <div
//                 className="
//                   mt-8

//                   flex
//                   flex-wrap
//                   gap-x-5
//                   gap-y-3

//                   border-t
//                   border-gray-300

//                   pt-5
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2

//                     text-xs
//                     font-medium
//                     text-gray-600

//                     sm:text-sm
//                   "
//                 >
//                   <span
//                     className="
//                       flex
//                       h-5
//                       w-5
//                       items-center
//                       justify-center

//                       rounded-full

//                       bg-blue-600
//                       text-white
//                     "
//                   >
//                     <Check size={12} strokeWidth={3} />
//                   </span>

//                   Beragam tipe
//                 </div>

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2

//                     text-xs
//                     font-medium
//                     text-gray-600

//                     sm:text-sm
//                   "
//                 >
//                   <span
//                     className="
//                       flex
//                       h-5
//                       w-5
//                       items-center
//                       justify-center

//                       rounded-full

//                       bg-blue-600
//                       text-white
//                     "
//                   >
//                     <Check size={12} strokeWidth={3} />
//                   </span>

//                   Bisa custom
//                 </div>

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2

//                     text-xs
//                     font-medium
//                     text-gray-600

//                     sm:text-sm
//                   "
//                 >
//                   <span
//                     className="
//                       flex
//                       h-5
//                       w-5
//                       items-center
//                       justify-center

//                       rounded-full

//                       bg-blue-600
//                       text-white
//                     "
//                   >
//                     <Check size={12} strokeWidth={3} />
//                   </span>

//                   Mudah dipesan
//                 </div>
//               </div>
//             </div>

//             {/* ==================================================
//                 HERO RIGHT
//             ================================================== */}

//             <div
//               className="
//                 relative

//                 min-h-[390px]

//                 sm:min-h-[480px]

//                 lg:min-h-[520px]
//               "
//             >
//               <div
//                 className="
//                   relative
//                   h-full
//                   min-h-[390px]
//                   overflow-hidden

//                   rounded-2xl

//                   bg-gray-900

//                   sm:min-h-[480px]
//                   sm:rounded-3xl

//                   lg:min-h-[520px]
//                 "
//               >
//                 <img
//                   src={heroImage}
//                   alt="Koleksi terpal Rama Terpal"
//                   className="
//                     absolute
//                     inset-0

//                     h-full
//                     w-full

//                     object-cover
//                     object-center

//                     transition-transform
//                     duration-700

//                     hover:scale-[1.015]
//                   "
//                 />

//                 {/* SUBTLE IMAGE OVERLAY */}
//                 <div
//                   className="
//                     absolute
//                     inset-0

//                     bg-gradient-to-t
//                     from-black/60
//                     via-black/5
//                     to-black/5
//                   "
//                 />

//                 {/* TOP NUMBER */}
//                 <div
//                   className="
//                     absolute
//                     left-5
//                     top-5

//                     flex
//                     items-center
//                     gap-3

//                     sm:left-6
//                     sm:top-6
//                   "
//                 >
//                   <span
//                     className="
//                       text-xs
//                       font-bold
//                       tracking-[0.18em]
//                       text-white
//                     "
//                   >
//                     01
//                   </span>

//                   <span className="h-px w-8 bg-white/60" />

//                   <span
//                     className="
//                       text-[10px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.18em]
//                       text-white/80

//                       sm:text-xs
//                     "
//                   >
//                     Product Range
//                   </span>
//                 </div>

//                 {/* IMAGE BOTTOM CONTENT */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     right-0

//                     p-5

//                     sm:p-7
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       flex-col
//                       gap-5

//                       sm:flex-row
//                       sm:items-end
//                       sm:justify-between
//                     "
//                   >
//                     <div className="max-w-md">

//                       <p
//                         className="
//                           text-xs
//                           font-semibold
//                           uppercase
//                           tracking-[0.16em]
//                           text-orange-400
//                         "
//                       >
//                         Rama Terpal
//                       </p>

//                       <h2
//                         className="
//                           mt-2

//                           text-xl
//                           font-semibold
//                           leading-tight
//                           text-white

//                           sm:text-2xl
//                         "
//                       >
//                         Pilihan bahan dan ukuran untuk penggunaan yang berbeda.
//                       </h2>
//                     </div>

//                     <Link
//                       to="/kategori"
//                       aria-label="Buka katalog Rama Terpal"
//                       className="
//                         flex
//                         h-12
//                         w-12
//                         shrink-0
//                         items-center
//                         justify-center

//                         rounded-full

//                         bg-white
//                         text-gray-900

//                         transition-all
//                         duration-300

//                         hover:scale-105
//                         hover:bg-orange-500
//                         hover:text-white
//                       "
//                     >
//                       <ArrowRight size={19} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* SIDE CARD */}
//               <div
//                 className="
//                   absolute
//                   -bottom-5
//                   left-5

//                   hidden

//                   w-[210px]

//                   border
//                   border-gray-200

//                   bg-white

//                   p-4

//                   shadow-[0_12px_35px_rgba(15,23,42,0.12)]

//                   lg:block

//                   xl:left-7
//                 "
//               >
//                 <div className="flex items-center gap-3">

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       shrink-0
//                       items-center
//                       justify-center

//                       bg-blue-50
//                       text-blue-600
//                     "
//                   >
//                     <Ruler size={19} />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-gray-900">
//                       Custom ukuran
//                     </p>

//                     <p className="mt-0.5 text-xs text-gray-500">
//                       Sesuaikan kebutuhan
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FEATURE
//       ================================================== */}

//       <section className="bg-white">
//         <div
//           className="
//             mx-auto
//             max-w-7xl

//             px-4

//             sm:px-6

//             lg:px-8

//             xl:px-30
//           "
//         >
//           <div
//             className="
//               grid
//               grid-cols-1

//               border-b
//               border-gray-200

//               sm:grid-cols-2

//               lg:grid-cols-4
//             "
//           >
//             {features.map((feature, index) => {
//               const Icon = feature.icon;

//               return (
//                 <div
//                   key={feature.title}
//                   className={`
//                     group

//                     flex
//                     items-center
//                     gap-4

//                     py-6

//                     transition-colors
//                     duration-300

//                     hover:bg-gray-50

//                     sm:px-5
//                     sm:py-7

//                     lg:px-5
//                     lg:py-8

//                     ${
//                       index !== features.length - 1
//                         ? "border-b border-gray-100 sm:border-b-0"
//                         : ""
//                     }

//                     ${
//                       index === 0 || index === 2
//                         ? "sm:border-r sm:border-gray-100"
//                         : ""
//                     }

//                     ${
//                       index < 3
//                         ? "lg:border-r lg:border-gray-100"
//                         : ""
//                     }
//                   `}
//                 >
//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       shrink-0
//                       items-center
//                       justify-center

//                       rounded-xl

//                       bg-blue-50
//                       text-blue-600

//                       transition-all
//                       duration-300

//                       group-hover:bg-blue-600
//                       group-hover:text-white
//                     "
//                   >
//                     <Icon size={21} />
//                   </div>

//                   <div className="min-w-0">

//                     <h3
//                       className="
//                         text-sm
//                         font-semibold
//                         text-gray-900

//                         sm:text-base
//                       "
//                     >
//                       {feature.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-1
//                         text-xs
//                         leading-5
//                         text-gray-500

//                         sm:text-sm
//                       "
//                     >
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           KATEGORI
//       ================================================== */}

//       <section
//         className="
//           mx-auto
//           max-w-7xl

//           px-4
//           pb-14
//           pt-14

//           sm:px-6
//           sm:pb-16
//           sm:pt-16

//           lg:px-8
//           lg:pb-20
//           lg:pt-20

//           xl:px-30
//         "
//       >
//         <div
//           className="
//             mb-7

//             flex
//             items-end
//             justify-between
//             gap-4

//             sm:mb-8
//           "
//         >
//           <div>

//             <p
//               className="
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//                 text-orange-500
//               "
//             >
//               Pilihan Produk
//             </p>

//             <h2
//               className="
//                 mt-2

//                 text-2xl
//                 font-bold
//                 tracking-[-0.02em]
//                 text-gray-900

//                 sm:text-3xl
//               "
//             >
//               Kategori
//             </h2>

//             <p
//               className="
//                 mt-2
//                 hidden

//                 text-gray-500

//                 sm:block
//               "
//             >
//               Pilih jenis terpal sesuai kebutuhan Anda
//             </p>
//           </div>

//           <Link
//             to="/kategori"
//             className="
//               group

//               inline-flex
//               shrink-0
//               items-center
//               gap-2

//               text-sm
//               font-semibold
//               text-blue-600

//               transition

//               hover:text-blue-700

//               sm:text-base
//             "
//           >
//             Lihat Semua

//             <ArrowRight
//               size={17}
//               className="
//                 transition-transform

//                 group-hover:translate-x-1
//               "
//             />
//           </Link>
//         </div>

//         <div
//           className="
//             grid
//             grid-cols-2
//             gap-3

//             sm:grid-cols-3
//             sm:gap-4

//             lg:grid-cols-6
//           "
//         >
//           {categories.map((item) => (
//             <Link
//               key={item.title}
//               to="/kategori"
//               className="
//                 group

//                 rounded-xl

//                 border
//                 border-gray-100

//                 bg-white

//                 p-4

//                 transition-all
//                 duration-300

//                 hover:-translate-y-1
//                 hover:border-blue-100
//                 hover:shadow-lg

//                 sm:p-5
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   items-center
//                   justify-center

//                   rounded-full

//                   bg-blue-50

//                   text-sm
//                   font-bold
//                   text-blue-600

//                   transition-all
//                   duration-300

//                   group-hover:bg-blue-600
//                   group-hover:text-white

//                   sm:h-12
//                   sm:w-12
//                   sm:text-base
//                 "
//               >
//                 {item.title}
//               </div>

//               <p
//                 className="
//                   mt-4

//                   text-sm
//                   font-semibold
//                   text-gray-800

//                   sm:text-base
//                 "
//               >
//                 {item.desc}
//               </p>

//               <div
//                 className="
//                   mt-3

//                   flex
//                   items-center
//                   gap-1.5

//                   text-[11px]
//                   font-medium
//                   text-gray-400

//                   transition

//                   group-hover:text-blue-600

//                   sm:text-xs
//                 "
//               >
//                 Lihat produk

//                 <ArrowRight size={13} />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ==================================================
//           PRODUK UNGGULAN
//       ================================================== */}

//       <section className="bg-white">
//         <div
//           className="
//             mx-auto
//             max-w-7xl

//             px-4
//             py-14

//             sm:px-6
//             sm:py-16

//             lg:px-8
//             lg:py-20

//             xl:px-30
//           "
//         >
//           <div
//             className="
//               mb-7

//               flex
//               items-end
//               justify-between
//               gap-4

//               sm:mb-8
//             "
//           >
//             <div>

//               <p
//                 className="
//                   text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-orange-500
//                 "
//               >
//                 Rekomendasi
//               </p>

//               <h2
//                 className="
//                   mt-2

//                   text-2xl
//                   font-bold
//                   tracking-[-0.02em]
//                   text-gray-900

//                   sm:text-3xl
//                 "
//               >
//                 Produk Unggulan
//               </h2>

//               <p
//                 className="
//                   mt-2
//                   hidden

//                   text-gray-500

//                   sm:block
//                 "
//               >
//                 Pilihan terbaik Rama Terpal
//               </p>
//             </div>

//             <Link
//               to="/kategori"
//               className="
//                 group

//                 inline-flex
//                 shrink-0
//                 items-center
//                 gap-2

//                 text-sm
//                 font-semibold
//                 text-blue-600

//                 transition

//                 hover:text-blue-700

//                 sm:text-base
//               "
//             >
//               Lihat Semua

//               <ArrowRight
//                 size={17}
//                 className="
//                   transition-transform

//                   group-hover:translate-x-1
//                 "
//               />
//             </Link>
//           </div>

//           <div
//             className="
//               grid
//               grid-cols-1
//               gap-5

//               sm:grid-cols-2
//               sm:gap-6

//               lg:grid-cols-4
//             "
//           >
//             {featuredProducts.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 product={item}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           LOKASI
//       ================================================== */}

//       <section className="bg-gray-50">
//         <div
//           className="
//             mx-auto
//             max-w-7xl

//             px-4
//             py-14

//             sm:px-6
//             sm:py-16

//             lg:px-8
//             lg:py-20

//             xl:px-30
//           "
//         >
//           <div
//             className="
//               grid
//               grid-cols-1
//               items-center
//               gap-10

//               lg:grid-cols-2
//               lg:gap-12
//             "
//           >

//             {/* LEFT */}
//             <div>

//               <p
//                 className="
//                   text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-orange-500
//                 "
//               >
//                 Lokasi Kami
//               </p>

//               <h2
//                 className="
//                   mt-2

//                   text-2xl
//                   font-bold
//                   tracking-[-0.02em]
//                   text-gray-900

//                   sm:text-3xl

//                   md:text-4xl
//                 "
//               >
//                 Kunjungi Rama Terpal
//               </h2>

//               <p
//                 className="
//                   mt-4
//                   max-w-xl

//                   text-sm
//                   leading-7
//                   text-gray-500

//                   sm:text-base
//                 "
//               >
//                 Datang langsung ke toko Rama Terpal untuk melihat berbagai
//                 pilihan produk, berkonsultasi mengenai bahan, ukuran, dan
//                 pemesanan terpal custom sesuai kebutuhan Anda.
//               </p>

//               <div
//                 className="
//                   mt-7
//                   space-y-5

//                   sm:mt-8
//                 "
//               >

//                 {/* ADDRESS */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       shrink-0

//                       rounded-xl

//                       bg-blue-50

//                       p-3
//                     "
//                   >
//                     <MapPin
//                       className="text-blue-600"
//                       size={22}
//                     />
//                   </div>

//                   <div className="min-w-0">

//                     <p className="font-semibold text-gray-800">
//                       Alamat
//                     </p>

//                     <p
//                       className="
//                         mt-1

//                         break-words

//                         text-sm
//                         text-gray-500

//                         sm:text-base
//                       "
//                     >
//                       Rama Terpal, Indonesia
//                     </p>
//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       shrink-0

//                       rounded-xl

//                       bg-blue-50

//                       p-3
//                     "
//                   >
//                     <Phone
//                       className="text-blue-600"
//                       size={22}
//                     />
//                   </div>

//                   <div className="min-w-0">

//                     <p className="font-semibold text-gray-800">
//                       Telepon / WhatsApp
//                     </p>

//                     <a
//                       href="https://wa.me/6281234567890"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="
//                         mt-1
//                         block

//                         text-sm
//                         text-gray-500

//                         transition

//                         hover:text-blue-600

//                         sm:text-base
//                       "
//                     >
//                       +62 812-3456-7890
//                     </a>
//                   </div>
//                 </div>

//                 {/* EMAIL */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       shrink-0

//                       rounded-xl

//                       bg-blue-50

//                       p-3
//                     "
//                   >
//                     <Mail
//                       className="text-blue-600"
//                       size={22}
//                     />
//                   </div>

//                   <div className="min-w-0">

//                     <p className="font-semibold text-gray-800">
//                       Email
//                     </p>

//                     <a
//                       href="mailto:info@ramaterpal.com"
//                       className="
//                         mt-1
//                         block
//                         break-all

//                         text-sm
//                         text-gray-500

//                         transition

//                         hover:text-blue-600

//                         sm:text-base
//                       "
//                     >
//                       info@ramaterpal.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* HOURS */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       shrink-0

//                       rounded-xl

//                       bg-blue-50

//                       p-3
//                     "
//                   >
//                     <Clock
//                       className="text-blue-600"
//                       size={22}
//                     />
//                   </div>

//                   <div>

//                     <p className="font-semibold text-gray-800">
//                       Jam Operasional
//                     </p>

//                     <p
//                       className="
//                         mt-1

//                         text-sm
//                         text-gray-500

//                         sm:text-base
//                       "
//                     >
//                       Senin - Sabtu, 08.00 - 17.00 WIB
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ==================================================
//                 GOOGLE MAP
//             ================================================== */}

//             <div
//               className="
//                 w-full
//                 overflow-hidden

//                 rounded-2xl

//                 border
//                 border-gray-100

//                 bg-gray-100

//                 shadow-lg

//                 sm:rounded-3xl
//               "
//             >
//               <iframe
//                 title="Lokasi Rama Terpal"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.686391917023!2d108.2603435740287!3d-7.609064375212884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65ef0b67bc851d%3A0xf05b9850f92f678e!2sRama%20Terpal!5e0!3m2!1sid!2sid!4v1787664545617!5m2!1sid!2sid"
//                 width="100%"
//                 height="450"
//                 style={{
//                   border: 0,
//                 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 className="
//                   block

//                   h-[300px]
//                   w-full

//                   sm:h-[380px]

//                   lg:h-[450px]
//                 "
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FOOTER
//       ================================================== */}

//       <footer className="bg-gray-950 text-white">
//         <div
//           className="
//             mx-auto
//             max-w-7xl

//             px-4
//             py-12

//             sm:px-6
//             sm:py-14

//             lg:px-8
//             lg:py-16

//             xl:px-30
//           "
//         >
//           <div
//             className="
//               grid
//               grid-cols-1
//               gap-10

//               sm:grid-cols-2

//               lg:grid-cols-4
//               lg:gap-12
//             "
//           >

//             {/* BRAND */}
//             <div>

//               <Link
//                 to="/"
//                 className="inline-block"
//               >
//                 <h2 className="text-2xl font-bold">
//                   RAMA{" "}
//                   <span className="text-orange-500">
//                     TERPAL
//                   </span>
//                 </h2>
//               </Link>

//               <p
//                 className="
//                   mt-5

//                   text-sm
//                   leading-relaxed
//                   text-gray-400
//                 "
//               >
//                 Menyediakan berbagai jenis terpal berkualitas untuk kebutuhan
//                 rumah tangga, usaha, industri, pertanian, transportasi, hingga
//                 kebutuhan custom.
//               </p>

//               <div className="mt-6">

//                 <Link
//                   to="/kategori"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2

//                     rounded-xl

//                     bg-orange-500

//                     px-5
//                     py-3

//                     text-sm
//                     font-semibold

//                     transition

//                     hover:bg-orange-600

//                     sm:text-base
//                   "
//                 >
//                   Belanja Sekarang

//                   <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>

//             {/* NAVIGATION */}
//             <div>

//               <h3 className="mb-5 text-lg font-semibold">
//                 Navigasi
//               </h3>

//               <div
//                 className="
//                   flex
//                   flex-col
//                   gap-3

//                   text-sm
//                   text-gray-400

//                   sm:text-base
//                 "
//               >
//                 <Link
//                   to="/"
//                   className="
//                     transition

//                     hover:text-white
//                   "
//                 >
//                   Beranda
//                 </Link>

//                 <Link
//                   to="/kategori"
//                   className="
//                     transition

//                     hover:text-white
//                   "
//                 >
//                   Semua Produk
//                 </Link>

//                 <Link
//                   to="/tentang"
//                   className="
//                     transition

//                     hover:text-white
//                   "
//                 >
//                   Tentang Kami
//                 </Link>
//               </div>
//             </div>

//             {/* CONTACT */}
//             <div>

//               <h3 className="mb-5 text-lg font-semibold">
//                 Hubungi Kami
//               </h3>

//               <div className="space-y-5 text-sm text-gray-400">

//                 <div className="flex items-start gap-3">

//                   <MapPin
//                     size={20}
//                     className="
//                       mt-0.5
//                       shrink-0
//                       text-orange-500
//                     "
//                   />

//                   <span>
//                     Rama Terpal, Indonesia
//                   </span>
//                 </div>

//                 <a
//                   href="https://wa.me/6281234567890"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     flex
//                     items-center
//                     gap-3

//                     transition

//                     hover:text-white
//                   "
//                 >
//                   <Phone
//                     size={20}
//                     className="
//                       shrink-0
//                       text-orange-500
//                     "
//                   />

//                   <span>
//                     +62 812-3456-7890
//                   </span>
//                 </a>

//                 <a
//                   href="mailto:info@ramaterpal.com"
//                   className="
//                     flex
//                     items-start
//                     gap-3

//                     transition

//                     hover:text-white
//                   "
//                 >
//                   <Mail
//                     size={20}
//                     className="
//                       mt-0.5
//                       shrink-0
//                       text-orange-500
//                     "
//                   />

//                   <span className="break-all">
//                     info@ramaterpal.com
//                   </span>
//                 </a>

//                 <div className="flex items-start gap-3">

//                   <Clock
//                     size={20}
//                     className="
//                       mt-0.5
//                       shrink-0
//                       text-orange-500
//                     "
//                   />

//                   <span>
//                     Senin - Sabtu
//                     <br />
//                     08.00 - 17.00 WIB
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* SOCIAL */}
//             <div>

//               <h3 className="mb-5 text-lg font-semibold">
//                 Sosial Media & Marketplace
//               </h3>

//               <p
//                 className="
//                   mb-6

//                   text-sm
//                   leading-relaxed
//                   text-gray-400
//                 "
//               >
//                 Ikuti Rama Terpal dan temukan berbagai produk serta penawaran
//                 terbaru kami.
//               </p>

//               <div className="flex flex-wrap gap-3">

//                 <a
//                   href="https://instagram.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Instagram Rama Terpal"
//                   title="Instagram"
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center

//                     rounded-xl

//                     bg-gray-800

//                     transition

//                     hover:-translate-y-1
//                     hover:bg-pink-600
//                   "
//                 >
//                   <Camera size={20} />
//                 </a>

//                 <a
//                   href="https://facebook.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Facebook Rama Terpal"
//                   title="Facebook"
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center

//                     rounded-xl

//                     bg-gray-800

//                     transition

//                     hover:-translate-y-1
//                     hover:bg-blue-600
//                   "
//                 >
//                   <Users size={20} />
//                 </a>

//                 <a
//                   href="https://shopee.co.id/"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Shopee Rama Terpal"
//                   title="Shopee"
//                   className="
//                     flex
//                     h-11
//                     items-center
//                     gap-2

//                     rounded-xl

//                     bg-orange-500

//                     px-4

//                     text-sm
//                     font-semibold

//                     transition

//                     hover:-translate-y-1
//                     hover:bg-orange-600
//                   "
//                 >
//                   <ShoppingBag size={20} />

//                   Shopee
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* COPYRIGHT */}
//           <div
//             className="
//               mt-10

//               flex
//               flex-col
//               gap-3

//               border-t
//               border-gray-800

//               pt-6

//               text-center
//               text-xs
//               text-gray-500

//               sm:text-sm

//               md:mt-12
//               md:flex-row
//               md:items-center
//               md:justify-between
//               md:text-left
//             "
//           >
//             <p>
//               © {new Date().getFullYear()} Rama Terpal. All rights reserved.
//             </p>

//             <p>
//               Terpal berkualitas untuk setiap kebutuhan.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Ruler,
  Truck,
  Boxes,
  MapPin,
  Phone,
  Mail,
  ShoppingBag,
  Clock,
  Camera,
  Users,
  Check,
} from "lucide-react";

import ProductCard from "../../components/user/ProductCard";
import heroImage from "../../assets/landing.jpeg";import contohTerpal from "../../assets/contoh-terpal.png";

// ======================================================
// DATA PRODUK
// ======================================================

const products = [
  {
    id: 1,
    nama: "Terpal A12 Premium Biru",
    bahan: "A12",
    warna: "Biru",
    ukuran: "3 x 4 Meter",
    harga: 250000,
    stok: 50,
    image: contohTerpal,
  },
  {
    id: 2,
    nama: "Terpal PVC Anti Air Premium",
    bahan: "PVC",
    warna: "Orange",
    ukuran: "4 x 6 Meter",
    harga: 500000,
    stok: 30,
    image: contohTerpal,
  },
  {
    id: 3,
    nama: "Terpal Kanvas Tebal",
    bahan: "Kanvas",
    warna: "Hijau",
    ukuran: "2 x 3 Meter",
    harga: 350000,
    stok: 20,
    image: contohTerpal,
  },
  {
    id: 4,
    nama: "Terpal Truck Heavy Duty",
    bahan: "Heavy Duty",
    warna: "Hitam",
    ukuran: "5 x 8 Meter",
    harga: 850000,
    stok: 15,
    image: contohTerpal,
  },
];
// ======================================================
// DATA KATEGORI
// ======================================================

const categories = [
  {
    title: "A5",
    desc: "Terpal A5",
  },
  {
    title: "A8",
    desc: "Terpal A8",
  },
  {
    title: "A12",
    desc: "Terpal A12",
  },
  {
    title: "PVC",
    desc: "Terpal PVC",
  },
  {
    title: "Kanvas",
    desc: "Terpal Kanvas",
  },
  {
    title: "Custom",
    desc: "Custom Ukuran",
  },
];

// ======================================================
// HERO BENEFIT
// ======================================================

const heroBenefits = [
  {
    title: "Bahan Berkualitas",
    desc: "Material kuat dan tahan lama",
    icon: ShieldCheck,
  },
  {
    title: "Custom Ukuran",
    desc: "Dibuat sesuai kebutuhan",
    icon: Ruler,
  },
  {
    title: "Banyak Pilihan",
    desc: "Beragam tipe dan ukuran",
    icon: Boxes,
  },
  {
    title: "Mudah Dipesan",
    desc: "Checkout via WhatsApp",
    icon: Truck,
  },
];

// ======================================================
// LANDING PAGE
// ======================================================

export default function LandingPage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gray-950
          text-white
        "
      >
        {/* HERO IMAGE */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Koleksi terpal Rama Terpal"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* LEFT READABILITY */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-black/90
              via-black/60
              to-black/10
            "
          />

          {/* BOTTOM READABILITY */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/55
              via-transparent
              to-black/5
            "
          />
        </div>

        {/* HERO CONTENT WRAPPER */}
        <div
          className="
            relative
            z-10

            mx-auto
            flex
            min-h-[720px]
            max-w-7xl
            flex-col

            px-4
            pb-6
            pt-12

            sm:min-h-[760px]
            sm:px-6
            sm:pb-8
            sm:pt-14

            lg:min-h-[calc(100svh-80px)]
            lg:px-8
            lg:pb-8
            lg:pt-10

            xl:px-30
          "
        >
          {/* ==================================================
              MAIN HERO AREA
          ================================================== */}

          <div
            className="
              flex
              flex-1
              items-center

              pb-10

              sm:pb-12

              lg:pb-16
            "
          >
            <div
              className="
                max-w-3xl

                lg:max-w-[720px]
              "
            >
              {/* LABEL */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-3

                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-orange-400

                  sm:text-xs
                "
              >
                <span className="h-[2px] w-8 bg-orange-500" />

                Rama Terpal
              </div>

              {/* HEADLINE */}
              <h1
                className="
                  mt-5

                  max-w-[720px]

                  text-[40px]
                  font-bold
                  leading-[1.06]
                  tracking-[-0.035em]
                  text-white

                  sm:text-[50px]

                  md:text-[58px]

                  lg:text-[64px]
                "
              >
                Terpal kuat untuk setiap{" "}
                <span className="text-orange-400">
                  kebutuhan.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  max-w-[610px]

                  text-sm
                  leading-7
                  text-white/75

                  sm:text-base
                  sm:leading-8

                  lg:text-[18px]
                "
              >
                Pilih berbagai tipe dan ukuran terpal untuk rumah, usaha,
                kendaraan, proyek, hingga kebutuhan industri. Tersedia juga
                layanan ukuran custom sesuai kebutuhan Anda.
              </p>

              {/* BUTTONS */}
              <div
                className="
                  mt-7

                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:items-center
                "
              >
                <Link
                  to="/kategori"
                  className="
                    group

                    inline-flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-3

                    rounded-xl

                    bg-orange-500

                    px-7

                    text-sm
                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    hover:bg-orange-600

                    sm:w-auto
                    sm:text-base
                  "
                >
                  Lihat Produk

                  <ArrowRight
                    size={19}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-2.5

                    rounded-xl

                    border
                    border-white/35

                    bg-white/10

                    px-7

                    text-sm
                    font-semibold
                    text-white

                    backdrop-blur-sm

                    transition-all
                    duration-300

                    hover:border-white
                    hover:bg-white
                    hover:text-gray-950

                    sm:w-auto
                    sm:text-base
                  "
                >
                  <Phone size={18} />

                  Konsultasi WhatsApp
                </a>
              </div>

              {/* QUICK TRUST */}
              <div
                className="
                  mt-7

                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs
                    font-medium
                    text-white/75

                    sm:text-sm
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center

                      rounded-full

                      bg-white/15
                      text-white
                    "
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>

                  Beragam tipe
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs
                    font-medium
                    text-white/75

                    sm:text-sm
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center

                      rounded-full

                      bg-white/15
                      text-white
                    "
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>

                  Custom ukuran
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs
                    font-medium
                    text-white/75

                    sm:text-sm
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center

                      rounded-full

                      bg-white/15
                      text-white
                    "
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>

                  Pemesanan mudah
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              BENEFIT PANEL DI DALAM HERO
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              overflow-hidden

              rounded-2xl

              border
              border-white/15

              bg-white

              text-gray-900

              shadow-[0_18px_45px_rgba(0,0,0,0.18)]

              lg:grid-cols-4
            "
          >
            {heroBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    group

                    flex
                    min-w-0
                    items-center
                    gap-3

                    p-4

                    transition-colors
                    duration-300

                    hover:bg-gray-50

                    sm:gap-4
                    sm:p-5

                    lg:p-5

                    ${
                      index === 0 || index === 1
                        ? "border-b border-gray-100 lg:border-b-0"
                        : ""
                    }

                    ${
                      index === 0 || index === 2
                        ? "border-r border-gray-100"
                        : ""
                    }

                    ${
                      index === 1
                        ? "lg:border-r lg:border-gray-100"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center

                      rounded-xl

                      bg-blue-50
                      text-blue-600

                      transition-all
                      duration-300

                      group-hover:bg-blue-600
                      group-hover:text-white

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        truncate

                        text-xs
                        font-semibold
                        text-gray-900

                        sm:text-sm
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1
                        truncate

                        text-[10px]
                        text-gray-500

                        sm:text-xs
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          KATEGORI
      ================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl

          px-4
          pb-14
          pt-14

          sm:px-6
          sm:pb-16
          sm:pt-16

          lg:px-8
          lg:pb-20
          lg:pt-20

          xl:px-30
        "
      >
        {/* HEADER */}
        <div
          className="
            mb-7

            flex
            items-end
            justify-between
            gap-4

            sm:mb-8
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-orange-500
              "
            >
              Pilihan Produk
            </p>

            <h2
              className="
                mt-2

                text-2xl
                font-bold
                tracking-[-0.02em]
                text-gray-900

                sm:text-3xl
              "
            >
              Kategori
            </h2>

            <p
              className="
                mt-2
                hidden

                text-gray-500

                sm:block
              "
            >
              Pilih jenis terpal sesuai kebutuhan Anda
            </p>
          </div>

          <Link
            to="/kategori"
            className="
              group

              inline-flex
              shrink-0
              items-center
              gap-2

              text-sm
              font-semibold
              text-blue-600

              transition

              hover:text-blue-700

              sm:text-base
            "
          >
            Lihat Semua

            <ArrowRight
              size={17}
              className="
                transition-transform

                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* CATEGORY GRID */}
        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3
            sm:gap-4

            lg:grid-cols-6
          "
        >
          {categories.map((item) => (
            <Link
              key={item.title}
              to="/kategori"
              className="
                group

                rounded-2xl

                border
                border-gray-100

                bg-white

                p-4

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-100
                hover:shadow-lg

                sm:p-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-50

                  text-sm
                  font-bold
                  text-blue-600

                  transition-all
                  duration-300

                  group-hover:bg-blue-600
                  group-hover:text-white

                  sm:h-12
                  sm:w-12
                  sm:text-base
                "
              >
                {item.title}
              </div>

              <p
                className="
                  mt-4

                  text-sm
                  font-semibold
                  text-gray-800

                  sm:text-base
                "
              >
                {item.desc}
              </p>

              <div
                className="
                  mt-3

                  flex
                  items-center
                  gap-1.5

                  text-[11px]
                  font-medium
                  text-gray-400

                  transition

                  group-hover:text-blue-600

                  sm:text-xs
                "
              >
                Lihat produk

                <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================================================
          PRODUK UNGGULAN
      ================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            py-14

            sm:px-6
            sm:py-16

            lg:px-8
            lg:py-20

            xl:px-30
          "
        >
          {/* HEADER */}
          <div
            className="
              mb-7

              flex
              items-end
              justify-between
              gap-4

              sm:mb-8
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-500
                "
              >
                Rekomendasi
              </p>

              <h2
                className="
                  mt-2

                  text-2xl
                  font-bold
                  tracking-[-0.02em]
                  text-gray-900

                  sm:text-3xl
                "
              >
                Produk Unggulan
              </h2>

              <p
                className="
                  mt-2
                  hidden

                  text-gray-500

                  sm:block
                "
              >
                Pilihan terbaik Rama Terpal
              </p>
            </div>

            <Link
              to="/kategori"
              className="
                group

                inline-flex
                shrink-0
                items-center
                gap-2

                text-sm
                font-semibold
                text-blue-600

                transition

                hover:text-blue-700

                sm:text-base
              "
            >
              Lihat Semua

              <ArrowRight
                size={17}
                className="
                  transition-transform

                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* PRODUCT GRID */}
          <div
            className="
              grid
              grid-cols-1
              gap-5

              sm:grid-cols-2
              sm:gap-6

              lg:grid-cols-4
            "
          >
            {featuredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          LOKASI
      ================================================== */}

      <section className="bg-gray-50">
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            py-14

            sm:px-6
            sm:py-16

            lg:px-8
            lg:py-20

            xl:px-30
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-10

              lg:grid-cols-2
              lg:gap-12
            "
          >
            {/* LEFT CONTENT */}
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-500
                "
              >
                Lokasi Kami
              </p>

              <h2
                className="
                  mt-2

                  text-2xl
                  font-bold
                  tracking-[-0.02em]
                  text-gray-900

                  sm:text-3xl

                  md:text-4xl
                "
              >
                Kunjungi Rama Terpal
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl

                  text-sm
                  leading-7
                  text-gray-500

                  sm:text-base
                "
              >
                Datang langsung ke toko Rama Terpal untuk melihat berbagai
                pilihan produk, berkonsultasi mengenai bahan, ukuran, dan
                pemesanan terpal custom sesuai kebutuhan Anda.
              </p>

              {/* CONTACT INFO */}
              <div
                className="
                  mt-7
                  space-y-5

                  sm:mt-8
                "
              >
                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0

                      rounded-xl

                      bg-blue-50

                      p-3
                    "
                  >
                    <MapPin
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800">
                      Alamat
                    </p>

                    <p
                      className="
                        mt-1

                        break-words

                        text-sm
                        text-gray-500

                        sm:text-base
                      "
                    >
                      Rama Terpal, Indonesia
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0

                      rounded-xl

                      bg-blue-50

                      p-3
                    "
                  >
                    <Phone
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800">
                      Telepon / WhatsApp
                    </p>

                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-1
                        block

                        text-sm
                        text-gray-500

                        transition

                        hover:text-blue-600

                        sm:text-base
                      "
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0

                      rounded-xl

                      bg-blue-50

                      p-3
                    "
                  >
                    <Mail
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800">
                      Email
                    </p>

                    <a
                      href="mailto:info@ramaterpal.com"
                      className="
                        mt-1
                        block
                        break-all

                        text-sm
                        text-gray-500

                        transition

                        hover:text-blue-600

                        sm:text-base
                      "
                    >
                      info@ramaterpal.com
                    </a>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      shrink-0

                      rounded-xl

                      bg-blue-50

                      p-3
                    "
                  >
                    <Clock
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      Jam Operasional
                    </p>

                    <p
                      className="
                        mt-1

                        text-sm
                        text-gray-500

                        sm:text-base
                      "
                    >
                      Senin - Sabtu, 08.00 - 17.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                GOOGLE MAP
            ================================================== */}

            <div
              className="
                w-full
                overflow-hidden

                rounded-2xl

                border
                border-gray-100

                bg-gray-100

                shadow-lg

                sm:rounded-3xl
              "
            >
              <iframe
                title="Lokasi Rama Terpal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.686391917023!2d108.2603435740287!3d-7.609064375212884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65ef0b67bc851d%3A0xf05b9850f92f678e!2sRama%20Terpal!5e0!3m2!1sid!2sid!4v1787664545617!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="
                  block

                  h-[300px]
                  w-full

                  sm:h-[380px]

                  lg:h-[450px]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="bg-gray-950 text-white">
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            py-12

            sm:px-6
            sm:py-14

            lg:px-8
            lg:py-16

            xl:px-30
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-10

              sm:grid-cols-2

              lg:grid-cols-4
              lg:gap-12
            "
          >
            {/* BRAND */}
            <div>
              <Link
                to="/"
                className="inline-block"
              >
                <h2 className="text-2xl font-bold">
                  RAMA{" "}
                  <span className="text-orange-500">
                    TERPAL
                  </span>
                </h2>
              </Link>

              <p
                className="
                  mt-5

                  text-sm
                  leading-relaxed
                  text-gray-400
                "
              >
                Menyediakan berbagai jenis terpal berkualitas untuk kebutuhan
                rumah tangga, usaha, industri, pertanian, transportasi, hingga
                kebutuhan custom.
              </p>

              <div className="mt-6">
                <Link
                  to="/kategori"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    bg-orange-500

                    px-5
                    py-3

                    text-sm
                    font-semibold

                    transition

                    hover:bg-orange-600

                    sm:text-base
                  "
                >
                  Belanja Sekarang

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">
                Navigasi
              </h3>

              <div
                className="
                  flex
                  flex-col
                  gap-3

                  text-sm
                  text-gray-400

                  sm:text-base
                "
              >
                <Link
                  to="/"
                  className="transition hover:text-white"
                >
                  Beranda
                </Link>

                <Link
                  to="/kategori"
                  className="transition hover:text-white"
                >
                  Semua Produk
                </Link>

                <Link
                  to="/tentang"
                  className="transition hover:text-white"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">
                Hubungi Kami
              </h3>

              <div className="space-y-5 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="
                      mt-0.5
                      shrink-0
                      text-orange-500
                    "
                  />

                  <span>
                    Rama Terpal, Indonesia
                  </span>
                </div>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-3

                    transition

                    hover:text-white
                  "
                >
                  <Phone
                    size={20}
                    className="
                      shrink-0
                      text-orange-500
                    "
                  />

                  <span>
                    +62 812-3456-7890
                  </span>
                </a>

                <a
                  href="mailto:info@ramaterpal.com"
                  className="
                    flex
                    items-start
                    gap-3

                    transition

                    hover:text-white
                  "
                >
                  <Mail
                    size={20}
                    className="
                      mt-0.5
                      shrink-0
                      text-orange-500
                    "
                  />

                  <span className="break-all">
                    info@ramaterpal.com
                  </span>
                </a>

                <div className="flex items-start gap-3">
                  <Clock
                    size={20}
                    className="
                      mt-0.5
                      shrink-0
                      text-orange-500
                    "
                  />

                  <span>
                    Senin - Sabtu
                    <br />
                    08.00 - 17.00 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="mb-5 text-lg font-semibold">
                Sosial Media & Marketplace
              </h3>

              <p
                className="
                  mb-6

                  text-sm
                  leading-relaxed
                  text-gray-400
                "
              >
                Ikuti Rama Terpal dan temukan berbagai produk serta penawaran
                terbaru kami.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Rama Terpal"
                  title="Instagram"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl

                    bg-gray-800

                    transition

                    hover:-translate-y-1
                    hover:bg-pink-600
                  "
                >
                  <Camera size={20} />
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Rama Terpal"
                  title="Facebook"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl

                    bg-gray-800

                    transition

                    hover:-translate-y-1
                    hover:bg-blue-600
                  "
                >
                  <Users size={20} />
                </a>

                {/* SHOPEE */}
                <a
                  href="https://shopee.co.id/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Shopee Rama Terpal"
                  title="Shopee"
                  className="
                    flex
                    h-11
                    items-center
                    gap-2

                    rounded-xl

                    bg-orange-500

                    px-4

                    text-sm
                    font-semibold

                    transition

                    hover:-translate-y-1
                    hover:bg-orange-600
                  "
                >
                  <ShoppingBag size={20} />

                  Shopee
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            className="
              mt-10

              flex
              flex-col
              gap-3

              border-t
              border-gray-800

              pt-6

              text-center
              text-xs
              text-gray-500

              sm:text-sm

              md:mt-12
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            <p>
              © {new Date().getFullYear()} Rama Terpal. All rights reserved.
            </p>

            <p>
              Terpal berkualitas untuk setiap kebutuhan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}