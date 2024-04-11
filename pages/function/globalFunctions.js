import axios from 'axios';
//cookies
import Cookies from 'js-cookie';
//crypting
import CryptoJS from 'crypto-js';

export default function def(){
    return true
  }

export function globalAPI() {
  const api = axios.create({
    baseURL: 'http://192.168.0.35:5289/api/',
    //baseURL: 'http://97.74.83.143:2000/api/'
    //baseURL:'https://api.groupnb.com.ph/nbrecruitment/api/'
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const cookie = Cookies.get('uD')??null
    
  if(!cookie){
      return api
  }
  
  const token = JSON.parse(decryptAES(cookie))[0].token

  api.interceptors.request.use(config => {
    if (token) {
    
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

 
  api.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401 || error.response.status === 403) {

        Cookies.remove('uD')
        router.push('/')
    }
    return Promise.reject(error);
  });

  return api;
};

const key = CryptoJS.enc.Utf8.parse('GroupNBEncry2024');
const iv = CryptoJS.enc.Utf8.parse('GroupNBEncry2024');

export function decryptAES(cipherText) {
    const decryptedBytes = CryptoJS.AES.decrypt(cipherText, key, { iv: iv });
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }

  export function encryptAES (plainText) {
    const encrypted = CryptoJS.AES.encrypt(plainText, key, { iv: iv });
    return encrypted.toString();
  };