import DecryptedText from "../decrypted-text";

const Job1 = () => {
  return (
    <DecryptedText
      text="Comencé mi carrera brindando soporte a los sistemas de punto de venta como Micros Res 3700 y Aloha NCR. Posteriormente, desarrollé componentes y funcionalidades en VB.NET para dichos sistemas, participando en el ciclo completo del desarrollo: desde la toma de requerimientos y documentación, hasta las pruebas en conjunto con QA. Esta etapa me permitió comprender de primera mano la importancia de la estabilidad operativa en el entorno restaurantero."
      animateOn="view"
      sequential
      speed={10}
      maxIterations={2}
      characters="abdc1234"
      encryptedClassName="inter-400 text-sm text-indigo-600"
    />
  );
};

export default Job1;