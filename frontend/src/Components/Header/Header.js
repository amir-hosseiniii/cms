import { Search, Bell } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminData");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  return (
    <header className="w-full bg-white shadow-md h-16 flex items-center px-6 justify-between">
      <h1 className="text-xl font-bold">داشبورد</h1>

      <div className="flex items-center gap-6 flex-row-reverse">
        <div className="relative">
          <input type="text" placeholder="جستجو..." className="bg-gray-100 text-sm px-4 py-2 pl-10 rounded-lg" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        </div>

        <Bell className="text-gray-600 cursor-pointer hover:text-gray-800 transition" size={24} />

        <div className="flex items-center gap-3 flex-row-reverse cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
          {admin ? (
            <>
              <img src={admin.avatar || "https://i.pravatar.cc/40"} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div className="text-right">
                <p className="text-sm font-semibold">{admin.name || "مدیر"}</p>
                <p className="text-xs text-gray-500">{admin.role || "ادمین"}</p>
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500">ورود نشده</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
