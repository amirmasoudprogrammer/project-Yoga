import React from 'react';
import Banner from "@/Component/client/Template/Banner";
import Category from "@/Component/client/Template/Category";
import Manager_Profile from "@/Component/client/Template/Manager_Profile";
import BannerMain from "@/Component/client/Template/BannerMain";
import Courses from "@/Component/client/Template/Courses";
import Our_Products from "@/Component/client/Template/Our_Products";
import Blog from "@/Component/client/Template/Blog";

function HomePage(props) {
    return (
        <>
            <Banner/>
            <Category/>
            <Manager_Profile/>
            <BannerMain/>
            <Courses/>
            <Our_Products/>
            <Blog/>
        </>
    );
}

export default HomePage;