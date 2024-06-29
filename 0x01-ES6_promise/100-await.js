// Source: 100-await.js
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => ({
      photo: values[0],
      user: values[1],
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}

export default asyncUploadUser;
