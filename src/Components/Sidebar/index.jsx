import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';


const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    }
    else {
      setSubmenuIndex(index);
    }

  };

  const context = useContext(MyContext);
  return (

    
    <>
      <div className={`sidebar fixed top-0 left-0 bg-[#f1f1f1] w-[18%] h-full border-r 
    border-[rgba(0,0,0,0.1)] !py-2 !px-4 w-[${context.isSidebarOpen===true?'!w-[18%]' : 
      '!w-[0px] opacity-0'}]`}>

        <div className='!py-2 w-full'>
          <Link to='/'>
            <img src="logo.jpg"
              className='w-[120px] ' />
          </Link>
        </div>

        <ul className='!mt-4'>
          <li>
            <Link to="/">
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
          !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <RxDashboard className='text-[20px] ' />
                <span>Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>

            {/* <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
          !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'
              onClick={() => isOpenSubMenu(1)}>
              <FaRegImage className='text-[20px] ' />
              <span>Home Sliders</span>
              <span className='ml-auto block w-[30px] h-[30px] 
            flex items-center'
              >
                <FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} />
              </span>
            </Button> */}


            <Collapse isOpened={submenuIndex === 1 ? true : false}>

              <ul className='w-full'>
                <li className='w-full'>

                  <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start
               !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Home Banners List
                  </Button>
                </li>
                <li className='w-full'>
                  <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start
               !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add Home Banner Slide
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to="/users">
              <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
          !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
                <FiUsers className='text-[20px] ' />
                <span>Users</span>
              </Button>
            </Link>
          </li>
          <li>

            <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
             !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'
              onClick={() => isOpenSubMenu(2)}>
              <RiProductHuntLine className='text-[20px] ' />
              <span>Products</span>
              <span className='ml-auto block w-[30px] h-[30px] 
            flex items-center'
              >
                <FaAngleDown className={`transition-all ${submenuIndex === 2 ? 'rotate-180' : ''}`} />
              </span>
            </Button>


            <Collapse isOpened={submenuIndex === 2 ? true : false}>

              <ul className='w-full'>
                <li className='w-full'>
                  <Link to="/products">
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start
               !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'>
                      <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                      Product List
                    </Button>
                  </Link>
                </li>
                
                 
              </ul>
            </Collapse>
          </li>
          <li>
            <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
          !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'
              onClick={() => isOpenSubMenu(3)}>
              <BiCategory className='text-[20px] ' />
              <span>Category</span>
              <span className='ml-auto block w-[30px] h-[30px] 
            flex items-center'
              >
                <FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} />
              </span>
            </Button>


            <Collapse isOpened={submenuIndex === 3 ? true : false}>

              <ul className='w-full'>
                <li className='w-full'>
                  <Link to="/category/list">
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start
               !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'>
                      <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Category List
                    </Button>
                  </Link>
                </li>
                <li className='w-full'>
                  
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start
               !w-full !text-[13px] !font-[500] !pl-9 flex gap-3' 
                                   onClick={() => context.setIsOpenFullScreenPanel({
                                       open: true,
                                       model: 'Add New Category'
                                   })}>
                      <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Category
                    </Button>
                  
                </li>
               
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to="/orders">
            <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
          !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
              <IoBagCheckOutline className='text-[20px] ' />
              <span>Orders</span>
            </Button>
            </Link>
          </li>
          <li>
            <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] 
          !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
              <IoMdLogOut className='text-[20px] ' />
              <span>Logout</span>
            </Button>
          </li>
        </ul>

      </div>
    </>
  )
}

export default Sidebar
