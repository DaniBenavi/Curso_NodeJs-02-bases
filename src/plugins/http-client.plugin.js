import axios from 'axios'

export const httpClientPlugin = {
  get: async url => {
    const { data } = await axios.get(url)
    return data
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async url => {}
}
