import { useEffect, useState } from "react";
import "./App.css";
import { main } from "./geminiApi/GeminiApi";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [input, setInput] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await main(input);
    setApiResponse(response);
    // console.log("Search", input);
  };

  useEffect(() => {
    handleSubmit();
  }, [input]);

  return (
    <div className="min-h-screen grid grid-cols-12 bg-[#121212] text-white font-sans">
      {/* Sidebar */}
      <aside className="col-span-2 bg-black p-6 border-r border-gray-700 flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#898D95]">Navigation</h2>
        <ul className="space-y-4 text-[#A3A3A3] text-sm">
          <li>Hello Zeeshan</li>
          <li>Hello Zeeshan</li>
          <li>Hello Zeeshan</li>
          <li>Hello Zeeshan</li>
          <li>Hello Zeeshan</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-10 p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Gemini</h1>
          <div className="flex items-center gap-4">
            <img src="menu.png" alt="menu" className="w-7 h-7" />
            <img
              src="https://zeeshan-khan-full-stack-dev-portfolio.vercel.app/persnal/young-male.png"
              alt="avatar"
              className="w-10 h-10 rounded-full border border-gray-500"
            />
          </div>
        </div>

        {/* Response Section */}
        {apiResponse && (
          <div className="bg-gray-800 p-6 rounded-lg text-center text-white shadow-lg">
            {apiResponse}
          </div>
        )}

        {/* Input Section */}
        <div className="w-full max-w-3xl mx-auto bg-[#1E1E1E] p-5 rounded-xl border border-[#333]">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Ask Gemini anything..."
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-lg mb-4"
            />

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-6 items-center text-sm text-gray-400">
                <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                  <div className="p-2 bg-gray-700 rounded-full">
                    <img src="plus.png" alt="plus" className="w-4 h-4" />
                  </div>
                  <span>Deep Search</span>
                </div>
                <div className="cursor-pointer hover:text-white transition">
                  Canvas
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-full"
              >
                <img src="submit.png" alt="submit" className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
