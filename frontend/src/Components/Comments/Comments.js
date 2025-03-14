import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorBox from "../Errorbox/ErrorBox";
import { FaTrash } from "react-icons/fa";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState(""); // استیت برای کامنت جدید
  const [error, setError] = useState("");

  // دریافت کامنت‌ها از API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/comments");
        setComments(response.data);
      } catch (error) {
        console.error("خطا در دریافت کامنت‌ها:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // تابع حذف کامنت
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3000/api/comments/${commentId}`);
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("خطا در حذف کامنت:", error);
    }
  };

  // تابع ارسال کامنت جدید
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setError("متن کامنت نمی‌تواند خالی باشد!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/comments", {
        body: newComment,
      });

      setComments([response.data, ...comments]); // اضافه کردن کامنت جدید به لیست
      setNewComment(""); // پاک کردن فیلد ورودی
      setError(""); // حذف خطاها
    } catch (error) {
      console.error("خطا در ثبت کامنت:", error);
      setError("مشکلی در ارسال کامنت پیش آمد، لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
        💬 نظرات کاربران
      </h2>

      {/* فرم ارسال کامنت جدید */}
      <form onSubmit={handleAddComment} className="mb-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg resize-none"
          placeholder="نظر خود را بنویسید..."
          rows="3"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg mt-3 hover:bg-green-700 transition-all"
        >
          ارسال نظر
        </button>
      </form>

      {loading ? (
        <p className="text-center text-gray-500 animate-pulse">⏳ در حال بارگذاری...</p>
      ) : comments.length === 0 ? (
        <ErrorBox msg="هیچ کامنتی موجود نیست" />
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment._id}
              className="p-4 bg-white shadow-md border border-gray-200 rounded-lg flex justify-between items-center transition-all hover:shadow-lg"
            >
              <p className="text-gray-700">{comment.body}</p>
              <button
                onClick={() => handleDeleteComment(comment._id)}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition-all flex items-center"
              >
                <FaTrash className="mr-1" /> حذف
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
