import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.toninco.com/api/',
    timeout: 1000,
});

export const getUserById = (id: string) => {
  return instance.get(`/erotes-users/show/${id}`);
}

export const makeRsvp = (payload:any) => {
  return instance.post(`/erotes-rsvps/create`, payload);
};

export const findPrevRsvpByUserId = (userId: any) => {
  return instance.get(`/erotes-rsvps/show-by-user-id/${userId}`);
}
