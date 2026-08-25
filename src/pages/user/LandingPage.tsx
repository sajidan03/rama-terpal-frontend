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
} from "lucide-react";

import ProductCard from "../../components/user/ProductCard";

// =========================
// DATA DUMMY
// =========================

const products = [
  {
    id: 1,
    nama: "Terpal A12 Premium Biru",
    bahan: "A12",
    warna: "Biru",
    ukuran: "3 x 4 Meter",
    harga: 250000,
    stok: 50,
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72",
  },
  {
    id: 2,
    nama: "Terpal PVC Anti Air Premium",
    bahan: "PVC",
    warna: "Orange",
    ukuran: "4 x 6 Meter",
    harga: 500000,
    stok: 30,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
  {
    id: 3,
    nama: "Terpal Kanvas Tebal",
    bahan: "Kanvas",
    warna: "Hijau",
    ukuran: "2 x 3 Meter",
    harga: 350000,
    stok: 20,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 4,
    nama: "Terpal Truck Heavy Duty",
    bahan: "Heavy Duty",
    warna: "Hitam",
    ukuran: "5 x 8 Meter",
    harga: 850000,
    stok: 15,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
  },
];

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

// =========================
// LANDING PAGE
// =========================

export default function LandingPage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      {/* =========================
          HERO
      ========================== */}

      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-10
            px-4
            py-14
            sm:px-6
            sm:py-16
            md:grid-cols-2
            md:py-20
            lg:px-8
            lg:py-24
            xl:px-30
          "
        >
          {/* TEXT */}

          <div>
            <p className="mb-3 text-sm font-bold tracking-wider text-orange-400 sm:mb-4 sm:text-base">
              RAMA TERPAL
            </p>

            <h1
              className="
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Terpal Berkualitas untuk Berbagai Kebutuhan
            </h1>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-relaxed
                text-blue-100
                sm:mt-6
                sm:text-lg
              "
            >
              Pilih berbagai bahan dan ukuran terpal atau pesan ukuran custom
              sesuai kebutuhan Anda.
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:mt-8
                sm:flex-row
                sm:flex-wrap
                sm:gap-4
              "
            >
              <Link
                to="/kategori"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3
                  font-semibold
                  transition
                  hover:bg-orange-600
                  sm:w-auto
                "
              >
                Lihat Produk
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/custom"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-blue-700
                  transition
                  hover:bg-gray-100
                  sm:w-auto
                "
              >
                Custom Terpal
              </Link>
            </div>
          </div>

          {/* IMAGE */}

          <div className="overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1586864387789-628af9feed72"
              alt="Produk Rama Terpal"
              className="
                h-56
                w-full
                object-cover
                sm:h-72
                md:h-80
                lg:h-[420px]
              "
            />
          </div>
        </div>
      </section>

      {/* =========================
          FEATURE
      ========================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          xl:px-30
        "
      >
        <div
          className="
            -mt-6
            grid
            grid-cols-1
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-lg
            sm:-mt-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* ITEM 1 */}

          <div className="flex items-center gap-4 border-b border-gray-100 p-5 transition hover:bg-gray-50 sm:p-6 lg:border-b-0">
            <div className="shrink-0 rounded-xl bg-blue-50 p-3">
              <ShieldCheck className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Bahan Berkualitas</h3>

              <p className="mt-1 text-sm text-gray-500">
                Material kuat dan tahan lama
              </p>
            </div>
          </div>

          {/* ITEM 2 */}

          <div className="flex items-center gap-4 border-b border-gray-100 p-5 transition hover:bg-gray-50 sm:p-6 lg:border-b-0">
            <div className="shrink-0 rounded-xl bg-blue-50 p-3">
              <Ruler className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Custom Ukuran</h3>

              <p className="mt-1 text-sm text-gray-500">Sesuai kebutuhan</p>
            </div>
          </div>

          {/* ITEM 3 */}

          <div className="flex items-center gap-4 border-b border-gray-100 p-5 transition hover:bg-gray-50 sm:border-b-0 sm:p-6">
            <div className="shrink-0 rounded-xl bg-blue-50 p-3">
              <Boxes className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Banyak Pilihan</h3>

              <p className="mt-1 text-sm text-gray-500">Beragam tipe terpal</p>
            </div>
          </div>

          {/* ITEM 4 */}

          <div className="flex items-center gap-4 p-5 transition hover:bg-gray-50 sm:p-6">
            <div className="shrink-0 rounded-xl bg-blue-50 p-3">
              <Truck className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Mudah Dipesan</h3>

              <p className="mt-1 text-sm text-gray-500">Checkout WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          KATEGORI
      ========================== */}

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
          xl:px-30
        "
      >
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
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Kategori
            </h2>

            <p className="mt-2 hidden text-gray-500 sm:block">
              Pilih jenis terpal sesuai kebutuhan Anda
            </p>
          </div>

          <Link
            to="/kategori"
            className="
              shrink-0
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:text-blue-700
              sm:text-base
            "
          >
            Lihat Semua
          </Link>
        </div>

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
                rounded-xl
                bg-white
                p-4
                text-center
                transition
                hover:-translate-y-1
                hover:shadow-md
                sm:p-6
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-sm
                  font-bold
                  text-blue-600
                  sm:h-14
                  sm:w-14
                  sm:text-base
                "
              >
                {item.title}
              </div>

              <p className="mt-3 text-sm font-medium text-gray-700 sm:mt-4 sm:text-base">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================
          PRODUK UNGGULAN
      ========================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          pb-16
          sm:px-6
          sm:pb-20
          lg:px-8
          xl:px-30
        "
      >
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
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Produk Unggulan
            </h2>

            <p className="mt-2 hidden text-gray-500 sm:block">
              Pilihan terbaik Rama Terpal
            </p>
          </div>

          <Link
            to="/kategori"
            className="
              shrink-0
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:text-blue-700
              sm:text-base
            "
          >
            Lihat Semua
          </Link>
        </div>

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
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* =========================
          LOKASI
      ========================== */}

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
            {/* INFORMASI */}

            <div>
              <p className="mb-3 text-sm font-bold tracking-wider text-orange-500 sm:text-base">
                LOKASI KAMI
              </p>

              <h2
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-gray-800
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
                  leading-relaxed
                  text-gray-500
                  sm:text-base
                "
              >
                Datang langsung ke toko Rama Terpal untuk melihat berbagai
                pilihan produk, berkonsultasi mengenai bahan, ukuran, dan
                pemesanan terpal custom sesuai kebutuhan Anda.
              </p>

              <div className="mt-7 space-y-5 sm:mt-8">
                {/* ALAMAT */}

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-blue-50 p-3">
                    <MapPin className="text-blue-600" size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800">Alamat</p>

                    <p className="mt-1 break-words text-sm text-gray-500 sm:text-base">
                      Rama Terpal, Indonesia
                    </p>
                  </div>
                </div>

                {/* TELEPON */}

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-blue-50 p-3">
                    <Phone className="text-blue-600" size={22} />
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
                        break-words
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
                  <div className="shrink-0 rounded-xl bg-blue-50 p-3">
                    <Mail className="text-blue-600" size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800">Email</p>

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

                {/* JAM */}

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-blue-50 p-3">
                    <Clock className="text-blue-600" size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800">
                      Jam Operasional
                    </p>

                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                      Senin - Sabtu, 08.00 - 17.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GOOGLE MAP */}

            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-gray-100
                shadow-xl
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

      {/* =========================
          FOOTER
      ========================== */}

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
              <Link to="/" className="inline-block">
                <h2 className="text-2xl font-bold">
                  RAMA <span className="text-orange-500">TERPAL</span>
                </h2>
              </Link>

              <p className="mt-5 text-sm leading-relaxed text-gray-400">
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

            {/* NAVIGASI */}

            <div>
              <h3 className="mb-5 text-lg font-semibold">Navigasi</h3>

              <div className="flex flex-col gap-3 text-sm text-gray-400 sm:text-base">
                <Link to="/" className="transition hover:text-white">
                  Beranda
                </Link>

                <Link to="/kategori" className="transition hover:text-white">
                  Semua Produk
                </Link>

                <Link to="/custom" className="transition hover:text-white">
                  Custom Terpal
                </Link>

                <Link to="/tentang" className="transition hover:text-white">
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* KONTAK */}

            <div>
              <h3 className="mb-5 text-lg font-semibold">Hubungi Kami</h3>

              <div className="space-y-5 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />

                  <span className="break-words">Rama Terpal, Indonesia</span>
                </div>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <Phone size={20} className="shrink-0 text-orange-500" />

                  <span>+62 812-3456-7890</span>
                </a>

                <a
                  href="mailto:info@ramaterpal.com"
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <Mail size={20} className="mt-0.5 shrink-0 text-orange-500" />

                  <span className="break-all">info@ramaterpal.com</span>
                </a>

                <div className="flex items-start gap-3">
                  <Clock
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />

                  <span>
                    Senin - Sabtu
                    <br />
                    08.00 - 17.00 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* SOSIAL MEDIA */}

            <div>
              <h3 className="mb-5 text-lg font-semibold">
                Sosial Media & Marketplace
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-400">
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

              <p className="mt-6 text-sm leading-relaxed text-gray-500">
                Pesan langsung melalui WhatsApp atau marketplace resmi Rama
                Terpal.
              </p>
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

            <p>Terpal berkualitas untuk setiap kebutuhan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
