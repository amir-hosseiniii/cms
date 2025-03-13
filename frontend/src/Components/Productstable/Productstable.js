import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteModal from "../deletemodal/DeleteModal";
import EditModal from "../editmodal/Editmodal"; // ایمپورت مودال ویرایش

export default function Productstable() {
  const [products, setProducts] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`http://localhost:3000/api/products/${selectedProduct.id}`)
      .then(() => {
        setProducts(products.filter((p) => p.id !== selectedProduct.id));
        setIsDeleteModalOpen(false);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditSave = (editedProduct) => {
    axios
      .put(`http://localhost:3000/api/products/${editedProduct.id}`, editedProduct)
      .then(() => {
        setProducts(products.map((p) => (p.id === editedProduct.id ? editedProduct : p)));
        setIsEditModalOpen(false);
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="products-table w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden mt-2">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-3 text-center">عکس</th>
            <th className="p-3 text-center">اسم</th>
            <th className="p-3 text-center">قیمت</th>
            <th className="p-3 text-center">موجودی</th>
            <th className="p-3 text-center">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-100 text-center">
              <td className="p-3 flex justify-center">
                <img src={product.img} alt={product.title} className="w-16 h-16 object-cover rounded-md" />
              </td>
              <td className="p-3">{product.title}</td>
              <td className="p-3">{product.price.toLocaleString()} تومان</td>
              <td className="p-3">{product.count}</td>
              <td className="p-3 flex justify-center items-center space-x-2 rtl:space-x-reverse">
                <button onClick={() => handleEditClick(product)} className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                  ویرایش
                </button>
                <button onClick={() => handleDeleteClick(product)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* مودال حذف */}
      <DeleteModal isOpen={isDeleteModalOpen} onConfirm={handleDeleteConfirm} onClose={() => setIsDeleteModalOpen(false)} />

      {/* مودال ویرایش */}
      <EditModal isOpen={isEditModalOpen} product={selectedProduct} onSave={handleEditSave} onClose={() => setIsEditModalOpen(false)} />
    </div>
  );
}
