"use client";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {motion} from "framer-motion";
import {toast} from "sonner";
import BASE_URL from "@/ApiBase/Base";

function EditAbout({editPopups, setEditPopups}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        address: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const token = Cookies.get('tokenAdmin');
                const res = await axios.get(`${BASE_URL}/v1/abouts`, {
                    headers: token ? {Authorization: `Bearer ${token}`} : {}
                });
                const data = res.data.data;
                setFormData({
                    title: data.title || "",
                    description: data.description || "",
                    address: data.address || "",
                    phone: data.phone || "",
                    email: data.email || ""
                });
            } catch (error) {
                console.error("خطا در گرفتن اطلاعات برای ویرایش:", error);
            }
        };

        if (editPopups.id) fetchItem();
    }, [editPopups.id]);

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData()
        form.append("title", formData.title)
        form.append("description", formData.description)
        form.append("address", formData.address)
        form.append("phone", formData.phone)
        form.append("email", formData.email)
        form.append("_method", "PUT");


        try {
            const token = Cookies.get('tokenAdmin');
            const res = await axios.post(`${BASE_URL}/v1/abouts/${editPopups.id}`, form,
                {
                    headers: token ? {Authorization: `Bearer ${token}`} : {}
                }
            );
            if (res.status === 200) {
                toast.success("دیتا ها ابدیت شد...")
            }
            setEditPopups({show: false, id: null});
        } catch (error) {
            toast.error("خطا در ویرایش:", error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.8}}
                transition={{duration: 0.3}}
                className="bg-white w-full max-w-xl rounded-2xl p-8 shadow-lg text-right font-estedad"
            >
                <h2 className="text-xl font-bold mb-4 text-center">✏️ ویرایش درباره ما</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">عنوان</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">توضیحات</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border rounded-lg px-4 py-2"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">آدرس</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">تلفن</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">ایمیل</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={() => setEditPopups({show: false, id: null})}
                            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
                        >
                            ❌ بستن
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            💾 ذخیره
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default EditAbout;
