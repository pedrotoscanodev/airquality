import axios from "axios";


const instance = axios.create({
    baseURl:'http://api.airvisual.com/v2'
});


export default instance;