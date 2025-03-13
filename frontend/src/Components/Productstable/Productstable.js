import React from 'react';

export default function Productstable() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="products-table w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden mt-2">
        <thead className="bg-gray-900 text-white">
          <tr className="products-table-heading-tr">
            <th className="p-3 text-center">عکس</th>
            <th className="p-3 text-center">اسم</th>
            <th className="p-3 text-center">قیمت</th>
            <th className="p-3 text-center">موجودی</th>
            <th className="p-3 text-center">عملیات</th>
          </tr>
        </thead>
        <tbody>
          
          <tr className="border-b hover:bg-gray-100 text-center">
            <td className="p-3 flex justify-center">
              <img src="/img/razerheadset.webp" alt="هدست ریزر" className="w-16 h-16 object-cover rounded-md"/>
            </td>
            <td className="p-3">Razer Headset</td>
            <td className="p-3">3,000,000 تومان</td>
            <td className="p-3">10</td>
            <td className="p-3 flex justify-center items-center space-x-2 rtl:space-x-reverse">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all">جزییات</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all">حذف</button>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-all">ویرایش</button>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-100 text-center">
            <td className="p-3 flex justify-center">
              <img src="/img/razerheadset.webp" alt="هدست ریزر" className="w-16 h-16 object-cover rounded-md"/>
            </td>
            <td className="p-3">Razer Headset</td>
            <td className="p-3">3,000,000 تومان</td>
            <td className="p-3">10</td>
            <td className="flex justify-center items-center space-x-2 rtl:space-x-reverse w-full h-full">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all">جزییات</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all">حذف</button>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-all">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
