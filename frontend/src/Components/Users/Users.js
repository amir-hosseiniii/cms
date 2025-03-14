import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorBox from "../Errorbox/ErrorBox";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsers(response.data);
    } catch (err) {
      setError("خطا در دریافت کاربران");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userID) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userID}`);
      setUsers(users.filter((user) => user.id !== userID));
    } catch (err) {
      console.error("خطا در حذف کاربر:", err);
    }
  };

  const startEditing = (user) => {
    setEditingUser(user.id);
    setFormData({ ...user });
  };

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/users/${editingUser}`, formData);
      fetchUsers();
      setEditingUser(null);
    } catch (err) {
      console.error("خطا در ویرایش کاربر:", err);
    }
  };

  if (loading) return <p>در حال دریافت کاربران...</p>;
  if (error) return <ErrorBox msg={error} />;
  if (users.length === 0) return <ErrorBox msg={"هیچ کاربری موجود نیست"} />;

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">لیست کاربران</h2>
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded-lg mb-4">
          {editingUser === user.id ? (
            <div>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleEditChange}
                className="border p-1 rounded w-full mb-2"
                placeholder="نام"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleEditChange}
                className="border p-1 rounded w-full mb-2"
                placeholder="نام خانوادگی"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleEditChange}
                className="border p-1 rounded w-full mb-2"
                placeholder="ایمیل"
              />
              <button
                onClick={saveEdit}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                ذخیره
              </button>
              <button
                onClick={() => setEditingUser(null)}
                className="bg-gray-500 text-white px-3 py-1 rounded ml-2"
              >
                لغو
              </button>
            </div>
          ) : (
            <div>
              <p>نام: {user.firstname} {user.lastname}</p>
              <p>ایمیل: {user.email}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => startEditing(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  ویرایش
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  حذف
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
