import DecryptedText from "../decrypted-text";

const Job2 = () => {
  return (
    <DecryptedText
      text="Formé parte de proyectos de software a medida en sectores como retail y gobierno. Contribuí en el desarrollo y mejora de un sistema Service Desk utilizado por Home Depot, así como en la creación de una app de lealtad para Grupo Alsea y una plataforma de gestión de activos para una dependencia gubernamental. Estas experiencias fortalecieron mis habilidades en ASP.NET y administración de soluciones orientadas al usuario final."
      animateOn="view"
      sequential
      speed={20}
      maxIterations={2}
      characters="01"
      encryptedClassName="text-indigo-600"
    />
  );
};

export default Job2;