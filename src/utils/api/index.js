export const api = {
  post: async (url, data = {}) => {
    const token = localStorage.getItem('auth-token');
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
  },
  get: async (url, data = {}) => {
    const token = localStorage.getItem('auth-token');
    return await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
  },
};
