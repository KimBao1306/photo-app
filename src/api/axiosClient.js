import axios from 'axios';
import queryString from 'query-string';

/**
 * khởi tạo một axios theo ý muốn của chúng ta.
 * tự định nghĩa các cấu hình bên trong
 * baseURL: đường dẫn chúng đến api
 * headers: thêm các headers yêu cầu từ api
 * paramsSerializer: chúng ta sẽ dùng query-string để biến đổi params được truyền vào axios để gắn vào baseURL và gửi lên server.
 */
const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {'content-type': 'application/json'},
	paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use(async (config) => {
// 	// Handle token here ...
// 	return config;
// });

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		// Handle errors
		throw error;
	}
);

export default axiosClient;
