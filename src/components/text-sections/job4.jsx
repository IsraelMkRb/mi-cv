import DecryptedText from "../decrypted-text";

const Job4 = () => {
  return (
    <DecryptedText
      text="Actualmente colaboro en el sector farmacéutico desarrollando soluciones multicanal para atención al cliente mediante chatbots en WhatsApp, Facebook e Instagram. He implementado proyectos de consola para automatizar campañas de recompra, facturación y recuperación de carritos. También participo en el mantenimiento y optimización de plataformas eCommerce para marcas como Bayer y Novartis, así como en la construcción de sistemas internos como herramientas de tickets y reportes. Uso tecnologías como FastAPI, Vue.js y PostgreSQL para garantizar soluciones robustas y escalables."
      animateOn="view"
      sequential
      speed={20}
      maxIterations={2}
      characters="01"
      encryptedClassName="text-indigo-600"
    />
  );
};

export default Job4;