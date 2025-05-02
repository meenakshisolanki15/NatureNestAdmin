import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import { createContext, forwardRef, useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';
import toast, { Toaster } from 'react-hot-toast';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoIosClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import AddProduct from './Pages/Products/addProduct';
import HomeSliderBanners from './Pages/HomeSliderBanners';
import AddHomeSlide from './Pages/HomeSliderBanners/addHomeSlide';
import Category from './Pages/Category';
import AddCategory from './Pages/Category/addCategory';
import Users from './Pages/Users';
import Orders from './Pages/Orders';
import Verify from './Pages/Verify';



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const MyContext = createContext();
function App() {

  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState(
    {
      open: false,
      model: ''
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



  ]);


  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    openAlertBox,
  };


  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({
            open: false
          })}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsOpenFullScreenPanel({
                  open: false
                })}
                aria-label="close"
              >
                <IoIosClose className='text-gray-800'/>
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className='text-gray-800'>{isOpenFullScreenPanel?.model}</span>
              </Typography>
             
            </Toolbar>
          </AppBar>
          {
            isOpenFullScreenPanel?.model === "Add Product" && <AddProduct/>
          }
           {
            isOpenFullScreenPanel?.model === "Add Home Slide" && <AddHomeSlide/>
          }
           {
            isOpenFullScreenPanel?.model === "Add New Category" && <AddCategory/>
          }
        </Dialog>
        <Toaster/>
      </MyContext.Provider>
    </>
  )
}

export default App;
export { MyContext }
