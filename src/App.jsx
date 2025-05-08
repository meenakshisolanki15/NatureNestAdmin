import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import { createContext, useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';
import toast, { Toaster } from 'react-hot-toast';

import HomeSliderBanners from './Pages/HomeSliderBanners';
import Category from './Pages/Category';
import Users from './Pages/Users';
import Orders from './Pages/Orders';
import Verify from './Pages/Verify';
import ProductDetails from './Pages/Products/productDetails';






const MyContext = createContext();
function App() {

  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const [catData, setCatData] = useState([]);

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState(
    {
      open: false,
      id: ""
    }
  );

  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    }
    if (status === 'error') {
      toast.error(msg);
    }
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <Dashboard />
            </div>
          </div>
        </section>
      </>
      ),
    },

    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signUp",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/verify",
      exact: true,
      element: (
        <>
          <Verify />
        </>
      ),
    },
    {
      path: "/products",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <Products />
            </div>
          </div>
        </section>
      </>
      ),
    },
    {
      path: "/homeSlider/list",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <HomeSliderBanners />
            </div>
          </div>
        </section>
      </>
      ),
    },
    {
      path: "/category/list",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <Category />
            </div>
          </div>
        </section>
      </>
      ),
    },
    {
      path: "/users",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <Users />
            </div>
          </div>
        </section>
      </>
      ),
    },
    {
      path: "/orders",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <Orders />
            </div>
          </div>
        </section>
      </>
      ),
    },
    {
      path: "/product/:id",
      element: (<>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? '!w-[18%]' :
              '!w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight !py-4 !px-5 ${isSidebarOpen === false ? '!w-[100%]' :
              '!w-[82%]'} transition-all`}>
              <ProductDetails />
            </div>
          </div>
        </section>
      </>
      ),
    },



  ]);


  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    openAlertBox,
    catData,
    setCatData,
    
  };


  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
        
        <Toaster/>
      </MyContext.Provider>
    </>
  )
}

export default App;
export { MyContext }
