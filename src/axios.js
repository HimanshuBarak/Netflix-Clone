import axios from "axios";


//whenever we call the .get method the baseURL will be appended in front of the url
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})



export default instance;

