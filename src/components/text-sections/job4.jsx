import DecryptedText from "../decrypted-text";

const Job4 = () => {
  return {
    titulo: "Omanu Labs - Grupo DAR - (2024 - Actual)",
    elementoTexto: () => (
      <DecryptedText
        text="Actualmente colaboro en el sector farmacéutico desarrollando soluciones multicanal para atención al cliente mediante chatbots en WhatsApp, Facebook e Instagram. He implementado proyectos de consola para automatizar campañas de recompra, facturación y recuperación de carritos. También participo en el mantenimiento y optimización de plataformas eCommerce para marcas como Bayer y Novartis, así como en la construcción de sistemas internos como herramientas de tickets y reportes. Uso tecnologías como FastAPI, Vue.js y PostgreSQL para garantizar soluciones robustas y escalables."
        animateOn="view"
        sequential
        speed={5}
        maxIterations={2}
        characters="01"
        encryptedClassName="text-indigo-600"
      />
    ),
    imagen: ({ className }) => (
      <div className={className + " p-4 bg-white"}>
        <img
          src="/logo_omanu_labs.png"
          alt="descripcion_yo"
          width={250}
          height={250}
        />
      </div>
    ),
  };
};

export default Job4;
