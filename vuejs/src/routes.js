import Home from "./components/Home.vue";

import Forbidden from "./components/Errors/Forbidden.vue";
import NotFound from "./components/Errors/NotFound.vue";
import Maintenance from "./components/Errors/Maintenance.vue";

import Login from "./components/Auth/Login.vue";
import Register from "./components/Auth/Register.vue";
import ResetPassword from "./components/Auth/ResetPassword.vue";
import ForgotPassword from "./components/Auth/ForgotPassword.vue";
import Profile from "./components/Auth/Profile.vue";

import Dashboard from "./components/Dashboard.vue";
import Roles from "./components/Roles/IndexRoles.vue";
import Permissions from "./components/Permissions/IndexPermissions.vue";
import Users from './components/Users/IndexUsers.vue';
import Customers from "./components/Customers/IndexCustomers.vue";

const routes = [
    { path: "/home", name: "", component: Home },
    { path: "/", name: "Home", component: Home },

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    { path: "/forbidden", name: "Forbidden", component: Forbidden },
    { path: "/maintenance", name: "Maintenance", component: Maintenance },

    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/forgot-password", name: "ForgotPassword", component: ForgotPassword },
    { path: "/reset-password", name: "ResetPassword", component: ResetPassword },

    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/roles", name: "Roles", component: Roles },
    { path: "/permissions", name: "Permissions", component: Permissions },
    { path: "/users", name: "Users", component: Users },
    { path: "/customers", name: "Customers", component: Customers },
]   

export default routes
