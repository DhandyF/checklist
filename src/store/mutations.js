export default {
    AUTH_SUCCESS(state, payload) {
      state.token = payload.token
    },
  };