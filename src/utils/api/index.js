const BASE_URL = process.env.REACT_APP_BASE_URL;

export const api = {
  post: async (url, data = {}) => {
    const token = localStorage.getItem('auth-token');
    return await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
  },
  put: async (url, data = {}) => {
    const token = localStorage.getItem('auth-token');
    return await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
  },
  get: async (url) => {
    const token = localStorage.getItem('auth-token');
    return await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },

  delete: async (url) => {
    const token = localStorage.getItem('auth-token');
    return await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
};
