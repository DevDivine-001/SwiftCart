import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/common/Products";
import useProductHook from "../../hooks/useProductHook";
import { FaCirclePlus } from "react-icons/fa6";
import CreateScreen from "./CreateScreen";
import { created } from "../../global/GlobalState";
const Add = () => {
  const create = useSelector((state: any) => state.create);
  const dispatch = useDispatch();
  return (
    <>
      {create && <CreateScreen />}
      <div
        className="fixed right-10 bottom-20 hover:scale-[1.1] hover:transition-all duration-300  hover:cursor-pointer px-2 py-2 rounded-full bg-[orange] z-[200]"
        onClick={() => {
          dispatch(created());
        }}
      >
        <FaCirclePlus className="text-3xl" />
      </div>
    </>
  );
};

const ProductScreen = () => {
  const { data: products } = useProductHook();
  return (
    <>
      <Add />
      <div className="w-full min-h-[100vh] flex justify-center ">
        <div className=" w-[95%] h-full grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 bg-[red]">
          {products?.map((pro: any) => (
            <Products pro={pro} key={pro?.id} />
          ))}
          {/* <Products/>
       <Products/>
       <Products/>
       <Products/>
       <Products/> */}
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
