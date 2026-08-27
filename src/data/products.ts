// FILE:
// src/data/products.ts


export interface Product {

  id: number;

  nama: string;

  type: string;

  ukuran: string;

  bahan: string;

  warna: string;

  stok: number;

  harga: number;

  rating: number;

  terjual: number;

  deskripsi: string;

  image: string;

}



export const products: Product[] = [

  {
    id: 1,
    nama: "Terpal A5 Ukuran 2x3 Meter",
    type: "A5",
    ukuran: "2 x 3 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 3,
    harga: 78000,
    rating: 4.8,
    terjual: 15,
    deskripsi: "Terpal A5 ekonomis dengan kualitas baik untuk kebutuhan penutup barang dan penggunaan sehari-hari.",
    image: "/images/terpal.jpg"
  },

  {
    id: 2,
    nama: "Terpal A12 Ukuran 2x3 Meter",
    type: "A12",
    ukuran: "2 x 3 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 7,
    harga: 105000,
    rating: 4.9,
    terjual: 28,
    deskripsi: "Terpal A12 dengan bahan lebih tebal, kuat dan tahan lama untuk berbagai kebutuhan.",
    image: "/images/terpal.jpg"
  },

  {
    id: 3,
    nama: "Terpal A3 Ukuran 3x3 Meter",
    type: "A3",
    ukuran: "3 x 3 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 1,
    harga: 99000,
    rating: 4.7,
    terjual: 10,
    deskripsi: "Terpal A3 ringan dan praktis untuk kebutuhan rumah tangga maupun usaha.",
    image: "/images/terpal.jpg"
  },

  {
    id: 4,
    nama: "Terpal A5 Ukuran 3x3 Meter",
    type: "A5",
    ukuran: "3 x 3 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 2,
    harga: 117000,
    rating: 4.8,
    terjual: 13,
    deskripsi: "Terpal A5 dengan harga terjangkau dan kualitas yang stabil.",
    image: "/images/terpal.jpg"
  },

  {
    id: 5,
    nama: "Terpal A10 Ukuran 3x3 Meter",
    type: "A10",
    ukuran: "3 x 3 Meter",
    bahan: "Terpal A10",
    warna: "Biru",
    stok: 2,
    harga: 145000,
    rating: 4.9,
    terjual: 19,
    deskripsi: "Terpal A10 cocok untuk penggunaan yang membutuhkan daya tahan lebih baik.",
    image: "/images/terpal.jpg"
  },

  {
    id: 6,
    nama: "Terpal A12 Ukuran 3x3 Meter",
    type: "A12",
    ukuran: "3 x 3 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 2,
    harga: 157000,
    rating: 4.9,
    terjual: 22,
    deskripsi: "Terpal premium dengan material kuat dan tahan terhadap penggunaan berat.",
    image: "/images/terpal.jpg"
  },

  {
    id: 7,
    nama: "Terpal A2 Ukuran 3x4 Meter",
    type: "A2",
    ukuran: "3 x 4 Meter",
    bahan: "Terpal A2",
    warna: "Biru",
    stok: 3,
    harga: 100000,
    rating: 4.7,
    terjual: 9,
    deskripsi: "Terpal A2 pilihan ekonomis untuk kebutuhan sederhana.",
    image: "/images/terpal.jpg"
  },

  {
    id: 8,
    nama: "Terpal A3 Ukuran 3x4 Meter",
    type: "A3",
    ukuran: "3 x 4 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 5,
    harga: 130000,
    rating: 4.8,
    terjual: 17,
    deskripsi: "Terpal A3 dengan ukuran praktis dan mudah digunakan.",
    image: "/images/terpal.jpg"
  },

  {
    id: 9,
    nama: "Terpal A5 Ukuran 3x4 Meter",
    type: "A5",
    ukuran: "3 x 4 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 2,
    harga: 150000,
    rating: 4.8,
    terjual: 21,
    deskripsi: "Terpal A5 untuk kebutuhan umum dengan kualitas dan harga seimbang.",
    image: "/images/terpal.jpg"
  },

  {
    id: 10,
    nama: "Terpal A10 Ukuran 3x4 Meter",
    type: "A10",
    ukuran: "3 x 4 Meter",
    bahan: "Terpal A10",
    warna: "Biru",
    stok: 2,
    harga: 190000,
    rating: 4.9,
    terjual: 30,
    deskripsi: "Terpal A10 kuat untuk penggunaan luar ruangan.",
    image: "/images/terpal.jpg"
  },

  {
    id: 11,
    nama: "Terpal A12 Ukuran 3x4 Meter",
    type: "A12",
    ukuran: "3 x 4 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 9,
    harga: 210000,
    rating: 5,
    terjual: 45,
    deskripsi: "Terpal A12 premium dengan ketebalan dan daya tahan tinggi.",
    image: "/images/terpal.jpg"
  },

  {
    id: 12,
    nama: "Terpal A5 Ukuran 3x5 Meter",
    type: "A5",
    ukuran: "3 x 5 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 2,
    harga: 195000,
    rating: 4.8,
    terjual: 18,
    deskripsi: "Terpal A5 ukuran besar untuk berbagai kebutuhan.",
    image: "/images/terpal.jpg"
  },

  // PRODUK 13 - 31 LANJUTAN
  {
    id: 13,
    nama: "Terpal A3 Ukuran 3x5 Meter",
    type: "A3",
    ukuran: "3 x 5 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 1,
    harga: 165000,
    rating: 4.8,
    terjual: 12,
    deskripsi: "Terpal A3 ukuran sedang dengan bahan ringan dan cocok untuk berbagai kebutuhan.",
    image: "/images/terpal.jpg"
  },

  {
    id: 14,
    nama: "Terpal Makmur Ukuran 4x4 Meter",
    type: "Makmur",
    ukuran: "4 x 4 Meter",
    bahan: "Terpal Makmur",
    warna: "Biru",
    stok: 4,
    harga: 190000,
    rating: 4.8,
    terjual: 16,
    deskripsi: "Terpal Makmur dengan kualitas kuat dan harga ekonomis.",
    image: "/images/terpal.jpg"
  },

  {
    id: 15,
    nama: "Terpal A12 Ukuran 3x6 Meter",
    type: "A12",
    ukuran: "3 x 6 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 3,
    harga: 310000,
    rating: 4.9,
    terjual: 20,
    deskripsi: "Terpal A12 ukuran panjang untuk kebutuhan penutup area luas.",
    image: "/images/terpal.jpg"
  },

  {
    id: 16,
    nama: "Terpal A12 Ukuran 3x5 Meter",
    type: "A12",
    ukuran: "3 x 5 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 3,
    harga: 250000,
    rating: 4.9,
    terjual: 24,
    deskripsi: "Terpal A12 premium dengan daya tahan tinggi.",
    image: "/images/terpal.jpg"
  },

  {
    id: 17,
    nama: "Terpal A10 Ukuran 4x5 Meter",
    type: "A10",
    ukuran: "4 x 5 Meter",
    bahan: "Terpal A10",
    warna: "Biru",
    stok: 2,
    harga: 320000,
    rating: 4.9,
    terjual: 18,
    deskripsi: "Terpal A10 cocok untuk kebutuhan usaha dan outdoor.",
    image: "/images/terpal.jpg"
  },

  {
    id: 18,
    nama: "Terpal A2 Ukuran 4x5 Meter",
    type: "A2",
    ukuran: "4 x 5 Meter",
    bahan: "Terpal A2",
    warna: "Biru",
    stok: 2,
    harga: 170000,
    rating: 4.7,
    terjual: 10,
    deskripsi: "Terpal A2 ekonomis dengan ukuran luas.",
    image: "/images/terpal.jpg"
  },

  {
    id: 19,
    nama: "Terpal A3 Ukuran 4x5 Meter",
    type: "A3",
    ukuran: "4 x 5 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 3,
    harga: 190000,
    rating: 4.8,
    terjual: 14,
    deskripsi: "Terpal A3 dengan ukuran ideal untuk kebutuhan sehari-hari.",
    image: "/images/terpal.jpg"
  },

  {
    id: 20,
    nama: "Terpal A12 Ukuran 4x6 Meter",
    type: "A12",
    ukuran: "4 x 6 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 2,
    harga: 350000,
    rating: 4.9,
    terjual: 22,
    deskripsi: "Terpal A12 ukuran besar dengan kualitas premium.",
    image: "/images/terpal.jpg"
  },

  {
    id: 21,
    nama: "Terpal A3 Ukuran 4x6 Meter",
    type: "A3",
    ukuran: "4 x 6 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 2,
    harga: 2600000,
    rating: 4.8,
    terjual: 8,
    deskripsi: "Terpal A3 ukuran besar untuk berbagai kebutuhan.",
    image: "/images/terpal.jpg"
  },

  {
    id: 22,
    nama: "Terpal A5 Ukuran 4x6 Meter",
    type: "A5",
    ukuran: "4 x 6 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 6,
    harga: 310000,
    rating: 4.8,
    terjual: 30,
    deskripsi: "Terpal A5 dengan ukuran luas dan kualitas baik.",
    image: "/images/terpal.jpg"
  },

  {
    id: 23,
    nama: "Terpal A12 Ukuran 4x6 Meter Premium",
    type: "A12",
    ukuran: "4 x 6 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 4,
    harga: 420000,
    rating: 5,
    terjual: 35,
    deskripsi: "Terpal A12 premium untuk kebutuhan berat dan penggunaan lama.",
    image: "/images/terpal.jpg"
  },

  {
    id: 24,
    nama: "Terpal A2 Ukuran 4x6 Meter",
    type: "A2",
    ukuran: "4 x 6 Meter",
    bahan: "Terpal A2",
    warna: "Biru",
    stok: 2,
    harga: 200000,
    rating: 4.7,
    terjual: 11,
    deskripsi: "Terpal A2 ukuran luas dengan harga terjangkau.",
    image: "/images/terpal.jpg"
  },

  {
    id: 25,
    nama: "Terpal A12 Ukuran 4x7 Meter",
    type: "A12",
    ukuran: "4 x 7 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 2,
    harga: 490000,
    rating: 4.9,
    terjual: 19,
    deskripsi: "Terpal A12 ukuran besar untuk kebutuhan profesional.",
    image: "/images/terpal.jpg"
  },

  {
    id: 26,
    nama: "Terpal A3 Ukuran 4x7 Meter",
    type: "A3",
    ukuran: "4 x 7 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 3,
    harga: 308000,
    rating: 4.8,
    terjual: 15,
    deskripsi: "Terpal A3 dengan ukuran panjang dan praktis.",
    image: "/images/terpal.jpg"
  },

  {
    id: 27,
    nama: "Terpal A5 Ukuran 4x7 Meter",
    type: "A5",
    ukuran: "4 x 7 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 1,
    harga: 360000,
    rating: 4.8,
    terjual: 13,
    deskripsi: "Terpal A5 ukuran besar dengan kualitas stabil.",
    image: "/images/terpal.jpg"
  },

  {
    id: 28,
    nama: "Terpal A3 Ukuran 5x6 Meter",
    type: "A3",
    ukuran: "5 x 6 Meter",
    bahan: "Terpal A3",
    warna: "Biru",
    stok: 2,
    harga: 330000,
    rating: 4.8,
    terjual: 12,
    deskripsi: "Terpal A3 ukuran besar untuk berbagai kebutuhan.",
    image: "/images/terpal.jpg"
  },

  {
    id: 29,
    nama: "Terpal A5 Ukuran 5x6 Meter",
    type: "A5",
    ukuran: "5 x 6 Meter",
    bahan: "Terpal A5",
    warna: "Biru",
    stok: 1,
    harga: 390000,
    rating: 4.9,
    terjual: 17,
    deskripsi: "Terpal A5 dengan area luas dan bahan kuat.",
    image: "/images/terpal.jpg"
  },

  {
    id: 30,
    nama: "Terpal Makmur Ukuran 5x6 Meter",
    type: "Makmur",
    ukuran: "5 x 6 Meter",
    bahan: "Terpal Makmur",
    warna: "Biru",
    stok: 1,
    harga: 375000,
    rating: 4.8,
    terjual: 9,
    deskripsi: "Terpal Makmur ukuran besar untuk kebutuhan serbaguna.",
    image: "/images/terpal.jpg"
  },

  {
    id: 31,
    nama: "Terpal A12 Ukuran 5x6 Meter Premium",
    type: "A12",
    ukuran: "5 x 6 Meter",
    bahan: "Terpal A12 Premium",
    warna: "Biru",
    stok: 1,
    harga: 525000,
    rating: 5,
    terjual: 21,
    deskripsi: "Terpal A12 premium ukuran besar dengan kualitas terbaik.",
    image: "/images/terpal.jpg"
  }

];


