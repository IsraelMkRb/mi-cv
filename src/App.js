import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Presentation from "./components/text-sections/presentation";
import Job1 from "./components/text-sections/job1";
import Job2 from "./components/text-sections/job2";
import Job3 from "./components/text-sections/job3";
import Job4 from "./components/text-sections/job4";
function App() {
  const [currentNumPage, setCurrentNumPage] = useState(0);
  const arrayPages = useMemo(
    () => [Presentation(), Job1(), Job2(), Job3(), Job4()],
    []
  );
  const [currentPage, setCurrentPage] = useState(arrayPages[currentNumPage]);
  const handleNextClick = () => {
    if (currentNumPage < arrayPages.length - 1) {
      setCurrentNumPage(currentNumPage + 1);
    }
  };

  const handleBeforeClick = () => {
    if (currentNumPage > 0) {
      setCurrentNumPage(currentNumPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(arrayPages[currentNumPage]);
    console.log(currentNumPage);
  }, [arrayPages, currentNumPage]);

  return (
    <main className="h-screen w-screen m-0 p-0 ">
      <div className="fondo-acercade w-screen h-screen bg-indigo-950/95 m-0 p-0">
        {/* Movil */}
        <div className="md:hidden w-full h-full flex flex-col justify-center items-center">
          <div className="w-10/12 h-max mx-auto rounded-md bg-indigo-950/95 border border-gray-400">
            {
              <currentPage.imagen
                className={
                  "rounded-full bg-indigo-950/95 mx-auto -mt-14 shadow-lg shadow-black w-2/3"
                }
              />
            }
            <p className="text-2xl text-white inter-400 p-4">
              {currentPage.titulo}
            </p>
            <br />
            <p className="text-white texto-descripcion p-4">
              {<currentPage.elementoTexto />}
            </p>
            {currentNumPage + 1 < arrayPages.length ? (
                <button
                  onClick={handleNextClick}
                  className="rounded-full border border/white float-right animation-next mb-2 mr-3"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </button>
              ) : (
                <button className="rounded-full border border/white float-right animation-next mb-2 mr-3">
                  <svg
                    class="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                    />
                  </svg>
                </button>
              )}
            {currentNumPage > 0 && (
              <button
                className="rounded-full border border/white float-right animation-next mb-2 mr-2"
                onClick={handleBeforeClick}
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12l4-4m-4 4 4 4"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 h-full w-[90] backdrop-blur-sm bg-transparent">
          <div className="flex flex-col justify-center col-span-2">
            <div className="w-11/12 mx-auto p-11 rounded-md border border-gray-400 bg-indigo-950/95">
              <p className="text-4xl text-slate-200 inter-400">
                {currentPage.titulo}
              </p>
              <hr />
              <br />
              <p className="text-white texto-descripcion mb-4">
                {<currentPage.elementoTexto />}
              </p>
              {currentNumPage + 1 < arrayPages.length ? (
                <button
                  onClick={handleNextClick}
                  className="rounded-full border border/white float-right animation-next ml-3"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </button>
              ) : (
                <button className="rounded-full border border/white float-right animation-next ml-3">
                  <svg
                    class="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                    />
                  </svg>
                </button>
              )}
              {currentNumPage > 0 && (
                <button
                  className="rounded-full border border/white float-right animation-next"
                  onClick={handleBeforeClick}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M5 12l4-4m-4 4 4 4"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            {
              <currentPage.imagen
                className={
                  "rounded-full bg-slate-700 animation-face shadow-lg shadow-black"
                }
              />
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
