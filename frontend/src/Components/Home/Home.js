import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    products: 0,
    offs: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const usersRes = await axios.get("http://localhost:3000/api/users");
      const ordersRes = await axios.get("http://localhost:3000/api/orders");
      const productsRes = await axios.get("http://localhost:3000/api/products");
      const offsRes = await axios.get("http://localhost:3000/api/offs");

      setStats({
        users: usersRes.data.length,
        orders: ordersRes.data.length,
        products: productsRes.data.length,
        offs: offsRes.data.length,
      });
    } catch (err) {
      console.error("خطا در دریافت آمار:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🏠 داشبورد مدیریت</h1>

      {/* بخش آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { title: "کاربران", count: stats.users, color: "bg-blue-500" },
          { title: "سفارشات", count: stats.orders, color: "bg-green-500" },
          { title: "محصولات", count: stats.products, color: "bg-yellow-500" },
          { title: "تخفیف‌ها", count: stats.offs, color: "bg-red-500" },
        ].map((item, index) => (
          <div key={index} className={`${item.color} text-white p-4 rounded-lg text-center`}>
            <h3 className="text-lg">{item.title}</h3>
            <p className="text-2xl font-bold">{item.count}</p>
          </div>
        ))}
      </div>

      {/* لیست آخرین سفارشات */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">📦 آخرین سفارشات</h2>
        <p>نمایش جدیدترین سفارشات...</p>
      </div>

      {/* لیست آخرین کاربران */}
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">👤 آخرین کاربران عضو شده</h2>
        <p>نمایش آخرین کاربران ثبت‌نام کرده...</p>
      </div>
    </div>
  );
}
