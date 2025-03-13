import React, { useState } from "react";
import axios from "axios";

export default function AddNewProduct({ onProductAdded }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    count: "",
    img: "",
    popularity: "",
    sale: "",
    colors: "",
  });

  const [loading, setLoading] = useState(false); // افزودن لودر برای تجربه بهتر

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: ["price", "count", "popularity", "sale", "colors"].includes(name)
        ? Number(value) || 0 // تبدیل مقدار به عدد
        : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Sending Product:", newProduct); // بررسی مقدار قبل از ارسال

      const response = await axios.post("http://localhost:3000/api/products", newProduct, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response.data); // بررسی پاسخ سرور

      if (response.status === 201) {
        onProductAdded(response.data);
        setNewProduct({
          title: "",
          price: "",
          count: "",
          img: "",
          popularity: "",
          sale: "",
          colors: "",
        });
      } else {
        console.error("خطای غیرمنتظره:", response.status, response.data);
      }
    } catch (error) {
      console.error("خطا در افزودن محصول:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="products-main bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6">
      <h1 className="product-title text-xl font-semibold text-gray-800 text-center mb-4">افزودن محصول جدید</h1>
      <form onSubmit={handleSubmit} className="add-products-form space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "title", placeholder: "اسم محصول", type: "text" },
            { name: "price", placeholder: "قیمت محصول", type: "number" },
            { name: "count", placeholder: "موجودی محصول", type: "number" },
            { name: "img", placeholder: "آدرس عکس محصول", type: "text" },
            { name: "popularity", placeholder: "میزان محبوبیت محصول", type: "number" },
            { name: "sale", placeholder: "میزان فروش محصول", type: "number" },
            { name: "colors", placeholder: "تعداد رنگ محصول", type: "number", fullWidth: true },
          ].map(({ name, placeholder, type, fullWidth }) => (
            <div key={name} className={`add-products-form-wrap ${fullWidth ? "md:col-span-2" : ""}`}>
              <input
                type={type}
                name={name}
                value={newProduct[name]}
                onChange={handleChange}
                placeholder={`${placeholder} را وارد کنید`}
                className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          disabled={loading}
        >
          {loading ? "در حال افزودن..." : "افزودن محصول"}
        </button>
      </form>
    </div>
  );
}
