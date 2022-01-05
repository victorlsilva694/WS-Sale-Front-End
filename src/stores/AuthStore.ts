import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import api from "../services/api";

interface IProducts {
  idProduct: number;
  nameProduct: string;
  imageLink: string;
  imageProduct: string;
  priceProduct: string;
  sellerId: number;
  categoryProduct: string;
  productDescription: string;
}
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  public isAuthenticated = false;
  public user = {
    id: 0,
    email: "",
    name: "",
    lastName: "",
    password: "",
  };

  public products: IProducts[] = [];
  public async handleProducts() {
    try {
      const { data } = await api.get<IProducts[]>(
        "http://localhost:8080/renderProduct"
      );
      data.map((values) => {
        runInAction(() => {
          this.products.push(values);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  public async login(email: string, password: string) {
    try {
      const results = await api.post("http://localhost:8080/login", {
        email,
        password,
      });

      const token = results.data.token;
      localStorage.setItem("token", token);

      runInAction(() => {
        this.isAuthenticated = true;
        this.user.id = results.data.id;
        this.user.email = results.data.email;
        this.user.name = results.data.name;
        this.user.lastName = results.data.lastName;
      });
    } catch (err) {
      console.dir(err);
    }
  }

  public async verifyToken() {
    const { data } = await api.get("/verifyToken");
    runInAction(() => {
      this.isAuthenticated = true;
      this.user.id = data.id;
      this.user.email = data.Email;
      this.user.name = data.Name;
      this.user.lastName = data.lastName;
    });
  }
}
export const authStore = new AuthStore();
export const authContext = createContext(authStore);
export const AuthProvider = authContext.Provider;
