import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(()=>{
    console.log({isVisible});
  },[isVisible])
  return (
    <div
    ref={containerRef}
        // fade-up-delay-700
      className={`w-10/12 mx-auto mt-6 transition-opacity duration-300 mb-12 ${
        isVisible ? "opacity-100" : "opacity-0"
      } grid grid-cols-6 lg:gap-1 rounded-md`}
    >
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
