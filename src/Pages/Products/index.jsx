import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import SearchBox from '../../Components/SearchBox';
import { MyContext } from '../../App';
import { fetchDataFromApi } from '../../utils/api';
import "react-lazy-load-image-component/src/effects/blur.css";



const Products = () => {
    
   // const [productData, setProductData] = useState([]);
    const context = useContext(MyContext);

    // useEffect(() => {
    //     getProducts();
    // }, [context?.isOpenFullScreenPanel])

    // const getProducts = async () => {
    //     fetchDataFromApi("/api/product/getAllProducts").then((res) => {
    //         console.log(res);
    //         if (res?.error === false) {
    //             setProductData(res?.data)
    //         }
    //     })
    // }


    useEffect(() => {
            fetchDataFromApi("/api/product/getAllProducts").then((res) => {
                //console.log(res?.data);
                context.setProductData(res?.data);
            })
        },[]);
    

    return (

        <>
            <div className='card bg-white shadow-md rouned-md !p-5 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'> Products </h1>
                <Button className='btn-blue btn-sm !ml-auto'
                    onClick={() => context.setIsOpenFullScreenPanel({
                        open: true,
                        model: 'Add Product'
                    })}>
                    <FaPlus className='text-white text-[20px]' />Add Product
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
                               
                                <th width={100} scope="col" className="!px-6 !py-3 whitespace-nowrap text-[14px]">
                                    Product
                                </th>
                               


                                <th width={100} scope="col" className="!px-6 !py-3 whitespace-nowrap text-[14px]">
                                    Price
                                </th>

                                <th width={100} scope="col" className="!px-6 !py-3 whitespace-nowrap text-[14px]">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                context?.productData?.length !== 0 && context?.productData?.map((product, index) => {
                                    return (
                                        <tr key={index}
                                            className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50
                                        even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                            

                                            <td width={100} className='!px-0 !py-2'>
                                                <div className='flex items-center gap-4 w-[300px]'>
                                                    <div className='img w-full h-full rounded-md overflow-hidden group'>
                                                       
                                                    <img src={product.images[0]}/>
                                                       
                                                    </div>


                                                    <div className='info w-[75%]'>
                                                        <h3 className='font-[600] text-[16px] leading-4 hover:text-[#3872fa]'>
                                                        {product?.name}
                                                        </h3>




                                                    </div>
                                                </div>
                                            </td>

                                           

                                            <td width={100} className='!px-6 !py-2'>
                                                <div className='flex  gap-1 flex-col'>
                                                    <span className='oldPrice line-through leading-3text-gray-500 text-[15px] font-[500]'>
                                                        &#x20b9;{product?.price}</span>
                                                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>
                                                        &#x20b9;{product?.oldPrice}</span>
                                                </div>
                                            </td>

                                            <td width={100} className='!px-6 !py-2'>
                                                <div className='flex items-center gap-1'>
                                                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                                           !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'
                                                        onClick={() => context.setIsOpenFullScreenPanel({
                                                            open: true,
                                                            model: 'Edit Product',
                                                            id: product?._id
                                                        })}>
                                                        <RiEditLine className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                                    </Button>

                                                    <Link to={`/product/${product?._id}`}>
                                                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1]  
                                                            !border-[rgba(0,0,0,0.1)] !rounded-full hover:!bg-[#ccc]'>
                                                            <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                                        </Button>
                                                    </Link>


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


export default Products;