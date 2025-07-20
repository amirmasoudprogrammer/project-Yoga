"use client";
import React, {useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "@/ApiBase/Base";

function AddAbout({onClose}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        address: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const form = new FormData();
            form.append("title", formData.title);
            form.append("description", formData.description);
            form.append("address", formData.address);
            form.append("phone", formData.phone);
            form.append("email", formData.email);
            const token = Cookies.get("tokenAdmin");
            const res = await axios.post(`${BASE_URL}/v1/abouts`, form, {
                headers: token ? {Authorization: `Bearer ${token}`} : {}
            });
            console.log(res)

            onClose(); // بستن مودال پس از ارسال موفق
        } catch (error) {
            console.error("خطا در افزودن:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md text-right font-estedad">
                <h2 className="text-xl font-bold mb-4 text-center">➕ افزودن درباره ما</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold">عنوان</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">توضیحات</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2 h-24"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">آدرس</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">تلفن</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">ایمیل</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            انصراف
                        </button>
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                            ذخیره
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAbout;
