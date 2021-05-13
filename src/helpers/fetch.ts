import { IResponce } from "../types/types";
import axios from "axios";
import api from "../Api";

const API = api();

export const fetchData = async (
  type: string,
  page: number,
  pageName: string
): Promise<IResponce> => {
  const resp = await axios.get<IResponce>(
    `${API.name}/${pageName}/${type}?api_key=${API.key}&region=US&page=${page}`
  );

  return resp.data;
};

export const fetchDataDetails = async (
  pageName: string,
  id: string,
  name: string | null = null
): Promise<IResponce> => {
  const resp = await axios.get<IResponce>(
    `${API.name}/${pageName}/${id}${name ? `/${name}` : ""}?api_key=${
      API.key
    }&language=en-US`
  );

  return resp.data;
};

export const fetchSearch = async (payload: string): Promise<IResponce> => {
  const resp = await axios.get<IResponce>(
    `${API.name}/search/multi?api_key=${API.key}&query=${payload}&language=en-US&page=1&include_adult=false`
  );

  return resp.data;
};
