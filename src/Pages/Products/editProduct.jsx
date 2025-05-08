import React, { useContext, useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, Rating } from '@mui/material';
import { MyContext } from '../../App';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from '../../Components/UploadBox';
import CircularProgress from '@mui/material/CircularProgress';
import { editData, fetchDataFromApi } from '../../utils/api';
import { useNavigate } from 'react-router-dom';


const EditProduct = () => {

    const context = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(false);
    const [previews, setPreviews] = useState([]);
    const history = useNavigate();


    const [formFields, setFormFields] = useState({
        name: "",
        description: "",
        images: [],
        price: "",
        oldPrice: "",
        //category:"",
        catName: "",
        catId: "",
        rating: "",
        discount: "",

    })

    const [productCat, setProductCat] = useState('');

    useEffect(()=>{
        fetchDataFromApi(`/api/product/${context?.isOpenFullScreenPanel?.id}`).then((res)=>{
            console.log(res?.product)
            setFormFields({
                name: res?.product?.name,
                discription: res?.product?.description,
                images: res?.product?.images,
                price: res?.product?.price,
                oldPrice: res?.product?.oldPrice,
                catName: res?.product?.catName,
                catId: res?.product?.catId,
                discount: res?.product?.discount,
                rating: res?.product?.rating,


            })
            //setProductCat(res?.product?.catId);
            // setFormFields(prev => ({
            //     ...prev,
            //     name: res?.category?.name,
            //     discription: res?.product?.description,
            //     price: res?.product?.price,
            //     oldPrice: res?.product?.oldPrice,
            //     catName: res?.product?.catName,
            //     catId: res?.product?.catId,
            //     discount: res?.product?.discount,
            //     rating: res?.product?.rating,
            // }));
            // // formFields.name=res?.category?.name
            // setPreviews(res?.category?.images)

            
        })
    }, []);

    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
        formFields.catId = event.target.value
        //formFields.category = event.target.value
    }

    const selectCatByName = (name) => {
        formFields.catName = name


    }
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    const onChangeRating = (e) => {
        setFormFields(() => (
            {
                ...formFields,
                rating: e.target.value
            }

        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault(0);
        setIsLoading(true);
        if(formFields.name === ""){
            context.openAlertBox("error", "Please enter product name");
            setIsLoading(false);
            return false;
        }
        if(formFields.description === ""){
            context.openAlertBox("error", "Please enter product description");
            setIsLoading(false);
            return false;
        }
        // if(formFields.catId === ""){
        //     context.openAlertBox("error", "Please select product category");
        //     setIsLoading(false);
        //     return false;
        // }
        if(formFields.price === ""){
            context.openAlertBox("error", "Please enter product Price");
            setIsLoading(false);
            return false;
        }
        if(formFields.oldPrice === ""){
            context.openAlertBox("error", "Please enter product Old Price");
            setIsLoading(false);
            return false;
        }
        if(formFields.discount === ""){
            context.openAlertBox("error", "Please enter product discount");
            setIsLoading(false);
            return false;
            
        }
        if(formFields.rating === ""){
            context.openAlertBox("error", "Please select rating");
            setIsLoading(false);
            return false;
            
        }
       
        if(previews?.length === 0){
            context.openAlertBox("error", "Please upload product image");
            setIsLoading(false);
            return false;
        }
        editData(`/api/product/updateProduct/${context?.isOpenFullScreenPanel?.id}`, formFields).then((res) => {
            console.log(res)
            if (res?.data.error === false) {
                context.openAlertBox("success", res?.data?.message);
                setTimeout(() => {
                    setIsLoading(false);
                    context.setIsOpenFullScreenPanel({
                        open: false,
                    })
                    history("/products");
                }, 1000);
            }else{
                context.openAlertBox("error", res?.data?.message);
                setIsLoading(false); 
            }
        })

    }
    return (
        <section className='!p-5'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 !mb-3'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Name</h3>
                        <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'
                            name="name"
                            value={formFields.name}
                            onChange={onChangeInput} />

                    </div>
                </div>

                <div className='grid grid-cols-1 !mb-3'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Description</h3>
                        <textarea type='text' className='w-full h-[140px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'
                            name="description"
                            value={formFields.description}
                            onChange={onChangeInput} />

                    </div>
                </div>
                <div className='grid grid-cols-4 !mb-3 gap-4'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Category</h3>

                        {
                            context?.catData?.length !== 0 &&
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                size="small"
                                className='w-full'
                                value={productCat}
                                label="Category"
                                onChange={handleChangeProductCat}
                            >
                                {
                                    context?.catData?.map((cat,index) => {
                                        return (
                                            <MenuItem value={cat?._id} key={index}
                                                onClick={() => selectCatByName(cat?.name)}>
                                                {cat?.name}
                                            </MenuItem>
                                        )
                                    })
                                }


                            </Select>

                        }
                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1 text-black'>Product Price</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'
                            name="price"
                            value={formFields.price}
                            onChange={onChangeInput} />

                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Old Price</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'
                            name="oldPrice"
                            value={formFields.oldPrice}
                            onChange={onChangeInput} />

                    </div>


                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Discount</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'
                            name="discount"
                            value={formFields.discount}
                            onChange={onChangeInput} />

                    </div>

                    <div className='col !w-full'>
                        <h3 className='text-[14px] font-[500] !mb-1 text-black'>
                            Product Rating
                        </h3>
                        <Rating name="rating" value={formFields.rating} 
                            onChange={onChangeRating} />
                    </div>

                  



                </div>
                <div className='col w-full !p-5 !px-0'>
                        <h3 className='font-[700] text-[18px] !mb-3'>Media & Images </h3>
                        <div className='grid grid-cols-7 gap-4'>

                            {
                                previews?.length !== 0 && previews?.map((image, index) => {
                                    return (
                                        <div className='uploadBoxWrapper relative h-[150px] w-[150px]' key={index}>

                                            <div className='uploadBox !p-0 rounded-md overflow-hidden border border-dashed
                                                border-[rgba(0,0,0,0.3)] h-[150px] w-full  bg-gray-100 cursor-pointer hover:bg-gray-200 
                                                hover:bg-gray-200 flex items-center justify-center flex-col relative'>

                                                <img src={image} className="w-full h-full object-cover rounded-md" alt="preview"  />

                                            </div>


                                        </div>
                                    )
                                })

                            }


                            <UploadBox multiple={true} name="images" url="/api/product/uploadImages"
                                setPreviews={setPreviews} />
                            {/* <UploadBox
                                multiple={true}
                                name="images"
                                url="/api/product/uploadImages"
                                setPreviews={setPreviews}
                                onUploadSuccess={(uploadedUrls) => {
                                    setFormFields((prev) => ({
                                        ...prev,
                                        images: uploadedUrls, // Save image URLs to be sent in the API call
                                    }));
                                }}
                            /> */}

                        </div>
                    </div>


                <hr />
                <br />
                <Button type='submit' className="btn-blue btn-lg w-full flex gap-2">
                    {
                        isLoading === true ? <CircularProgress color='inherit' />
                            :
                            <>
                                <FaCloudUploadAlt className='text-[25px] text-white' />Publish and View
                            </>
                    }



                </Button>


            </form>
        </section>
    )
}

export default EditProduct;