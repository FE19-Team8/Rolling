import api from './api';

export const getProfileImages = () => api.get('/profile-images/');

export const getBackgroundImages = () => api.get('/background-images/');
