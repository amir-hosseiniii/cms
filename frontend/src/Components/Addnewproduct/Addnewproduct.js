import React from 'react';

export default function AddNewProduct() {
  return (
    <div className="products-main bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6">
      <h1 className="product-title text-xl font-semibold text-gray-800 text-center mb-4">افزودن محصول جدید</h1>
      <form action="" className="add-products-form space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="add-products-form-wrap">
            <input type="text" placeholder="اسم محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="add-products-form-wrap">
            <input type="text" placeholder="قیمت محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="add-products-form-wrap">
            <input type="text" placeholder="موجودی محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="add-products-form-wrap">
            <input type="text" placeholder="آدرس عکس محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="add-products-form-wrap">
            <input type="text" placeholder="میزان محبوبیت محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="add-products-form-wrap">
            <input type="text" placeholder="میزان فروش محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="add-products-form-wrap md:col-span-2">
            <input type="text" placeholder="تعداد رنگ محصول را وارد کنید" className="add-products-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>
        <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
          افزودن محصول
        </button>
      </form>
    </div>
  );
}
