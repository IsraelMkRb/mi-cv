import DecryptedText from "../decrypted-text";

const Presentation = () => {
  return (
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
      speed={20}
      maxIterations={2}
      encryptedClassName="text-indigo-600"
    />
  );
};

export default Presentation;