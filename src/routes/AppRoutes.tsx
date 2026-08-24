import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


// USER
import LandingPage from "../pages/user/LandingPage";
import CategoryPage from "../pages/user/CategoryPage";
import CustomPage from "../pages/user/CustomPage";
import ContactPage from "../pages/user/ContactPage";
import CheckoutPage from "../pages/user/CheckoutPage";

import DetailProductPage from "../pages/user/DetailProductPage";

// ADMIN
import Dashboard from "../pages/admin/Dashboard";
import ManageProduct from "../pages/admin/ManageProduct";


// OWNER
import DashboardOwner from "../pages/owner/DashboardOwner";


import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import OwnerLayout from "../layouts/OwnerLayout";


export default function AppRoutes(){


return (

<BrowserRouter>


<Routes>

<Route element={<UserLayout/>}>


<Route 
path="/"
element={<LandingPage/>}
/>


<Route
path="/kategori"
element={<CategoryPage/>}
/>


<Route
path="/produk/:id"
element={<DetailProductPage/>}
/>


<Route
path="/custom"
element={<CustomPage/>}
/>


<Route
path="/kontak"
element={<ContactPage/>}
/>


<Route
path="/checkout"
element={<CheckoutPage/>}
/>


</Route>

{/* ADMIN AREA */}

<Route element={<AdminLayout/>}>


<Route
path="/admin/dashboard"
element={<Dashboard/>}
/>


<Route
path="/admin/product"
element={<ManageProduct/>}
/>


</Route>




{/* OWNER AREA */}

<Route element={<OwnerLayout/>}>


<Route
path="/owner/dashboard"
element={<DashboardOwner/>}
/>


</Route>



</Routes>


</BrowserRouter>

)

}