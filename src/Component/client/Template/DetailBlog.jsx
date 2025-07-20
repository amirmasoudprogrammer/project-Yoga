"use client";

import React from "react";
import { motion } from "framer-motion";
import SortIdBlog from "@/Component/client/module/SortIdBlog";
import SortIdBlog2 from "@/Component/client/module/SortIdBlog2";
import SortIdBlog3 from "@/Component/client/module/SortIdBlog3";
import SortIdBlog4 from "@/Component/client/module/SortIdBlog4";
import SortIdBlog5 from "@/Component/client/module/SortIdBlog5";


const componentMap = {
    0: SortIdBlog,
    1: SortIdBlog2,
    2: SortIdBlog3,
    3: SortIdBlog4,
    4: SortIdBlog5,
};

function DetailBlog({ data }) {
    const { images } = data.data;


    const validImages = images.filter(item => item.sort_order >= 0 && item.sort_order <= 5);

    return (
        <>
            {validImages.map((item, index) => {
                const Component = componentMap[item.sort_order];

                return (
                    <div key={index} className="container m-auto mt-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {Component ? (
                                <Component item={item} />
                            ) : null}
                        </motion.div>
                    </div>
                );
            })}
        </>
    );
}

export default DetailBlog;
