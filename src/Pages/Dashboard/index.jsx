import React, { useState, PureComponent } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import { Button } from '@mui/material';
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import { FaAngleUp } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { Link } from 'react-router-dom';
import Progress from '../../Components/Progress';
import { RiEditLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer }
  from 'recharts';


const Dashboard = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    }
    else {
      setIsOpenOrderedProduct(index);
    }
  };



  const [categoryFilterVal, setcategoryFliterVal] = useState('');
  const [chart1Data] = useState(
    [
      {
        name: 'JAN',
        TotalSales: 4000,
        TotalUsers: 2400,
        amt: 2400,
      },
      {
        name: 'FEB',
        TotalSales: 3000,
        TotalUsers: 1398,
        amt: 2210,
      },
      {
        name: 'MARCH',
        TotalSales: 2000,
        TotalUsers: 9800,
        amt: 2290,
      },
      {
        name: 'APRIL',
        TotalSales: 2780,
        TotalUsers: 3908,
        amt: 2000,
      },
      {
        name: 'MAY',
        TotalSales: 1890,
        TotalUsers: 4800,
        amt: 2181,
      },
      {
        name: 'JUNE',
        TotalSales: 2390,
        TotalUsers: 3800,
        amt: 2500,
      },
      {
        name: 'JULY',
        TotalSales: 3490,
        TotalUsers: 4300,
        amt: 2100,
      },
     
      {
        name: 'AUG',
        TotalSales: 3490,
        TotalUsers: 2200,
        amt: 2100,
      },
      {
        name: 'SEPT',
        TotalSales: 3490,
        TotalUsers: 4900,
        amt: 2100,
      },
      {
        name: 'OCT',
        TotalSales: 3190,
        TotalUsers: 2130,
        amt: 2100,
      },
      {
        name: 'NOV',
        TotalSales: 3420,
        TotalUsers: 700,
        amt: 2100,
      },
      {
        name: 'DEC',
        TotalSales: 4490,
        TotalUsers: 400,
        amt: 2100,
      },
    ]
  );
  
    

  const handleChangeCatFilter = (event) => {
    setcategoryFliterVal(event.target.value);
  };
  return (
    <>
      <div className='w-full !p-6  bg-[#f1faff] border border-[rgba(0,0,0,0.1)] flex items-center gap-8 !mb-5 
    justify-between rounded-md'>
        <div className='info'>
          <h1 className='text-[35px] font-bold leading-10 !mb-3 '> Good Morning,<br />
            Meenakshi
          </h1>
          <p> Here's What happening on your store today. See the statistics at once.</p>
          <br />
          <Button className='btn-blue !capitalize'><FaPlus />Add Product</Button>
        </div>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s"
          className='w-[250px]' />
      </div>
      <DashboardBoxes />

      <div className='card !my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between !px-5 !py-5'>
          <h2 className='text-[20px] font-[700]'>Products </h2>



        </div>

        <div className='flex items-center w-full !pl-5 justify-between !pr-5'>
          <div className='col w-[20%]'>
            <h4 className='font-[600] text-[13px] !mb-2'>Category</h4>
            <Select
              className='w-full'
              size='small'
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryFilterVal}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Pulses</MenuItem>
              <MenuItem value={20}>Millets</MenuItem>
              <MenuItem value={30}>Spices</MenuItem>
            </Select>


          </div>
          <div className='col w-[25%] ml-auto flex items-center gap-3'>
            <Button className='btn !bg-green-600 !text-white '>
              Export</Button>
            <Button className='btn !bg-green-600 !text-white '>
              Add product</Button>
          </div>

        </div>


        <div className="relative overflow-x-auto !mt-5 !pb-5">
          <table className="w-full text-sm text-left rtl:text-right !text-gray-500 dark:!text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="!px-6  !pr-2 !py-3 w-[10%]">
                  <div className='w-[60px]'>
                    <Checkbox {...label} />
                  </div>
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Category
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Sub Category
                </th>

                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap ">
                  Sales
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Action
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                <td className='!px-6 !py-2 !pr-2'>
                  <div className='w-[60px]'>
                    <Checkbox {...label} />
                  </div>
                </td>

                <td className='!px-0 !py-2'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to='/product/4343'>
                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                          className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>


                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#3872fa]'>
                        <Link to='/product/4343'>
                          Wheat Plant Stock Photos, Pictures & Images
                        </Link>
                      </h3>

                      <span className='text-[12px]'> Wheat </span>


                    </div>
                  </div>
                </td>

                <td className='!px-6 !py-2'>
                  Millets
                </td>
                <td className='!px-6 !py-2'>
                  Barnyard Millet
                </td>

                <td className='!px-6 !py-2'>
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3text-gray-500 text-[15px] font-[500]'>
                      ₹500</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>
                      ₹300</span>
                  </div>
                </td>
                <td className='!px-6 !py-2'>
                  <p className='text-[14px]'>
                    <span className='font-[600]'>235</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className='!px-6 !py-2'>
                  <div className='flex items-center gap-1'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegTrashCan className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </div>

                </td>
              </tr>

              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                <td className='!px-6 !py-2 !pr-2'>
                  <div className='w-[60px]'>
                    <Checkbox {...label} />
                  </div>
                </td>

                <td className='!px-0 !py-2'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to='/product/4343'>
                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                          className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>


                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#3872fa]'>
                        <Link to='/product/4343'>
                          Wheat Plant Stock Photos, Pictures & Images
                        </Link>
                      </h3>

                      <span className='text-[12px]'> Wheat </span>


                    </div>
                  </div>
                </td>

                <td className='!px-6 !py-2'>
                  Millets
                </td>
                <td className='!px-6 !py-2'>
                  Barnyard Millet
                </td>

                <td className='!px-6 !py-2'>
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3text-gray-500 text-[15px] font-[500]'>
                      ₹500</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>
                      ₹300</span>
                  </div>
                </td>
                <td className='!px-6 !py-2'>
                  <p className='text-[14px]'>
                    <span className='font-[600]'>235</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className='!px-6 !py-2'>
                  <div className='flex items-center gap-1'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegTrashCan className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </div>

                </td>
              </tr>
              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                <td className='!px-6 !py-2 !pr-2'>
                  <div className='w-[60px]'>
                    <Checkbox {...label} />
                  </div>
                </td>

                <td className='!px-0 !py-2'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to='/product/4343'>
                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                          className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>


                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#3872fa]'>
                        <Link to='/product/4343'>
                          Wheat Plant Stock Photos, Pictures & Images
                        </Link>
                      </h3>

                      <span className='text-[12px]'> Wheat </span>


                    </div>
                  </div>
                </td>

                <td className='!px-6 !py-2'>
                  Millets
                </td>
                <td className='!px-6 !py-2'>
                  Barnyard Millet
                </td>

                <td className='!px-6 !py-2'>
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3text-gray-500 text-[15px] font-[500]'>
                      ₹500</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>
                      ₹300</span>
                  </div>
                </td>
                <td className='!px-6 !py-2'>
                  <p className='text-[14px]'>
                    <span className='font-[600]'>235</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className='!px-6 !py-2'>
                  <div className='flex items-center gap-1'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegTrashCan className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </div>

                </td>
              </tr>

              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                <td className='!px-6 !py-2 !pr-2'>
                  <div className='w-[60px]'>
                    <Checkbox {...label} />
                  </div>
                </td>

                <td className='!px-0 !py-2'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to='/product/4343'>
                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                          className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>


                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#3872fa]'>
                        <Link to='/product/4343'>
                          Wheat Plant Stock Photos, Pictures & Images
                        </Link>
                      </h3>

                      <span className='text-[12px]'> Wheat </span>


                    </div>
                  </div>
                </td>

                <td className='!px-6 !py-2'>
                  Millets
                </td>
                <td className='!px-6 !py-2'>
                  Barnyard Millet
                </td>

                <td className='!px-6 !py-2'>
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3text-gray-500 text-[15px] font-[500]'>
                      ₹500</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>
                      ₹300</span>
                  </div>
                </td>
                <td className='!px-6 !py-2'>
                  <p className='text-[14px]'>
                    <span className='font-[600]'>235</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className='!px-6 !py-2'>
                  <div className='flex items-center gap-1'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegTrashCan className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </div>

                </td>
              </tr>

              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                <td className='!px-6 !py-2 !pr-2'>
                  <div className='w-[60px]'>
                    <Checkbox {...label} />
                  </div>
                </td>

                <td className='!px-0 !py-2'>
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to='/product/4343'>
                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                          className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>


                    <div className='info w-[75%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#3872fa]'>
                        <Link to='/product/4343'>
                          Wheat Plant Stock Photos, Pictures & Images
                        </Link>
                      </h3>

                      <span className='text-[12px]'> Wheat </span>


                    </div>
                  </div>
                </td>

                <td className='!px-6 !py-2'>
                  Millets
                </td>
                <td className='!px-6 !py-2'>
                  Barnyard Millet
                </td>

                <td className='!px-6 !py-2'>
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3text-gray-500 text-[15px] font-[500]'>
                      ₹500</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>
                      ₹300</span>
                  </div>
                </td>
                <td className='!px-6 !py-2'>
                  <p className='text-[14px]'>
                    <span className='font-[600]'>235</span>sale</p>
                  <Progress value={40} type="warning" />
                </td>
                <td className='!px-6 !py-2'>
                  <div className='flex items-center gap-1'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                  !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegTrashCan className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </div>

                </td>
              </tr>


            </tbody>
          </table>
        </div>


        <div className='flex items-center justify-end !pt-4 !pb-5'>
          <Pagination count={10} color="primary" />
        </div>

      </div>



      <div className='card !my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between !px-5 !py-5'>
          <h2 className='text-[20px] font-[700]'>Recent Orders</h2>
        </div>


        <div className="relative overflow-x-auto !mt-5 !pb-5">
          <table className="w-full text-sm text-left rtl:text-right !text-gray-500 dark:!text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="!px-6 !py-3">

                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap ">
                  Pincode
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-700">
                <td className="!px-6 !py-4 font-[500]">
                  <Button className='!w-[40px] !h-[40px] !min-w-[40px]
                                                    !rounded-full !bg-[#f1f1f1] '
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ?
                      <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                      : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />}
                  </Button>
                </td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='text-[#3872fa]'>88489248320948329</span>
                </td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='text-[#3872fa]'>94849f24933993uu</span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">Manohar Singh</td>
                <td className="!px-6 !py-4 font-[500]">8766777766</td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='block w-[200px]'>H No. 33 street No 8 Village Siriyon,
                    Thano Dehradun Uttarakhand ph. +1008434332
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500]">248143</td>
                <td className="!px-6 !py-4 font-[500]">2300</td>
                <td className="!px-6 !py-4 font-[500]">manohar22@gmail.com</td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='text-[#3872fa]'>7d6fsdf655sdfddd333</span>
                </td>
                <td className="!px-6 !py-4 font-[500]"><Badge status='delivered' /></td>
                <td className="!px-6 !py-4 font-[500] whitespace nowrap">Apr 18,2025</td>

              </tr>

              {
                isOpenOrderedProduct === 0 && (



                  <tr>
                    <td className=' !pl-20' colSpan='6'>
                      <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-800">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Product Id
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Product Title
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Image
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Quantity
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Price
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap ">
                                Sub Total
                              </th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-700">

                              <td className="!px-6 !py-4 font-[500]">
                                <span className='text-[#3872fa]'>88489248320948329</span>
                              </td>
                              <td className="!px-6 !py-4 font-[500]">
                                Organic Millets
                              </td>
                              <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/LN/IH/PQ/88294987/millets3-jpg-500x500.jpg"
                                  className='w-[80px] h-[80px] rounded-md object-cover' />
                              </td>
                              <td className="!px-6 !py-4 font-[500]">2</td>
                              <td className="!px-6 !py-4 font-[500]">
                                1300
                              </td>
                              <td className="!px-6 !py-4 font-[500]">1300</td>


                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-700">
                <td className="!px-6 !py-4 font-[500]">
                  <Button className='!w-[40px] !h-[40px] !min-w-[40px]
                                                    !rounded-full !bg-[#f1f1f1] '
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 0 ?
                      <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                      : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />}
                  </Button>
                </td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='text-[#3872fa]'>88489248320948329</span>
                </td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='text-[#3872fa]'>94849f24933993uu</span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">Manohar Singh</td>
                <td className="!px-6 !py-4 font-[500]">8766777766</td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='block w-[200px]'>H No. 33 street No 8 Village Siriyon,
                    Thano Dehradun Uttarakhand ph. +1008434332
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500]">248143</td>
                <td className="!px-6 !py-4 font-[500]">2300</td>
                <td className="!px-6 !py-4 font-[500]">manohar22@gmail.com</td>
                <td className="!px-6 !py-4 font-[500]">
                  <span className='text-[#3872fa]'>7d6fsdf655sdfddd333</span>
                </td>
                <td className="!px-6 !py-4 font-[500]"><Badge status='delivered' /></td>
                <td className="!px-6 !py-4 font-[500] whitespace nowrap">Apr 18,2025</td>

              </tr>

              {
                isOpenOrderedProduct === 1 && (



                  <tr>
                    <td className=' !pl-20' colSpan='6'>
                      <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Product Id
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Product Title
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Image
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Quantity
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                Price
                              </th>
                              <th scope="col" className="!px-6 !py-3 whitespace-nowrap ">
                                Sub Total
                              </th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-700">

                              <td className="!px-6 !py-4 font-[500]">
                                <span className='text-[#3872fa]'>88489248320948329</span>
                              </td>
                              <td className="!px-6 !py-4 font-[500]">
                                Organic Millets
                              </td>
                              <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/LN/IH/PQ/88294987/millets3-jpg-500x500.jpg"
                                  className='w-[80px] h-[80px] rounded-md object-cover' />
                              </td>
                              <td className="!px-6 !py-4 font-[500]">2</td>
                              <td className="!px-6 !py-4 font-[500]">
                                1300
                              </td>
                              <td className="!px-6 !py-4 font-[500]">1300</td>


                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>


      </div>


      <div className='card !my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-center !px-5 !py-5'>
          <h2 className='text-[18px] font-[600] ' > 
            Total Users and Total Sales
          </h2>
          
        </div>
        <div className='flex items-center gap-5 !px-5 !py-5 !pt-1'>
          <span className='flex items-center gap-1 font-[15px]'>
            <span className='block w-[10px] h-[10px] rounded-full bg-green-600'></span>
          Total Users
          </span>

          <span className='flex items-center gap-1 font-[15px]'>
            <span className='block w-[10px] h-[10px] rounded-full bg-[#0a4adf]'></span>
          Total Sales
          </span>
          
        </div>
        <LineChart
          width={1000}
          height={500}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='none' />
          <XAxis dataKey="name" tick={{fontSize: 12}} />
          <YAxis tick={{fontSize: 12}}/>
          <Tooltip />
          <Legend />
          <Line 
          type="monotone" 
          dataKey="TotalSales" 
          stroke="#8884d8" 
          strokeWidth={3}
          activeDot={{ r: 8 }} 
          />
          <Line 
          type="monotone" 
          dataKey="TotalUsers" 
          stroke="#82ca9d" 
          strokeWidth={3}
          />
        </LineChart>
      </div>

    </>
  );
};

export default Dashboard;