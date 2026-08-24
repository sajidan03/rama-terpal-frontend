export interface Product {

    id:number;

    bahan:string;

    warna:string;

    stok:number;

    harga:number;

    ukuran:{
        id:number;
        panjang:number;
        lebar:number;
        template:string;
    }

}



export interface User {

    id:number;

    nama_lengkap:string;

    username:string;

    role:
    | "admin"
    | "pemilik"
    | "user";

    no_telepon:string;

    status:
    | "aktif"
    | "nonaktif";

}



export interface Order {

    id:number;

    customer:string;

    phone:string;

    alamat:string;

    product:string;

    ukuran:string;

    jumlah:number;

}