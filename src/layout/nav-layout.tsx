import { NavLink } from "react-router-dom";

const NavLayout = () => {
  return (
    <div className=" bg-red-600">
      <div className="  px-5 md:px-[8rem] 2xl:px-[10rem]  flex items-center justify-between py-4">
        <h2 className=" text-xl md:text-2xl 2xl:text-3xl text-white font-bold ">
          Logo
        </h2>
        <div className=" flex items-center gap-4">
          <NavLink className={" text-white/90"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={" text-white/90"} to={"/product"}>
            Product
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
