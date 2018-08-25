import request from 'front/utils/JSONRequest';
const APIURL = 'http://localhost:3000/api/';

const handleError = (error) => {
  return Promise.reject(error);
};

export default url => ({
  get: (data) => request.get(APIURL + url, data).catch(handleError),
  create: (data) => request.post(APIURL + url, data).catch(handleError),
  update: (data) => request.put(APIURL + url, data).catch(handleError),
  remove: (data) => request.put(APIURL + url, data).catch(handleError)
});
