import DecryptedText from "../decrypted-text";

const Job2 = () => {
  return {
    elementoTexto: () => (
      <DecryptedText
        text="Formé parte de proyectos de software a medida en sectores como retail y gobierno. Contribuí en el desarrollo y mejora de un sistema Service Desk utilizado por Home Depot, así como en la creación de una app de lealtad para Grupo Alsea y una plataforma de gestión de activos para una dependencia gubernamental. Estas experiencias fortalecieron mis habilidades en ASP.NET y administración de soluciones orientadas al usuario final."
        animateOn="view"
        sequential
        speed={5}
        maxIterations={2}
        characters="01"
        encryptedClassName="text-indigo-600"
      />
    ),
    imagen: ({className}) => (
      <div className={className + " p-6 bg-white"}>
      <img
      src="/advanced_system_logo.png"
      alt="descripcion_yo"
      width={250}
      height={250}      
      />
      </div>
    ),
  };
};

export default Job2;
