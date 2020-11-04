
import axios from "axios";
export default {
	login({ commit }, user) {
		return new Promise((resolve, reject) => {
			const send = {
				username: user.username,
				password: user.password,
			};

			axios({ url: "/login", data: send, method: "POST" })
				.then(resp => {
					console.log(resp);
					const token = resp.data.data.token;
					
					localStorage.setItem(process.env.TOKEN, token);

					axios.defaults.headers.common["Authorization"] = "Bearer " + token;

					commit("AUTH_SUCCESS", token);
					resolve(resp);
				})
				.catch(err => {
					console.log("err");
					localStorage.removeItem(process.env.TOKEN);
					reject(err);
				});
		});
	},
}