import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

import { API } from "services";
import { RootStore } from "stores/Root";

const ACCESS_TOKEN = "ACCESS_TOKEN";

class AuthorizationModel {
  rootStore;

  // accessToken: string | null = null
  // isAuthorized: boolean = true

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    this.init();
  }

  init() {
    this.accessToken = this.getAccessToken();
  }

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN) ?? "";
  }

  setAccessToken(value) {
    this.accessToken = value;
    localStorage.setItem(ACCESS_TOKEN, value);
  }

  unauthorize() {
    this.isAuthorized = false;
    localStorage.removeItem(ACCESS_TOKEN);
  }

  async signIn(email, password) {
    try {
      this.rootStore.loading.begin();

      const data = await API.auth.signIn(email, password);

      this.setAccessToken(data.accessToken);
      this.isAuthorized = true;

      await this.rootStore.user.init();
    } catch (err) {
      toast.error(err);
    } finally {
      this.rootStore.loading.end();
    }
  }
}

export default AuthorizationModel;
