
import React from 'react'

import Checkbox from '@mui/material/Checkbox';
import SearchBox from '../../Components/SearchBox';




const Users = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (

        <>
            <div className='card bg-white shadow-md rouned-md !p-5 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'> Users List </h1>
                
            </div>

            <div className='card !my-4 !pt-5 shadow-md sm:rounded-lg bg-white'>
                <div className='col w-[40%] !ml-auto'>
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
                                    User Image
                                </th>
                                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                    User Name
                                </th>
                                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                    User Email
                                </th>

                                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                    User Phone No.
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

                                <td className='!px-6 !py-3'>
                                    <div className='flex items-center gap-4 '>
                                        <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                        </div>


                                        
                                    </div>
                                </td>

                                <td className='!px-6 !py-2'>
                                    Manohar Solanki
                                </td>
                                <td className='!px-6 !py-2'>
                                    manohar34@gmail.com
                                </td>

                                <td className='!px-6 !py-2'>
                                   +91-8487487423
                                </td>
                                
                                
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='!px-6 !py-2 !pr-2'>
                                    <div className='w-[60px]'>
                                        <Checkbox {...label} />
                                    </div>
                                </td>

                                <td className='!px-6 !py-3'>
                                    <div className='flex items-center gap-4 '>
                                        <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                        </div>


                                        
                                    </div>
                                </td>

                                <td className='!px-6 !py-2'>
                                    Manohar Solanki
                                </td>
                                <td className='!px-6 !py-2'>
                                    manohar34@gmail.com
                                </td>

                                <td className='!px-6 !py-2'>
                                   +91-8487487423
                                </td>
                                
                                
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='!px-6 !py-2 !pr-2'>
                                    <div className='w-[60px]'>
                                        <Checkbox {...label} />
                                    </div>
                                </td>

                                <td className='!px-6 !py-3'>
                                    <div className='flex items-center gap-4 '>
                                        <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                        </div>


                                        
                                    </div>
                                </td>

                                <td className='!px-6 !py-2'>
                                    Manohar Solanki
                                </td>
                                <td className='!px-6 !py-2'>
                                    manohar34@gmail.com
                                </td>

                                <td className='!px-6 !py-2'>
                                   +91-8487487423
                                </td>
                                
                                
                            </tr>
                            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
               even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                <td className='!px-6 !py-2 !pr-2'>
                                    <div className='w-[60px]'>
                                        <Checkbox {...label} />
                                    </div>
                                </td>

                                <td className='!px-6 !py-3'>
                                    <div className='flex items-center gap-4 '>
                                        <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <img src="https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM="
                                                    className='w-full group-hover:scale-105 transition-all' />
                                        </div>


                                        
                                    </div>
                                </td>

                                <td className='!px-6 !py-2'>
                                    Manohar Solanki
                                </td>
                                <td className='!px-6 !py-2'>
                                    manohar34@gmail.com
                                </td>

                                <td className='!px-6 !py-2'>
                                   +91-8487487423
                                </td>
                                
                                
                            </tr>

                           

                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}


export default Users;