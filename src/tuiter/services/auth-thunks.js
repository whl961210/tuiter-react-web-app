import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";
import { useNavigate } from "react-router";

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        try {
            const response = await authService.profile();
            return response;
        } catch (error) {
            throw error;
        }
    }
);
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    });
export const register = createAsyncThunk(
    "user/register",
    async (userData) => {
        try {
            console.log("from register component");
            const user = await authService.register(userData);
            console.log("from servers");
            return user;
        } catch (error) {
            //console.error("Error during registration:", error);
            alert("Error during registration:" + error.message);
            throw error;
        }
    }
);

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        try {
            console.log("from loginThunk component");
            const user = await authService.login(credentials);
            console.log("from servers");
            return user;
        } catch (error) {
            alert("Error during login:" + error.message);
            throw error;
        }
    }
);
