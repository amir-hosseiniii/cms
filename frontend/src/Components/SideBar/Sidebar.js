import { Home, Settings, User, ShoppingCart, Tag } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white shadow-lg flex flex-col items-center p-6 h-screen">
      {/* لوگو */}
      <h2 className="text-xl font-bold mb-8">لوگو</h2>

      {/* منو */}
      <nav className="space-y-4 w-full">
        <NavItem icon={<Home size={20} />} text="صفحه اصلی" route="/" />
        <NavItem icon={<User size={20} />} text="محصولات" route="/products" />
        <NavItem icon={<Settings size={20} />} text="کامنت ها" route="/comments" />
        <NavItem icon={<User size={20} />} text="کاربران" route="/users" />
        <NavItem icon={<ShoppingCart size={20} />} text="سفارشات" route="/orders" />
        <NavItem icon={<Tag size={20} />} text="تخفیف ها" route="/offs" />
      </nav>
    </aside>
  );
};

// ✅ کامپوننت آیتم‌های منو
const NavItem = ({ icon, text, route }: { icon: React.ReactNode; text: string; route: string }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `flex items-center gap-3 w-full p-3 rounded-lg cursor-pointer transition ${
          isActive ? "bg-gray-700" : "hover:bg-gray-800"
        }`
      }
    >
      {icon}
      <span className="text-lg">{text}</span>
    </NavLink>
  );
};

export default Sidebar;
