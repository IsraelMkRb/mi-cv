import DecryptedText from "../decrypted-text";

const Presentation = () => {
  return {
    titulo: "Acerca de mi",
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
    imagen: ({ className }) => (
      <img
        src="/rostro_real_v1.jpg"
        alt="descripcion_yo"
        className={className}
        width={250}
        height={250}
      />
    )
  };
};

export default Presentation;
