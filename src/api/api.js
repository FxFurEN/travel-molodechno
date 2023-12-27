import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3300"
})

export const todoAPI = {
    getAllLandMark() {
      return instance.get('/loadLandMark');
    },
    addLandmark(formData) {
      return instance.post('/addLandmark', formData);
    },
    addEntertainment(formData) {
      return instance.post('/addEntertainment', formData);
    },
    getAllEntertaiment() {
        return instance.get('/loadEntertaiment');
      },
}