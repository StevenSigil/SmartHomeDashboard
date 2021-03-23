import axios from "axios";
import { HUE_API_KEY, HUE_API_URL } from "@env";

const key = HUE_API_KEY;
const hueApiUrl = HUE_API_URL;
const axiosInstance = axios.create({
  baseURL: `${hueApiUrl}/${key}/`,
  timeout: 10000,
});

export default axiosInstance;
