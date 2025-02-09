const Projects = () => {
  return (
    <div className="w-10/12 mx-auto mt-6 fade-up-delay-700 mb-12 grid grid-cols-6 lg:gap-1 rounded-md">
      <p className="p-4 roboto-flex-400 col-span-6 lg:col-span-3 border border-neutral-400 rounded-t-lg lg:rounded-lg bg-white shadow-md shadow-zinc-500">
        <span className="markazi-text-700 text-zinc-700 text-2xl">
          <strong>Chat y chatbot Whatsapp</strong>
        </span>
        <br />
        <br />
        Desarrollé un chatbot de WhatsApp integrado con un CRM utilizando React,
        Next.js y ASP.NET Framework, diseñado para optimizar la atención al
        cliente y la gestión de leads. Implementé la API de Vonage para
        gestionar la comunicación en tiempo real y utilicé Botpress como motor
        de inteligencia artificial para crear flujos de conversación
        inteligentes y personalizados. El chatbot permitió automatizar
        respuestas a consultas frecuentes, programar entregas y cotizar producto
        con el CRM, mejorando la eficiencia operativa y la experiencia del
        usuario.
      </p>

      <img
        alt="crm-wa"
        src="/crm-wa.png"
        className="w-full h-full col-span-6 lg:col-span-3 rounded-b-lg lg:rounded-md shadow-md shadow-zinc-500"
      />
    </div>
  );
};

export default Projects;
