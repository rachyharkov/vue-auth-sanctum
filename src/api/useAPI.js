import axios from 'axios'
import middleware401 from './middleware401'

/**
 * Initialize Axios instance to call the API
 * @param {string} endpoint either 'web' or 'api' (default)
 * @returns {AxiosInstance}
 */
export const useApi = () => {
	const axiosInstance = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
	})

	axiosInstance.interceptors.response.use(resp => resp, middleware401)

	return axiosInstance
}