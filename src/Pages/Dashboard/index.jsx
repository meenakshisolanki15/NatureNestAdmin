import React, { useState } from 'react'
import DashboardBoxes from '../../Components/DashboardBaxes'
import { Button } from '@mui/material';
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import { FaAngleUp } from "react-icons/fa6";
import Badge from '../../Components/Badge';

const Dashboard = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    }
    else {
      setIsOpenOrderedProduct(index);
    }
  };
  return (
    <>
      <div className='w-full !p-6  bg-white border border-[rgba(0,0,0,0.1)] flex items-center gap-8 !mb-5 
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
          <h2 className='text-[20px] font-[700]'>Recent Orders</h2>
        </div>


        <div className="relative overflow-x-auto !mt-5 !pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
    </>
  )
}

export default Dashboard;