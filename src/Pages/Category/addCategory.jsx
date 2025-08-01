import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from '../../Components/UploadBox';
import { postData } from '../../utils/api';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';



const AddCategory = () => {

  const context = useContext(MyContext);

  const history = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    images: []
  })

  const [previews, setPreviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value
      }
    })
  }


  // const setPreviewsFun=(previewsArr)=>{
  //   setPreviews(previewsArr);
  //   setFormFields(()=>(
  //     {
  //       ...previews,
  //     images : previewsArr
  //     }
  //   )

  // )}
  // const removeImg = (image, index) => {
  //   var imageArr = [];
  //   imageArr = previews;
  //   deleteImage(`/api/category/deleteImage?img=${image}`).then((res) => {
  //     imageArr.splice(index, 1);
  //     setPreviews([]);
  //     setTimeout(() => {
  //       setFormFields(() => (
  //         {
  //           ...previews,
  //           images: imageArr
  //         }
  //       ))
  //     }, 100);
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter Category name:");
      setIsLoading(false)
      return false
    }
    if (previews.length === 0) {
      context.openAlertBox("error", "Please select category image");
      setIsLoading(false)
      return false
    }
    postData("/api/category/create", formFields).then((res) => {
      //console.log(res)

      setTimeout(() => {
        setIsLoading(false)
        context.setIsOpenFullScreenPanel({
          open: false,
        })
        context?.getCat();
        history("/category/list")
      }, 2500);
    })
  }

  return (
    <section className='!p-5 bg-gray-50'>
      <form className='form !py-3 !p-8' onSubmit={handleSubmit}>
        <div className='scroll max-h-[72vh] overflow-y-scroll !pr-4 !pt-4'>


          <div className='grid grid-cols-1 !mb-3'>
            <div className='col w-[25%]'>
              <h3 className='text-[14px] font-[500] !mb-1 text-black'>Category Name</h3>
              <input
                type='text'
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
           focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm !p-3 text-sm'
                name="name"
                value={formFields.name}  
                onChange={onChangeInput}
              />


            </div>
          </div>
          <br />

          <h3 className='text-[18px] font-[500] !mb-1 text-black'>Category Image</h3>

          <div className='grid grid-cols-7 gap-4'>

            {
              previews?.length !== 0 && previews?.map((image, index) => {
                return (
                  <div className='uploadBoxWrapper relative' key={index}>
                    {/* <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden 
                    bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'
                    >
                      <IoIosClose className='text-white text-[17px]' />
                    </span> */}


                    <div className='uploadBox !p-0 rounded-md overflow-hidden border border-dashed
                      border-[rgba(0,0,0,0.3)] h-[15px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 
                      hover:bg-gray-200 flex items-center justify-center flex-col relative'>

                      {/* <LazyLoadImage
                        className='w-full h-full object-cover'
                        alt={"image"}
                        effect='blur'
                        wrapperProps={{
                          style: { transitionDelay: "1s" },
                        }}
                        src={image}
                      /> */}

                      <img src={image} className="w-full h-full object-cover rounded-md" alt="preview" />




                    </div>


                  </div>
                )
              })

            }


            <UploadBox multiple={true} name="images" url="/api/category/uploadImages"
              setPreviews={setPreviews} />
          </div>
        </div>


        <br />
        <br />
        <div className='w-[250px]'>
          <Button type='submit' className="btn-blue btn-lg w-full flex gap-2">
            {
              isLoading === true ? <CircularProgress color='inherit' />
                :
                <>
                  <FaCloudUploadAlt className='text-[25px] text-white' />Publish and View
                </>
            }


          </Button>
        </div>
      </form>
    </section>
  )
}

export default AddCategory;