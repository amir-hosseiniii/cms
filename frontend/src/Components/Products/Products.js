import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorBox from "../Errorbox/ErrorBox";
import AddNewProduct from "../Addnewproduct/Addnewproduct";
import ProductsTable from "../Productstable/Productstable";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // دریافت لیست محصولات از سرور
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // تابع برای اضافه کردن محصول جدید به لیست
  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <AddNewProduct onProductAdded={handleProductAdded} />
      {loading ? (
        <p className="text-center">در حال بارگذاری...</p>
      ) : products.length === 0 ? (
        <ErrorBox msg="هیچ محصولی موجود نیست" />
      ) : (
        <ProductsTable products={products} />
      )}
    </div>
  );
}
