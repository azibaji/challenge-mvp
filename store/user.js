// store.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: "auth",
    state: () => ({
        isLoggedIn: false
    }),
    actions: {
        logIn(token) {
            this.isLoggedIn = true;
        },
        logOut() {
            this.isLoggedIn = false;
        }
    },
    getters: {
        getToken: (state) => state.isLoggedIn,
    }
});
