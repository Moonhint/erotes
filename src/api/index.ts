import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://erotes.moonhint.com/api/',
    timeout: 1000,
});

instance.get('erotes-users/index')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
