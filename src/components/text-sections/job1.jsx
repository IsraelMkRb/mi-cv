import DecryptedText from "../decrypted-text";

const Job1 = () => {
  return {
    titulo: "Vesa IT - Grupo Alsea (2018 - 2020)",
    elementoTexto: () => (
      <DecryptedText
        text="Comencé mi carrera brindando soporte a los sistemas de punto de venta como Micros Res 3700 y Aloha NCR. Posteriormente, desarrollé componentes y funcionalidades en VB.NET para dichos sistemas, participando en el ciclo completo del desarrollo: desde la toma de requerimientos y documentación, hasta las pruebas en conjunto con QA. Esta etapa me permitió comprender de primera mano la importancia de la estabilidad operativa en el entorno restaurantero."
        animateOn="view"
        sequential
        speed={5}
        maxIterations={2}
        characters="01"
        encryptedClassName="text-indigo-600"
      />
    ),
    imagen: ({className}) => (
      <img
        src="/logo_alsea.jpg"
        alt="descripcion_yo"
        className={className}
        width={250}
        height={250}
      />
    ),
  };
};

export default Job1;
