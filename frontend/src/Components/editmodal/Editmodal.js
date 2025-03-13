import React, { useState } from "react";

export default function EditModal({ isOpen, product, onSave, onClose }) {
  const [editedProduct, setEditedProduct] = useState(product || {});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">ویرایش محصول</h2>
        <div className="space-y-3">
          <input name="title" value={editedProduct.title} onChange={handleChange} className="w-full p-2 border rounded" placeholder="نام محصول" />
          <input name="price" value={editedProduct.price} onChange={handleChange} className="w-full p-2 border rounded" placeholder="قیمت" />
          <input name="count" value={editedProduct.count} onChange={handleChange} className="w-full p-2 border rounded" placeholder="موجودی" />
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={() => onSave(editedProduct)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">ذخیره</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">لغو</button>
        </div>
      </div>
    </div>
  );
}
