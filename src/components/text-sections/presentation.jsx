import DecryptedText from "../decrypted-text";

const Presentation = () => {
  return {
    elementoTexto: () => (
      <DecryptedText
        text="Soy desarrollador Full Stack con experiencia en el diseño e
                    implementación de sistemas internos y plataformas eCommerce. Me
                    especializo en backend con ASP.NET (C#, VB.NET) y
                    Django/FastAPI, y en frontend con Next.js, Angular y Vue. Me
                    apasiona crear soluciones escalables, optimizadas y seguras,
                    siempre buscando mejorar la eficiencia y experiencia del
                    usuario."
        animateOn="view"
        characters="01"
        sequential
        speed={5}
        maxIterations={2}
        encryptedClassName="text-indigo-600"
      />
    ),
    imagen: () => (
      <img
        src="/rostro_real.jpg"
        alt="descripcion_yo"
        className="rounded-full bg-slate-700 animation-face shadow-lg shadow-black"
        width={250}
        height={250}
      />
    ),
  };
};

export default Presentation;
