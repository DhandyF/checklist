function getToken() {
  try {
    return localStorage.getItem(process.env.TOKEN) || "";
  } catch (error) {
    return ""
  }
}

export default {
	token: getToken()
};