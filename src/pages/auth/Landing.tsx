import Slick from "../screen/Slick";
import store from "../../assets/5k_store.png";
import clear from "../../assets/clear.png";
import Cards from "../../components/common/Cards";
import Categories from "../../components/common/Categories";
import compute from "../../assets/computing-deals.png";
import game from "../../assets/gaming-deals.png";
import accessories from "../../assets/accessories.png";
import kstore from "../../assets/5k_store.png";
const MainScreen = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center ">
        <div className="w-[95%] h-auto grid gap-2 grid-cols-4 mt-1 max-xl:grid-cols-3 max-md:grid-cols-2">
          <div className="xl:col-span-3 max-xl:col-span-2 rounded-lg row-span-2 h-[410px] border flex justify-between items-center relative over">
            <Slick />
          </div>
          <div className="border h-[200px] rounded-lg">
            <div
              className="w-full h-full rounded-lg"
              style={{
                background: `url(${store})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            ></div>
          </div>
          <div className="border h-[200px] rounded-lg">
            <div
              className="w-full h-full rounded-lg"
              style={{
                background: `url(${clear})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            ></div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center mt-3">
          <div className="w-[95%] h-auto ">
            <div className="w-full flex justify-between">
              <div className=" font-bold  my-1 text-[18px]">
                Top Selling Items
              </div>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-2 my-1">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center my-2">
          <div className="w-[95%] font-bold uppercase">Categories</div>
        </div>
        <div className="mt-2 w-full h-auto flex justify-center">
          <div className="w-[95%] grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-2 bg-[red]">
            <Categories
              image={{
                backgroundImage: `url(${compute})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Categories
              image={{
                backgroundImage: `url(${game})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Categories
              image={{
                backgroundImage: `url(${accessories})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Categories
              image={{
                backgroundImage: `url(${kstore})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
