import { HomeView } from "../views/private/HomeView";
import { LoginView } from "../views/public/LoginView";
import { RegisterView } from "../views/public/RegisterView";

export const Routes = {
    public: [
        { path: "/Login", component: LoginView },
        { path: "/Register", component: RegisterView },
    ],
    private: [
        { path: "/home", component: HomeView},
    ]
  };