import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";

function App() {

  const router = useRoutes(routes)

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
            {router}
          </main>
        </div>
      </div>

  );
}

export default App;
