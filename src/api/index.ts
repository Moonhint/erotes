import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://erotes.moonhint.com/api/',
    timeout: 1000,
});

export const getUserById = (_id: string) => {
  return instance.get(`erotes-users/index`);
}