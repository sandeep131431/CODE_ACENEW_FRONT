import axios from "axios"

const axiosClient2 =  axios.create({
    baseURL: 'https://code-acenew-back-2.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient2;

