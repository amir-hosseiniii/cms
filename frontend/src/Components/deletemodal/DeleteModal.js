import React from "react";

export default function DeleteModal({ isOpen, onConfirm, onClose }) {
  if (!isOpen) return null; // اگر مودال بسته باشه، نمایش داده نشه

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-lg font-semibold mb-4">آیا از حذف محصول مطمئن هستید؟</h2>
        <div className="flex justify-between">
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
            بله
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all">
            خیر
          </button>
        </div>
      </div>
    </div>
  );
}
