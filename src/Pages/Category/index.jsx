import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { FaPlus } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import SearchBox from '../../Components/SearchBox';
import { MyContext } from '../../App';
import { fetchDataFromApi } from '../../utils/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";



const Category = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const context = useContext(MyContext);

 

    useEffect(() => {
        fetchDataFromApi("/api/category").then((res) => {
            console.log(res?.data);
            context.setCatData(res?.data);
        })
    },[]);



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
                                    Category Name
                                </th>
                                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                    Action
                                </th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                context?.catData?.length !== 0 && context?.catData?.map((item) => {
                                    return (
                                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                                        even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                            <td className='!px-6 !py-2 !pr-2'>
                                                <div className='w-[60px]'>
                                                    <Checkbox {...label} />
                                                </div>
                                            </td>

                                            <td className='!px-4 !py-4' width={100}>
                                                <div className='flex items-center gap-4 w-[100px]'>
                                                    <div className='img w-full h-auto rounded-md overflow-hidden group'>
                                                        <Link to='/product/4343' data-discover="true">
                                                        <LazyLoadImage 
                                                        alt={'image'}
                                                        
                                                        className='w-full'
                                                        src={item.images[0]}
                                                        />
                                                            
                                                        </Link>
                                                    </div>



                                                </div>
                                            </td>
                                            <td width={100} className='text-black text-[16px] '>
                                                {item?.name}
                                            </td>

                                            <td width={100} className='!px-6 !py-2'>
                                                <div className='flex items-center gap-1'>
                                                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                                            !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'
                                            onClick={()=>context.setIsOpenFullScreenPanel({
                                                open: true,
                                                model: 'Edit Category',
                                                id: item?._id
                                            })}>
                                                        <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                                    </Button>

                                                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                                            !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                                                        <FaRegTrashCan className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                                    </Button>
                                                </div>

                                            </td>
                                        </tr>
                                    )
                                })
                            }




                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}


export default Category;