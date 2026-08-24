export interface Product {
  id: number;
  nama: string;
  bahan: string;
  warna: string;
  ukuran: string;
  stok: number;
  harga: number;
  terjual: number;
  rating: number;
  image: string;
  deskripsi: string;
}

export const products: Product[] = [
  {
    id: 1,
    nama: "Terpal A12 Premium Biru",
    bahan: "A12",
    warna: "Biru",
    ukuran: "3 x 4 Meter",
    stok: 50,
    harga: 250000,
    terjual: 230,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal A12 berkualitas untuk kebutuhan rumah, usaha, pertanian, proyek dan kebutuhan penutup lainnya.",
  },

  {
    id: 2,
    nama: "Terpal PVC Anti Air Premium",
    bahan: "PVC",
    warna: "Orange",
    ukuran: "4 x 6 Meter",
    stok: 30,
    harga: 500000,
    terjual: 180,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal PVC dengan material lebih tebal dan tahan air. Cocok untuk penggunaan outdoor dan industri.",
  },

  {
    id: 3,
    nama: "Terpal Kanvas Tebal",
    bahan: "Kanvas",
    warna: "Hijau",
    ukuran: "2 x 3 Meter",
    stok: 20,
    harga: 350000,
    terjual: 150,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal kanvas dengan material tebal untuk kebutuhan yang membutuhkan daya tahan lebih tinggi.",
  },

  {
    id: 4,
    nama: "Terpal Truk Heavy Duty",
    bahan: "PVC Heavy Duty",
    warna: "Hitam",
    ukuran: "5 x 8 Meter",
    stok: 15,
    harga: 850000,
    terjual: 90,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e80948bb38?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal heavy duty untuk truk dan kebutuhan logistik. Material kuat untuk penggunaan berat.",
  },

  {
    id: 5,
    nama: "Terpal Kolam Anti Bocor",
    bahan: "PVC",
    warna: "Biru",
    ukuran: "6 x 10 Meter",
    stok: 12,
    harga: 1200000,
    terjual: 75,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal untuk kolam ikan dan kebutuhan penampungan air dengan material tahan air.",
  },

  {
    id: 6,
    nama: "Terpal Plastik Ekonomis",
    bahan: "Plastik",
    warna: "Putih",
    ukuran: "2 x 3 Meter",
    stok: 80,
    harga: 150000,
    terjual: 300,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Pilihan ekonomis untuk kebutuhan sederhana dan penggunaan sehari-hari.",
  },

  {
    id: 7,
    nama: "Terpal Industri Heavy Duty",
    bahan: "Heavy Duty",
    warna: "Hitam",
    ukuran: "4 x 5 Meter",
    stok: 25,
    harga: 700000,
    terjual: 120,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Dirancang untuk kebutuhan industri dengan ketahanan tinggi terhadap penggunaan berat.",
  },

  {
    id: 8,
    nama: "Terpal Custom Ukuran",
    bahan: "Custom",
    warna: "Custom",
    ukuran: "Custom",
    stok: 40,
    harga: 450000,
    terjual: 210,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Ukuran, bahan dan warna dapat disesuaikan dengan kebutuhan pelanggan.",
  },

  {
    id: 9,
    nama: "Terpal Tambak Premium",
    bahan: "PVC",
    warna: "Hijau",
    ukuran: "8 x 10 Meter",
    stok: 10,
    harga: 1500000,
    terjual: 60,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal ukuran besar untuk tambak, kolam dan kebutuhan pertanian.",
  },

  {
    id: 10,
    nama: "Terpal Camping Outdoor",
    bahan: "Polyester",
    warna: "Army",
    ukuran: "3 x 5 Meter",
    stok: 35,
    harga: 400000,
    terjual: 140,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal praktis untuk camping, outdoor dan kebutuhan perlindungan dari cuaca.",
  },

  {
    id: 11,
    nama: "Terpal A5 Biru Ekonomis",
    bahan: "A5",
    warna: "Biru",
    ukuran: "3 x 5 Meter",
    stok: 45,
    harga: 175000,
    terjual: 175,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal ekonomis untuk berbagai kebutuhan rumah tangga.",
  },

  {
    id: 12,
    nama: "Terpal A8 Premium",
    bahan: "A8",
    warna: "Biru",
    ukuran: "4 x 6 Meter",
    stok: 27,
    harga: 325000,
    terjual: 110,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    deskripsi:
      "Terpal A8 dengan ketebalan baik untuk penggunaan rutin dan outdoor.",
  },
];