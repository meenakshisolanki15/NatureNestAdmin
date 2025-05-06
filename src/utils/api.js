import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
                'Content-Type': 'application/json',  // Adjust the content type as needed
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            return errorData;
        }

    } catch (error) {
        console.log('Error:', error);

    }
}


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(apiUrl + url, { 
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
                'Content-Type': 'application/json',  // Adjust the content type as needed
                
            })
            return data;
        

    } catch (error) {
        console.log(error);
        return error;
    }
}

export const uploadImage = async (url, updatedData)=>{
    const params={
        headers:{
            'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
           'Content-Type': 'multipart/form-data',  // Adjust the content type as needed
        },
    }
    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res)=>{
        response = res;
    })
    return response;
}

export const uploadImages = async (url, formData)=>{
    const params={
        headers:{
            'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
           'Content-Type': 'multipart/form-data',  // Adjust the content type as needed
        },
    }
    var response;
    await axios.post(apiUrl + url, formData, params).then((res)=>{
        response = res;
    })
    return response;
}



    


export const editData = async (url, updateData)=>{
    const params={
        headers:{
            'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
           'Content-Type': 'application/json',  // Adjust the content type as needed
        },
    }
    var response;
    await axios.put(apiUrl + url, updateData, params).then((res)=>{
        response = res;
    })
    return response;
}
    

export const deleteImage = async (url) => {
   try{
    const token = localStorage.getItem("accesstoken");
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
  
    const response = await axios.delete(apiUrl + url, config);
    return response;
   }
   catch(error){
    console.log(error);
    return error;
   }
  };