import { useGetAllProduct } from "@/store/server/product";

const Product = () => {
  const { data } = useGetAllProduct();

  console.log(data);

  return <div>Product</div>;
};

export default Product;
