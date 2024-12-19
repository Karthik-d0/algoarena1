import axios from './axios'; // Import the configured Axios instance

export const createRoom = () => {
  return axios.post('/api/rooms'); // Call the backend to create a room
};

export const joinRoom = (roomId) => {
  return axios.get(`/api/rooms/${roomId}`); // Call the backend to check if the room exists
};
