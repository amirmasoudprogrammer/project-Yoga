"use client";
import { usePathname } from "next/navigation";
import Layout from "@/Component/client/Layout/Layout";


export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    const noLayoutPages = [
        "/auth",
        "/auth/Login",
        "/auth/Check_Code",
        "/dashboard",
        "/dashboard/Profile",
        "/dashboard/ticketNew",
        "/dashboard/ticketAll",
        "/dashboard/my-courses",
        "/dashboard/Favorites",
        "/admin-panel", "/admin-panel/Dashboard/DashboardOne",
        "/admin-panel/Dashboard/DashboardTwo", "/admin-panel/Product",
        "/admin-panel/CategoriesPage", "/admin-panel/Orders",
        "/admin-panel/Users", "/admin-panel/Warehouse",
        "/admin-panel/DiscountsPage", "/admin-panel/Blogs",
        "/admin-panel/Pages", "/admin-panel/Comments",
        "/admin-panel/Products_Comments", "/admin-panel/Banners",
        "/admin-panel/ticket", "/admin-panel/Menus",
        "/admin-panel/Settings", "/admin-panel/Product/add",
        "/admin-panel/Product/Colors",
        "/admin-panel/Categories", "/admin-panel/Categories/add",
        "/admin-panel/Users/roles", "/admin-panel/Users/permissions",
        "/admin-panel/Discounts", "/admin-panel/Discounts/Add",
        "/admin-panel/Discounts/Edit", "/admin-panel/Blogs/add",
        "/admin-panel/About",
        "/LoginAdmin"
    ];

    // بررسی مسیر داینامیک پروفایل
    const noLayout = noLayoutPages.includes(pathname) || pathname.startsWith("/User_Dashboard/Profile/");

    return noLayout ? children : <Layout>{children}</Layout>;
}
