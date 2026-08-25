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

// DATA DUMMY

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

export default function LandingPage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-400 font-bold mb-4">
              RAMA TERPAL
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Terpal Berkualitas untuk Berbagai Kebutuhan
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed">
              Pilih berbagai bahan dan ukuran terpal atau pesan ukuran custom
              sesuai kebutuhan Anda.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kategori"
                className="bg-orange-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-orange-600 transition"
              >
                Lihat Produk
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/custom"
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Custom Terpal
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1586864387789-628af9feed72"
              alt="Produk Rama Terpal"
              className="w-full h-80 md:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURE */}

      <section className="max-w-7xl mx-auto px-30 -translate-y-10">
        <div className="bg-white rounded-2xl shadow-lg grid sm:grid-cols-2 md:grid-cols-4 overflow-hidden">
          <div className="p-6 flex gap-4 items-center hover:bg-gray-50 transition">
            <div className="bg-blue-50 p-3 rounded-xl">
              <ShieldCheck className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Bahan Berkualitas
              </h3>

              <p className="text-sm text-gray-500">
                Material kuat dan tahan lama
              </p>
            </div>
          </div>

          <div className="p-6 flex gap-4 items-center hover:bg-gray-50 transition">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Ruler className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Custom Ukuran
              </h3>

              <p className="text-sm text-gray-500">
                Sesuai kebutuhan
              </p>
            </div>
          </div>

          <div className="p-6 flex gap-4 items-center hover:bg-gray-50 transition">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Boxes className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Banyak Pilihan
              </h3>

              <p className="text-sm text-gray-500">
                Beragam tipe terpal
              </p>
            </div>
          </div>

          <div className="p-6 flex gap-4 items-center hover:bg-gray-50 transition">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Truck className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Mudah Dipesan
              </h3>

              <p className="text-sm text-gray-500">
                Checkout WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORI */}

      <section className="max-w-7xl mx-auto px-30 pb-16">
        <div className="flex justify-between items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Kategori
            </h2>

            <p className="text-gray-500 mt-2">
              Pilih jenis terpal sesuai kebutuhan Anda
            </p>
          </div>

          <Link
            to="/kategori"
            className="text-blue-600 font-semibold hover:text-blue-700 transition whitespace-nowrap"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              to="/kategori"
              className="bg-white rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 mx-auto flex items-center justify-center font-bold text-blue-600">
                {item.title}
              </div>

              <p className="mt-4 text-gray-700 font-medium">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUK UNGGULAN */}

      <section className="max-w-7xl mx-auto px-30 pb-20">
        <div className="flex justify-between items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Produk Unggulan
            </h2>

            <p className="text-gray-500 mt-2">
              Pilihan terbaik Rama Terpal
            </p>
          </div>

          <Link
            to="/kategori"
            className="text-blue-600 font-semibold hover:text-blue-700 transition whitespace-nowrap"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </section>

      {/* LOKASI */}

      <section className="bg-white py-20 px-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* INFORMASI LOKASI */}

            <div>
              <p className="text-orange-500 font-bold mb-3">
                LOKASI KAMI
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Kunjungi Rama Terpal
              </h2>

              <p className="mt-4 text-gray-500 leading-relaxed max-w-xl">
                Datang langsung ke toko Rama Terpal untuk melihat berbagai
                pilihan produk, berkonsultasi mengenai bahan, ukuran, dan
                pemesanan terpal custom sesuai kebutuhan Anda.
              </p>

              <div className="mt-8 space-y-5">
                {/* ALAMAT */}

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <MapPin
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      Alamat
                    </p>

                    <p className="text-gray-500 mt-1">
                      Rama Terpal, Indonesia
                    </p>
                  </div>
                </div>

                {/* TELEPON */}

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <Phone
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      Telepon / WhatsApp
                    </p>

                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 mt-1 block hover:text-blue-600 transition"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                {/* EMAIL */}

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <Mail
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      Email
                    </p>

                    <a
                      href="mailto:info@ramaterpal.com"
                      className="text-gray-500 mt-1 block hover:text-blue-600 transition"
                    >
                      info@ramaterpal.com
                    </a>
                  </div>
                </div>

                {/* JAM OPERASIONAL */}

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <Clock
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      Jam Operasional
                    </p>

                    <p className="text-gray-500 mt-1">
                      Senin - Sabtu, 08.00 - 17.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS */}

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
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
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-gray-950 text-white px-30">
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
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

              <p className="text-gray-400 mt-5 leading-relaxed text-sm">
                Menyediakan berbagai jenis terpal berkualitas untuk kebutuhan
                rumah tangga, usaha, industri, pertanian, transportasi, hingga
                kebutuhan custom.
              </p>

              <div className="mt-6">
                <Link
                  to="/kategori"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold transition"
                >
                  Belanja Sekarang
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* NAVIGASI */}

            <div>
              <h3 className="font-semibold text-lg mb-5">
                Navigasi
              </h3>

              <div className="flex flex-col gap-3 text-gray-400">
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Beranda
                </Link>

                <Link
                  to="/kategori"
                  className="hover:text-white transition"
                >
                  Semua Produk
                </Link>

                <Link
                  to="/custom"
                  className="hover:text-white transition"
                >
                  Custom Terpal
                </Link>

                <Link
                  to="/tentang"
                  className="hover:text-white transition"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* KONTAK */}

            <div>
              <h3 className="font-semibold text-lg mb-5">
                Hubungi Kami
              </h3>

              <div className="space-y-5 text-gray-400 text-sm">
                <div className="flex gap-3 items-start">
                  <MapPin
                    size={20}
                    className="text-orange-500 shrink-0 mt-0.5"
                  />

                  <span>
                    Rama Terpal, Indonesia
                  </span>
                </div>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 items-center hover:text-white transition"
                >
                  <Phone
                    size={20}
                    className="text-orange-500 shrink-0"
                  />

                  <span>
                    +62 812-3456-7890
                  </span>
                </a>

                <a
                  href="mailto:info@ramaterpal.com"
                  className="flex gap-3 items-center hover:text-white transition"
                >
                  <Mail
                    size={20}
                    className="text-orange-500 shrink-0"
                  />

                  <span>
                    info@ramaterpal.com
                  </span>
                </a>

                <div className="flex gap-3 items-start">
                  <Clock
                    size={20}
                    className="text-orange-500 shrink-0 mt-0.5"
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
              <h3 className="font-semibold text-lg mb-5">
                Sosial Media & Marketplace
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ikuti Rama Terpal dan temukan berbagai produk serta penawaran
                terbaru kami.
              </p>

              <div className="flex gap-3 flex-wrap">
                {/* INSTAGRAM */}

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Rama Terpal"
                  title="Instagram"
                  className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-pink-600 hover:-translate-y-1 transition"
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
                  className="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition"
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
                  className="h-11 px-4 flex items-center gap-2 bg-orange-500 rounded-xl hover:bg-orange-600 hover:-translate-y-1 transition font-semibold text-sm"
                >
                  <ShoppingBag size={20} />
                  Shopee
                </a>
              </div>

              <div className="mt-6">
                <p className="text-gray-500 text-sm">
                  Pesan langsung melalui WhatsApp atau marketplace resmi Rama
                  Terpal.
                </p>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}

          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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