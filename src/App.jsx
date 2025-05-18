import { useEffect, useState } from "react";
import "./App.css";
import { main } from "./geminiApi/GeminiApi";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const handhleSubmit = async () => {
    const response = await main();
    setApiResponse(response);
  };
  useEffect(() => {
    handhleSubmit();
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 ">
        <div className="row-span-5 bg-black  text-[#898D95] p-5 font-bold ">
          <br />
          <br />
          <ul>
            <li>Hello Zeeshan</li>
            <li>Hello Zeeshan</li>
            <li>Hello Zeeshan</li>
            <li>Hello Zeeshan</li>
            <li>Hello Zeeshan</li>
          </ul>
        </div>

        <div className="col-span-4 row-span-5 bg-[#212121] text-white p-5 ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl">Gemini</h1>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <img src="menu.png" alt="" className="w-[30px] h-[30px]  " />
              </div>
              <div>
                <img
                  src="https://zeeshan-khan-full-stack-dev-portfolio.vercel.app/persnal/young-male.png"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-gray-400"
                />
              </div>
            </div>
          </div>
          <br />
          <br />

          {apiResponse.length > 0 ? (
            <div className="text-center m-auto p-5 bg-gray-600 rounded-[10px]">
              {apiResponse}
            </div>
          ) : (
            ""
          )}

          <br />
          <div className="w-[80%] m-auto border border-[#525252] p-3.5 rounded-2xl">
            <input
              type="text"
              placeholder="Ask Gemini"
              className="w-[95%] outline-none"
            />
            <br />
            <br />
            <form action="">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-gray-600 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                      <img src="plus.png" alt="" className="w-[20px]" />
                    </div>
                    <div>
                      <p>Deep Search</p>
                    </div>

                    <div>
                      <p>Canvas</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="cursor-pointer">
                    <div className="p-1 bg-gray-600 rounded-full w-[40px] h-[40px] flex justify-center items-center ">
                      <img src="submit.png" alt="" className="w-[24px] " />
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
