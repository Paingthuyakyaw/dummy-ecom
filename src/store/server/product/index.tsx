//====================  get all product  ====================//

import { axios, headerJson } from "@/api";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProduct = async (): Promise<any> => {
  const { data } = await axios.get("products", {
    headers: headerJson(),
  });
  return data;
};

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProduct(),
  });
};
