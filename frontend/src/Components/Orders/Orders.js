import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorBox from "../Errorbox/ErrorBox";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/orders");
      setOrders(response.data);
    } catch (err) {
      setError("خطا در دریافت سفارشات");
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3000/api/orders/${orderId}`);
      setOrders(orders.filter((order) => order.id !== orderId));
    } catch (err) {
      console.error("خطا در حذف سفارش:", err);
    }
  };

  const updateOrderStatus = async (orderId, isActive) => {
    try {
      await axios.put(`http://localhost:3000/api/orders/active-order`, null, {
        params: { orderID: orderId, isActive: isActive ? 1 : 0 },
      });
      fetchOrders();
    } catch (err) {
      console.error("خطا در تغییر وضعیت سفارش:", err);
    }
  };

  if (loading) return <p>در حال دریافت سفارشات...</p>;
  if (error) return <ErrorBox msg={error} />;
  if (orders.length === 0) return <ErrorBox msg={"هیچ سفارشی موجود نیست"} />;

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">لیست سفارشات</h2>
      {orders.map((order) => (
        <div key={order.id} className="p-4 border rounded-lg mb-4">
          <p>نام مشتری: {order.customerName}</p>
          <p>مبلغ: {order.amount} تومان</p>
          <p>وضعیت: {order.isActive ? "فعال" : "غیرفعال"}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => updateOrderStatus(order.id, !order.isActive)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              تغییر وضعیت
            </button>
            <button
              onClick={() => deleteOrder(order.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

