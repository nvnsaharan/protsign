export const state = () => ({
  loginStatus: false,
  user: "",
  userId: "",
  userimage: "",
  amount: "",
  nft: "",
});

export const mutations = {
  login(state, payload) {
    state.loginStatus = true;
    state.user = payload.username;
    state.userId = payload.uid;
    state.userimage = payload.userimage;
    state.amount = payload.amount;
  },
  logout(state) {
    state.loginStatus = false;
    state.user = "";
    state.userId = "";
    state.userimage = "";
    state.amount = 0;
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
