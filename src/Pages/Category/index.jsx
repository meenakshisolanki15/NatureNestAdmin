import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progress from '../../Components/Progress';
import { RiEditLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import SearchBox from '../../Components/SearchBox';
import { MyContext } from '../../App';



const Category = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const context = useContext(MyContext);




    return (

        <>
            <div className='card bg-white shadow-md rouned-md !p-5 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'> Category List</h1>
                <Button className='btn-blue btn-sm !ml-auto'
                    onClick={() => context.setIsOpenFullScreenPanel({
                        open: true,
                        model: 'Add New Category'
                    })}>
                    <FaPlus className='text-white text-[20px]' />Add New Category
                </Button>
            </div>

            <div className='card !my-4 !pt-5 shadow-md sm:rounded-lg bg-white'>
                <div className='col w-[20%] !ml-auto'>
                    <SearchBox />
                </div>

                <div className="relative overflow-x-auto !mt-8 !pb-5">
                    <table className="w-full text-sm text-left rtl:text-right !text-gray-500 dark:!text-gray-400">
                        <thead className="!text-xs !text-gray-700 !uppercase !bg-gray-50 dark:!bg-gray-700 dark:text-gray-400">
                            <tr className='bg-[#f1f1f1]'>
                                <th scope="col" className="!px-6  !pr-2 !py-3 w-[10%]">
                                    <div className='w-[60px]'>
                                        <Checkbox {...label} />
                                    </div>
                                </th>
                                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                    Image
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

                                <td className='!px-4 !py-4'>
                                    <div className='flex items-center gap-4 w-[200px]'>
                                        <div className='img w-full h-auto rounded-md overflow-hidden group'>
                                            <Link to='/product/4343'>
                                                <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
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

                                <td className='!px-4 !py-4'>
                                    <div className='flex items-center gap-4 w-[200px] '>
                                        <div className='img w-full h-auto rounded-md overflow-hidden group'>
                                            <Link to='/product/4343'>
                                                <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
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

                                <td className='!px-4 !py-4'>
                                    <div className='flex items-center gap-4 w-[200px] '>
                                        <div className='img w-full h-auto rounded-md overflow-hidden group'>
                                            <Link to='/product/4343'>
                                                <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                            </Link>
                                        </div>



                                    </div>
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
            </div>



        </>
    )
}


export default Category;