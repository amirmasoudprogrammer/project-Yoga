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
        "/dashboard/Favorites"
    ];

    // بررسی مسیر داینامیک پروفایل
    const noLayout = noLayoutPages.includes(pathname) || pathname.startsWith("/User_Dashboard/Profile/");

    return noLayout ? children : <Layout>{children}</Layout>;
}
