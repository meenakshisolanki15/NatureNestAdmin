import { Button } from '@mui/material';
import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AddCategory = () => {
  return (
    <section className='!p-5 bg-gray-50'>
      <form className='form !py-3 !p-8'>
        <div className='scroll max-h-[72vh] overflow-y-scroll !pr-4 !pt-4'>


          <div className='grid grid-cols-1 !mb-3'>
            <div className='col w-[25%]'>
              <h3 className='text-[14px] font-[500] !mb-1'>Category Name</h3>
              <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

            </div>
          </div>
          <br />

          <h3 className='text-[14px] font-[500] !mb-1'>Category Name</h3>

          <div className='grid grid-cols-7 gap-4'>
            <div className='uplaodBoxWrapper relative'>
              <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden 
              bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'>
                <IoIosClose className='text-white text-[17px]' /></span>
              <div className='uploadBox !p-0 rounded-md overflow-hidden border border-dashed
                border-[rgba(0,0,0,0.3)] h-[15px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 
                hover:bg-gray-200 flex items-center justify-center flex-col relative'>

                <LazyLoadImage
                  className='w-full h-full object-cover'
                  />

              </div>

            </div>
          </div>
        </div>

        <br />
        <div className='w-[250px]'>
          <Button type='button' className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className='text-[25px] text-white' />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  )
}

export default AddCategory;
