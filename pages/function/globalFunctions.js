import axios from 'axios'

	export const globalAPI = () => {
	return axios.create({
     baseURL: 'http://192.168.0.35:5289/api/'
    //baseURL: 'http://97.74.83.143:2000/api/'
    //baseURL:'https://api.groupnb.com.ph/nbrecruitment/api/'
});
} 