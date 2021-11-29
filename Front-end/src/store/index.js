import { createStore } from "vuex";

export default createStore({
  state: {
    invoiceModal: null,
  },
  mutations: {
    toggle_invoice(state) {
      state.invoiceModal = !state.invoiceModal;
    },
  },
  actions: {},
  modules: {},
});
