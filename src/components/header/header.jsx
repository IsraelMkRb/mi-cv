import { useState } from "react";

const Header = () => {
  const [isModalInfoVisible, setIsModalInfoVisible] = useState(false);

  const handleInfoClick = () => {
    setIsModalInfoVisible(!isModalInfoVisible);
  };

  return (
    <header className="h-24 w-screen relative bg-[#212327] grid grid-cols-3 md:grid-cols-5 shadow-md border border-neutral-600">
      <div
        className="absolute left-6 top-6 md:hidden"
        onClick={handleInfoClick}
      >
        <svg
          class="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="hidden md:flex flex-row justify-end items-end col-start-2">
        <div>
          <p className="text-white font-bold roboto-flex-400 text-nowrap">
            Israel Morquecho Robles
          </p>
          <p className="text-white font-bold roboto-flex-700 md:float-end roboto-flex-400">
            26 años
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-end rounded-full col-start-2 md:col-start-3">
        <img
          alt="imagen principal"
          src="/rostro_real.jpg"
          width={50}
          height={50}
          className="w-36 rounded-full border border-gray-600 bg-slate-300 -m-16"
        />
      </div>
      <div className="hidden md:flex flex-row justify-start items-end col-span-2">
        <div>
          <p className="text-white font-bold roboto-flex-400">
            <svg
              class="w-6 h-6 text-white inline-block mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="https://github.com/IsraelMkRb"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              IsraelMkRb
            </a>
          </p>
          <p className="text-white font-bold roboto-flex-400 float-start">
            <svg
              class="w-6 h-6 text-white mr-2 inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clip-rule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/israel-morquecho-7748831a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Israel Morquecho Robles
            </a>
          </p>
        </div>
      </div>
      {isModalInfoVisible && (
        <div className="fixed w-screen h-screen bg-zinc-800/50 flex flex-col justify-center items-center md:hidden">
          <div className="w-3/4 h-3/5 bg-white border border-gray-500 rounded-lg p-4">
            <div>
              <p className="roboto-flex-700 text-neutral-800 inline-block">
                Informacion Personal
              </p>

              <span className="float-end" onClick={handleInfoClick}>
                x
              </span>
            </div>
            <hr />
            <br />

            <div className="w-3/4 mx-auto">
              <p>
                Nombre:{" "}
                <span className="font-semibold">Israel Morquecho Robles</span>
              </p>
              <p>
                Edad: <span className="font-semibold">26 años</span>
              </p>
              <br />
              <p className="roboto-flex-700 text-neutral-800 inline-block">
                Sitios web
              </p>
              <br/>
              <svg
                class="w-6 h-6 text-gray-700 inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <a
                href="https://github.com/IsraelMkRb"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <span className="font-semibold">IsraelMkRb</span>
              </a>
              <br />
              <svg
                class="w-6 h-6 text-gray-700 mr-2 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
              <a
                href="https://www.linkedin.com/in/israel-morquecho-7748831a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <span className="font-semibold">Israel Morquecho Robles</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
