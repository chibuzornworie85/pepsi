import "./App.css";
import logo from "./Asset/logo.png";
import pepesi1 from "./Asset/pepsi1.png";
import pepesi from "./Asset/pepsi.png";
import shadow from "./Asset/shadow.png";
import twit from "./Asset/twit.png";
import n from "./Asset/n.png";
import face from "./Asset/face.png";
import inst from "./Asset/insta.png";
import last from "./Asset/last.png";
import logo1 from "./Asset/logo1.png";

function App() {
  return (
    <>
      <div className=" bg-[#070A4E]">
        <div className=" flex justify-center pt-[60px]">
          <div className="header h-[100vh] w-[75%]">
            <div className=" flex justify-center gap-[60px] items-center">
              <div>
                <img src={logo} alt="An image logo" className=" pt-[20px]" />
              </div>
              <div style={{ fontFamily: "Inter" }} className=" text-[white]">
                <ul className=" items-center flex gap-[20px]">
                  <li>PRODUCTS</li>
                  <li>WHAT’S NEW</li>
                  <li>NEWSLETTER</li>
                  <li>ABOUT US</li>
                  <li>CONTACT US</li>
                  <button className="btn1 px-[20px] py-[5px] flex justify-center items-center">
                    BUY PRODUCT
                  </button>
                </ul>
              </div>
            </div>
            <div className=" flex justify-between gap-[40px] pl-[30px]">
              <div className=" flex flex-col gap-[30px] mt-[120px]">
                <img
                  src={twit}
                  alt=""
                  className=" w-[90px] flex items-center"
                />
                <img src={n} alt="" />
                <img src={face} alt="" />
                <img src={inst} alt="" />
              </div>
              <div style={{ fontFamily: "Rubik" }} className=" text-[white]">
                <h1 className=" text-[48px]">Pepsi Classic</h1>
                <p className=" w-[488px] text-[16px]">
                  Carbonated Water, High Fructose, Corn Syrup, Caramel Color,
                  Sugar, Phosphoric Acid, Caffeine, Citric Acid, Natural Flavour
                </p>
                <h1 className=" text-[16px] pt-[30px]">NUTRITIONAL FACTS</h1>
                <div className=" flex gap-[10px] pt-[10px]">
                  <div>
                    <div className=" flex flex-col items-center text-center w-[117px] h-[80px] pt-[15px] bg-[#252872]">
                      <p>Sugar syrup</p>
                      <p>150 cL</p>
                    </div>
                    <div className=" bg-[#646693] h-[39px] w-[117px] flex justify-center items-center">
                      <p>150 cL</p>
                    </div>
                  </div>
                  <div>
                    <div className=" flex flex-col items-center text-center w-[117px] h-[80px] pt-[15px] bg-[#252872]">
                      <p>Caffeine</p>
                      <p>10 g</p>
                    </div>
                    <div className=" bg-[#646693] h-[39px] w-[117px] flex justify-center items-center">
                      <p>150 cL</p>
                    </div>
                  </div>
                  <div>
                    <div className=" flex flex-col items-center text-center w-[117px] h-[80px] pt-[15px] bg-[#252872]">
                      <p>Citric Acid</p>
                      <p>0.8 cL</p>
                    </div>
                    <div className=" bg-[#646693] h-[39px] w-[117px] flex justify-center items-center">
                      <p>150 cL</p>
                    </div>
                  </div>
                  <div>
                    <div className=" flex flex-col items-center text-center w-[117px] h-[80px] pt-[15px] bg-[#252872]">
                      <p>Natural Flavour</p>
                      <p>200 g</p>
                    </div>
                    <div className=" bg-[#646693] h-[39px] w-[117px] flex justify-center items-center">
                      <p>150 cL</p>
                    </div>
                  </div>
                  <div>
                    <div className=" flex flex-col items-center text-center w-[117px] h-[80px] pt-[15px] bg-[#252872]">
                      <p>Fructose</p>
                      <p>200 g</p>
                    </div>
                    <div className=" bg-[#646693] h-[39px] w-[117px] flex justify-center items-center">
                      <p>150 cL</p>
                    </div>
                  </div>
                </div>
                <p className=" pt-[10px] w-[390px]">
                  Rich in energy, our drinks will revitalize your body and get
                  you ready for the day’s activities
                </p>
                <button
                  style={{ fontFamily: "Inter" }}
                  className="btn px-[30px] py-[15px] text-[12px] mt-[20px]"
                >
                  BUY NOW
                </button>
              </div>
              <div className=" flex">
                <div className=" flex items-center">
                  <img
                    src={shadow}
                    alt=""
                    className=" relative top-[150px] h-200px]"
                  />
                  <img
                    src={pepesi1}
                    alt="first image"
                    className=" relative top-[30px] right-[250px] h-[200px]"
                  />
                  <img
                    src={pepesi}
                    alt="first image"
                    className=" relative right-[350px] h-[300px]"
                  />
                </div>
              </div>
            </div>
            <div className="img flex justify-end h-[113px]">
              <img src={last} alt="" />
            </div>
          </div>
        </div>
        <div className=" p-[30px] w-[150px]">
          <img src={logo1} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
