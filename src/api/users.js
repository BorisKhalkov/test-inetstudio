import axios from '@/api/axios';

const getUsers = () => {
	return axios
		.get('users/')
		.then((response) => response.data.users)
}

export default {
	getUsers,
}