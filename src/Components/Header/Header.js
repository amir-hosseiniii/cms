import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md h-16 flex items-center px-6 justify-between">
      {/* عنوان داشبورد */}
      <h1 className="text-xl font-bold">داشبورد</h1>

      {/* جستجو و آیکون اعلان */}
      <div className="flex items-center gap-6 flex-row-reverse">
        {/* فیلد جستجو */}
        <div className="relative">
          <input
            type="text"
            placeholder="جستجو..."
            className="bg-gray-100 text-sm px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        </div>

        {/* آیکون اعلان */}
        <Bell className="text-gray-600 cursor-pointer hover:text-gray-800 transition" size={24} />

        {/* پروفایل کاربر */}
        <div className="flex items-center gap-3 flex-row-reverse cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
          <img 
            src="https://i.pravatar.cc/40" 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full"
          />
          <div className="text-right">
            <p className="text-sm font-semibold">علی رضایی</p>
            <p className="text-xs text-gray-500">مدیر محصول</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
