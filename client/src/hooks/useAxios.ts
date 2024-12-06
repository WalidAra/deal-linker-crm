import { HEADER , API_URL } from "@/config";
import { Fetch, FetchResponse } from "@/types";
import axios, { AxiosRequestConfig } from "axios";

export const useAxios = async <T>({
  endpoint,
  feature,
  method,
  accessToken,
  callback,
  data,
  includeAccessToken,
}: Fetch): Promise<FetchResponse<T>> => {
  try {
    const url = `${API_URL}/api/${feature}/${endpoint}`;

    const axiosConfig: AxiosRequestConfig = {
      method: method,
      url,
      headers: {
        "Content-Type": "application/json",
        ...(includeAccessToken && { [HEADER]: `Bearer ${accessToken}` }),
      },
      data,
      withCredentials: true,
    };

    const res = await axios(axiosConfig);
    if (callback && res.data.status === true) {
      callback(res.data);
    }

    console.log(res.data);

    const r = await res.data;
    return r;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data as FetchResponse<T>;
    }
    return {
      status: false,
      message: "useAxios ~> An unexpected error occurred",
      data: null as unknown as T,
    };
  }
};
