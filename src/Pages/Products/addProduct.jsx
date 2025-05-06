import React, { useContext, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, Rating } from '@mui/material';
import { MyContext } from '../../App';
import { FaCloudUploadAlt } from "react-icons/fa";



const AddProduct = () => {

    const context = useContext(MyContext);
    // const [isLoading, setIsLoading] = useState(false);

    const [formFields, setFormFields] = useState({
        name: "",
        description: "",
        images: [],
        price: "",
        oldPrice: "",
        catName: "",
        catId: "",
        rating: "",
        discount: "",

    })

    const [productCat, setProductCat] = useState('');


    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
        formFields.catId = event.target.value
    }

    const selectCatByName=(name) => {
        alert(name)
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
        console.log(formFields);

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
                                    context?.catData?.map((cat) => {
                                        return (
                                            <MenuItem value={cat?._id}
                                                onClick={()=>selectCatByName(cat?.name)}>
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
                        <Rating name="half-rating" defaultValue={1} precision={0.5}
                            onChange={onChangeRating} />
                    </div>



                </div>

                <hr />
                <br />
                <Button type='submit' className="btn-blue btn-lg w-full flex gap-2">
                    {/* {
                        isLoading === true ? <CircularProgress color='inherit' />
                            :
                            <>
                                
                            </>
                    } */}
                    <FaCloudUploadAlt className='text-[25px] text-white' />Publish and View


                </Button>


            </form>
        </section>
    )
}

export default AddProduct;