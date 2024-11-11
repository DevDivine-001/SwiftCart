import { FaStar } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../global/GlobalState";

interface iProduct {
  pro: any;
}


const Products: React.FC<iProduct> = ({ pro }) => {
  const dispatch = useDispatch();
  const discount = pro.price + (pro?.price * 30) / 100;
  return (
    <>
      <div className="h-[320px] rounded-xl hover:cursor-pointer hover:shadow-lg bg-white border flex flex-col items-center group hover:opacity-100 transition-opacity">
        <div className="w-full flex flex-col items-center ">
          <div className="w-[95%]">
            <Link to={`/auth/${pro?._id}/detail`}>
              <img
                className="w-full bg-black  my-1 h-[165px] rounded-lg text-white object-cover object-top"
                src={pro?.image}
              />
              <div className="w-[95%]">{pro?.name}</div>
              <div className="w-[95%] font-bold text-[red]">
                ${pro?.price.toFixed(2)}
              </div>
              <div className="w-[95%] line-through text-[gray] text-[13px] font-bold">
                {discount?.toFixed(2)}
              </div>
              <div className="w-[95%] flex items-center">
                <FaStar className="text-[orange]" />
                <FaStar className="text-[orange]" />
                <FaStar className="text-[orange]" />
                <div className="text-[11px] font-bold">(345)</div>
              </div>
            </Link>
          </div>
          <div className="w-full flex  items-center justify-center  font-bold">
            <button
              className="py-[10px] px-4 rounded-md my-3 bg-[#ffb121] text-[13px] opacity-0 group-hover:opacity-100 transition-opacity uppercase"
              onClick={() => {
                dispatch(addToCart(pro));
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
