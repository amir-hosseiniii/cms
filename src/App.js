import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";
import Header from "./Components/Header/Header";
import Comments from "./Components/Comments/Comments";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Offs from "./Components/Off/Offs";
import Home from "./Components/Home/Home";

function App() {
  return (

      <div className="flex h-screen">
        {/* سایدبار */}
        <Sidebar />

        {/* محتوای اصلی */}
        <div className="flex flex-col flex-1">
          {/* هدر */}
          <Header />

          {/* محتوای صفحه */}
          <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/offs" element={<Offs />} />
            </Routes>
          </main>
        </div>
      </div>

  );
}

export default App;
