import DecryptedText from "../decrypted-text";

const Job3 = () => {
  return (
    <DecryptedText
      text="En Freshco lideré el desarrollo de soluciones clave para el área de TI, incluyendo chatbots inteligentes, sistemas de gestión documental alineados con ISO 9000:1 y migración del ERP legacy a plataformas web. Implementé herramientas como CRM, reloj checador y sistemas de informes con Power BI. Mantuve y extendí infraestructuras con ASP.NET, React.js y SQL Server, integrando consultas complejas y automatización mediante procedimientos almacenados. También gestioné compras de TI y la mejora continua del ecosistema tecnológico interno."
      animateOn="view"
      sequential
      speed={10}
      maxIterations={2}
      characters="abdc1234"
      encryptedClassName="inter-400 text-sm text-indigo-600"
    />
  );
};

export default Job3;