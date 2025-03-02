import { useState } from "react";
import "./App.css";

function App() {
  const [moreInfoAboutMe, setMoreInfoAboutMe] = useState(false);

  const handleClickMoreInfo = () => setMoreInfoAboutMe(!moreInfoAboutMe);

  return (
    <main className="h-screen w-screen m-0 p-0">
      <div className="fondo-acercade w-screen h-screen bg-slate-700 m-0 p-0">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-10/12 h-max mx-auto rounded-md bg-slate-700 border border-gray-400">
            <img
              src="/rostro_real.jpg"
              alt="descripcion_yo"
              className="rounded-full bg-slate-700 mx-auto -mt-14"
              width={150}
              height={150}
            />

            <p className="text-2xl text-white roboto-700 p-4">
              Acerca de mi...
            </p>
            <br />
            <p
              className="text-white inter-200 p-4"
            >
              Soy desarrollador Full Stack con experiencia en el diseño e
              implementación de sistemas internos y plataformas eCommerce.
              {!moreInfoAboutMe ? (
                <button
                  onClick={handleClickMoreInfo}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Ver mas...
                </button>
              ) : (
                <>
                  Me especializo en backend con ASP.NET (C#, VB.NET) y
                  Django/FastAPI, y en frontend con Next.js, Angular y Vue. Me
                  apasiona crear soluciones escalables, optimizadas y seguras,
                  siempre buscando mejorar la eficiencia y experiencia del
                  usuario.
                  <button
                    onClick={handleClickMoreInfo}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Ver menos...
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 h-full w-[90]">
          <div className="flex flex-col justify-center ">
            <div className="w-10/12 mx-auto p-11 rounded-md border border-gray-400 bg-slate-700">
              <p className="text-4xl text-white roboto-700">Acerca de mi...</p>
              <br />
              <p className="text-white inter-400">
                Soy desarrollador Full Stack con experiencia en el diseño e
                implementación de sistemas internos y plataformas eCommerce. Me
                especializo en backend con ASP.NET (C#, VB.NET) y
                Django/FastAPI, y en frontend con Next.js, Angular y Vue. Me
                apasiona crear soluciones escalables, optimizadas y seguras,
                siempre buscando mejorar la eficiencia y experiencia del
                usuario.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="/rostro_real.jpg"
              alt="descripcion_yo"
              className="rounded-full bg-slate-700"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="h-12 -ms-4"></div>
    </main>
  );
}

export default App;
