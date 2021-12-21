import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.toninco.com/api/',
    timeout: 20000,
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

export const getAllComments = () => {
  return instance.get(`/erotes-comments/index`);
}

export const makeAWish = (payload: any) => {
  return instance.post(`/erotes-comments/create`, payload);
}

export const findPrevWishByUserId = (userId: any) => {
  return instance.get(`/erotes-comments/show-by-user-id/${userId}`);
}
