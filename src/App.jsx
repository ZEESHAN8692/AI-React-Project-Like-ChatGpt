import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 ">
        <div className="row-span-5 bg-black  text-white p-5">2</div>
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

          <div className="text-center m-auto p-5 bg-gray-800 rounded-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            provident quisquam dolorem recusandae dolores possimus voluptas
            blanditiis exercitationem maxime. Iste adipisci voluptatum eligendi
            id fuga! Voluptatibus sunt dicta nulla magnam. Tempore ut quidem quo
            temporibus, id aliquam dolore! Amet harum, corporis magnam excepturi
            iure repellendus explicabo facere, quae rem sapiente quod tempora
            sed dolorum fugiat voluptatibus? Similique ex cumque exercitationem.
            Doloribus quia cumque dicta exercitationem, incidunt dolorem
            blanditiis iure quos itaque nam aperiam animi nulla! Doloribus
            obcaecati commodi quo, omnis quasi ipsa eos molestiae? Nihil fugiat
            dolor numquam laborum enim! Ullam praesentium fugit vero molestias
            quas, nisi reiciendis quia corrupti aut eligendi! Quasi dolores
            accusantium corrupti sunt quisquam ad vero. Aut numquam provident
            iusto blanditiis repudiandae nemo. Id, facilis sequi? Commodi,
            incidunt minima odit, soluta non libero officia tenetur aliquam et
            quo possimus. Sed nisi iste natus nostrum ut quam hic eius, porro,
            nihil, harum praesentium. Obcaecati aliquid recusandae quaerat. Quam
            iste animi id rerum voluptatum ducimus nemo placeat soluta vitae
            vero tenetur rem consectetur porro explicabo, cum voluptates, quos
            accusantium enim, est iure eos quia obcaecati voluptas. Dolor,
            repellendus. Tenetur sapiente perspiciatis perferendis quae numquam
            nisi, at possimus, distinctio suscipit eaque cum iusto dolorem
            tempora consectetur eius aut asperiores. Provident officia nisi
            aliquid tenetur reiciendis praesentium repellendus dolor quasi. Quam
            quis, labore deserunt ratione aut distinctio reiciendis nesciunt
            voluptatibus perspiciatis commodi repellendus optio temporibus sequi
            repudiandae nobis excepturi, aspernatur eaque quibusdam consequatur
            laboriosam facere incidunt! Doloribus, fuga! Iure, molestias? Amet
            quidem similique perferendis nemo corporis, libero id ipsam, ex
          </div>
          <br />
          <div className="w-[70%] m-auto border border-[#525252] p-3.5 rounded-2xl">
            <input
              type="text"
              placeholder="Ask Gemini"
              className="w-[95%] outline-none"
            />
            <br />
            <br />
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl">+</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
