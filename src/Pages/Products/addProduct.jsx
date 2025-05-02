import React, { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Rating } from '@mui/material';


const AddProduct = () => {

    const [productCat, setProductCat] = useState('');
    const [productSubCat, setProductSubCat] = useState('');
    const [productFeatured, setProductFeatured] = useState('');
    const [productRams, setProductRams] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productSize, setProductSize] = useState('');

    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
    };

    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };
    const handleChangeProductFeatured = (event) => {
        setProductFeatured(event.target.value);
    };
    const handleChangeProductRams = (event) => {
        setProductRams(event.target.value);
    };
    const handleChangeProductWeight = (event) => {
        setProductWeight(event.target.value);
    };
    const handleChangeProductSize= (event) => {
        setProductSize(event.target.value);
    };

    return (
        <section className='!p-5'>
            <form className='form'>
                <div className='grid grid-cols-1 !mb-3'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Name</h3>
                        <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>
                </div>

                <div className='grid grid-cols-1 !mb-3'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Description</h3>
                        <textarea type='text' className='w-full h-[140px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>
                </div>
                <div className='grid grid-cols-4 !mb-3 gap-4'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Category</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size="small"
                            className='w-full'
                            value={productCat}
                            label="Category"
                            onChange={handleChangeProductCat}
                        > 
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Spices</MenuItem>
                            <MenuItem value={20}>Cereals</MenuItem>
                            <MenuItem value={30}>Grains</MenuItem>
                        </Select>

                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product sub Category</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size="small"
                            className='w-full'
                            value={productSubCat}
                            label="Category"
                            onChange={handleChangeProductSubCat}
                        > 
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Chili</MenuItem>
                            <MenuItem value={20}>Termeric</MenuItem>
                            <MenuItem value={30}>Coriender</MenuItem>
                        </Select>

                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Price</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Old Price</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Is Featured?</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size="small"
                            className='w-full'
                            value={productFeatured}
                            label="Category"
                            onChange={handleChangeProductFeatured}
                        > 
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>True</MenuItem>
                            <MenuItem value={20}>False</MenuItem>
                            
                        </Select>

                    </div>

                   
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Stock</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Brand</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Discount</h3>
                        <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
                             focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'/>

                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Rams</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size="small"
                            className='w-full'
                            value={productRams}
                            label="Category"
                            onChange={handleChangeProductRams}
                        > 
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>True</MenuItem>
                            <MenuItem value={20}>False</MenuItem>
                            
                        </Select>

                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Weight</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size="small"
                            className='w-full'
                            value={productWeight}
                            label="Category"
                            onChange={handleChangeProductWeight}
                        > 
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>True</MenuItem>
                            <MenuItem value={20}>False</MenuItem>
                            
                        </Select>

                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1'>Product Size</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size="small"
                            className='w-full'
                            value={productSize}
                            label="Category"
                            onChange={handleChangeProductSize}
                        > 
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>True</MenuItem>
                            <MenuItem value={20}>False</MenuItem>
                            
                        </Select>

                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] !mb-1 text-black'>
                            Product Rating
                        </h3>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                    </div>
                    
                </div>

                
            </form>
        </section>
    )
}

export default AddProduct;