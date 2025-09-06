import api from "@/utils/api";
import axios from "axios";

export async function login(mobileNumber: string) {
    try {
        const response = await api.get("/", {
            params: { results: 1, nat: "us", mobileNumber },
        });

        const userData = response.data;
        localStorage.setItem("userData", JSON.stringify(userData));

        return userData;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw {
                status: error.response?.status,
                message: error.response?.data?.message || error.message,
            };
        }
        throw { message: "Unexpected error" };
    }
}