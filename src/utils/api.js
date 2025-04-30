import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`, // include our API key in the authorization
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
        const params={
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
               'Content-Type': 'multipart/form-data',  // Adjust the content type as needed
            },
        }
        const { res } = await axios.get(apiUrl + url, params) 
        return res;
        

    } catch (error) {
        console.log(error);
        return error;
    }
}

export const editData = async (url, updateData)=>{
    const params={
        headers:{
            'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
           'Content-Type': 'multipart/form-data',  // Adjust the content type as needed
        },
    }
    var response;
    await axios.put(apiUrl + url, updateData, params).then((res)=>{
        response = res;
    })
    return response;
}
        