import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { AiOutlineGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";
import { TbBrandProducthunt } from "react-icons/tb";

const DashboardBoxes = () => {

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="dashboardBoxesSlider"
            >

                <SwiperSlide>
                    <div className='box !p-5 bg-[#3872fa] curdor-pointer  rounded-md border border-[rgba(0,0,0,0.1)] flex
                    items-center gap-4'>
                        <AiOutlineGift className='text-[30px] text-white'/>
                       <div className='info w-[70%] '>
                        <h3 className='text-white'>New Orders</h3>
                        <b className='text-white'>1,390</b>
                        </div> 
                        <IoStatsChartSharp className='text-[40px] text-white'/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='box !p-5 bg-[#10b981] curdor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex
                    items-center gap-4'>
                        <AiTwotonePieChart className='text-[30px] text-white'/>
                       <div className='info w-[70%] '>
                        <h3 className='text-white'>Sales</h3>
                        <b className='text-white'>1,390</b>
                        </div> 
                        <IoStatsChartSharp className='text-[40px] text-white'/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='box !p-5 bg-[#7928ca] curdor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex
                    items-center gap-4'>
                        <RiBankFill className='text-[30px] text-white'/>
                       <div className='info w-[70%] '>
                        <h3 className='text-white'>Revenue</h3>
                        <b className='text-white'>1,390</b>
                        </div> 
                        <IoStatsChartSharp className='text-[40px] text-white'/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='box !p-5  bg-[#312be1d8] curdor-pointer  rounded-md border border-[rgba(0,0,0,0.1)] flex
                    items-center gap-4'>
                        <TbBrandProducthunt className='text-[30px] text-white'/>
                       <div className='info w-[70%] '>
                        <h3 className='text-white'>Total Products</h3>
                        <b className='text-white'>1,390</b>
                        </div> 
                        <IoStatsChartSharp className='text-[40px] text-white'/>
                    </div>

                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default DashboardBoxes;
