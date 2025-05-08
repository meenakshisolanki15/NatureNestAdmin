import React, { useEffect, useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';



const ProductDetails = () => {

  const [setSlideIndex] = useState(0);
  const [product, setProduct] = useState();
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const { id } = useParams();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }

  useEffect(() => {
    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      if (res?.error === false) {
        setProduct(res?.product);
      }
    })
  }, []);




  return (
    <section className='bg-[#f1f1f1]'>
      <div className='flex items-center justify-between !px-3 !py-0 !mt-3'>
        <h2 className='text-[18px] font-[600]'>
          Product Details
        </h2>
      </div>
      <br />


      <div className='productDetails flex gap-5 bg-[#f1f1f1]'>
        <div className='w-[40%]'>
          {
            product?.images?.length !== 0 &&
            <div className='flex gap-3'>
              <div className='slider w-[15%]'>
                <Swiper
                  ref={zoomSliderSml}
                  direction='vertical'
                  slidesPerView={5}
                  spaceBetween={10}
                  navigation={true}
                  modules={[Navigation]}
                  className={`zoomProductSliderThumbs h-[450px] !overflow-hidden 
                    ${product?.images?.length > 5 && 'space'}`}
                >
                  {
                    product?.images?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className={`item rounded-md overflow-hidden cursor-pointer group $
                                {slideIndex===0 ? 'opacity-1' :  'opacity-30'}`}
                            onClick={() => goto(index)}>
                            <img src={item}
                              className='w-full transition-all group-hover:scale-105' />
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }


                </Swiper>
              </div>
              <div className='zoomContainer w-[85%] h-[400px] !overflow-hidden'>
                <Swiper
                  ref={zoomSliderBig}
                  slidesPerView={1}
                  spaceBetween={0}
                  navigation={false}

                >

                  {
                    product?.images?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <InnerImageZoom
                            zoomType='hover'
                            zoomScale={1}
                            src={item} />
                        </SwiperSlide>

                      )
                    })
                  }


                </Swiper>

              </div>
            </div>
          }

        </div>

        <div className='w-[60%]'>
          <h1 className='text-[28px] font-[500] !mb-4 !px-4'>
            {product?.name}
          </h1>
          <hr className='!mb-4' />

          <div className='flex items-center !py-2 !px-4'>
            <span className='w-[20%] font-[600] text-[18px] flex items-center gap-2'> Category: </span>
            <span className='text-[18px]'>{product?.catName}</span>
          </div>

          <div className='flex items-center !py-2 !px-4'>
            <span className='w-[20%] font-[600] text-[18px]  flex items-center gap-2'> Price: </span>
            <span className='text-[18px]'>{product?.price}</span>
          </div>
          <div className='flex items-center !py-2 !px-4'>
            <span className='w-[20%] font-[600] text-[18px]  flex items-center gap-2'> Old Price: </span>
            <span className='text-[18px]'>{product?.oldPrice}</span>
          </div>
          <div className='flex items-center !py-2 !px-4'>
            <span className='w-[20%] font-[600] text-[18px]  flex items-center gap-2'> Discount: </span>
            <span className='text-[18px]'>{product?.discount}</span>
          </div>
          <div className='flex items-center !py-2 !px-4'>
            <span className='w-[20%] font-[600] text-[18px]  flex items-center gap-2'> Rating: </span>
            <span className='text-[18px]'>{product?.rating}</span>
          </div>

          <br />
          <h2 className='text-[25px] font-[500] !mb-3'>
            Product Description
          </h2>
          {
            product?.description && <p className='text-[14px] w-[75%] '> {product?.description}</p>
          }
        </div>


      </div>

      <br />

      </section>
  )
}

export default ProductDetails 
