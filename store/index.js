export const state = () => ({
  loginStatus: false,
  user: "",
  userId: "",
  userimage: "",
});

export const mutations = {
  login(state, payload) {
    state.loginStatus = true;
    state.user = payload.username;
    state.userId = payload.uid;
    state.userimage = payload.userimage;
  },
  logout(state) {
    state.loginStatus = false;
    (state.user = ""), (state.userId = ""), (state.userimage = "");
  },
};

export const actions = {
  login(context, payload) {
    context.commit("login", payload);
  },
  logout(context) {
    context.commit("logout");
  },
};
