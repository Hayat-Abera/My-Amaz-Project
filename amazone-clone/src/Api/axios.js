import axios from 'axios';

const axiosInstance = axios.create({
    //local instance of firebase functions
    // baseURL:"http://127.0.0.1:5001/e-clone-f2813/us-central1/api",

    //deployed version of amazon server render.com
    baseURL:" https://amazon-api-deploy-cda1.onrender.com",
});


export {axiosInstance} 