import React from 'react';
import Header from "@/Component/client/Layout/Header";
import Footer from "@/Component/client/Layout/Footer";

function Layout({children}) {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    );
}

export default Layout;