import { createContext, useContext } from "react";

import AuthorizationModel from "../models/Authorization";

import AppConfig from "./AppConfig";

export class RootStore {
  readonly authorization: AuthorizationModel;

  constructor() {
    this.init();

    this.authorization = new AuthorizationModel(this);
  }

  async init() {
    AppConfig.init();
  }
}

const rootStore = new RootStore();

const rootStoreContext = createContext<RootStore>(rootStore);

// export const RootStoreProvider = ({ children }: { children: JSX.Element }) => (
//   <rootStoreContext.Provider value={rootStore}>{children}</rootStoreContext.Provider>
// )
export const useRootStore = () => useContext(rootStoreContext);

export default rootStore;
