const Description = () => {
  return (
    <div className="w-10/12 mx-auto mt-24 border border-neutral-400 rounded-lg fade-up bg-white grid grid-cols-6 overflow-hidden shadow-md shadow-zinc-500">
      <div className="block mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center lg:float-start col-span-6 lg:col-span-2">
        <img
          src="/descripcion_yo.webp"
          alt="codigo js"
          className="w-full h-full"
        />
      </div>

      <section className="p-4 lg:p-6 col-span-6 lg:col-span-4">
        <p className="markazi-text-700 text-zinc-700 text-3xl">
          <strong>A cerca de mi...</strong>
        </p>
        <br />
        <p className="roboto-flex-400 text-zinc-800">
          Soy un desarrollador FullStack con experiencia en el sector
          farmacéutico, retail y de servicios de alimentos. Mi especialización
          radica en el desarrollo, implementación y optimización de sistemas
          internos empresariales, como ERP y CRM, con el objetivo de mejorar la
          eficiencia operativa, la toma de decisiones basada en datos y la
          automatización de procesos clave. He trabajado en la creación de
          soluciones tecnológicas que permiten a las empresas optimizar su flujo
          de trabajo, integrar información de múltiples áreas y mejorar la
          experiencia del usuario interno a través de herramientas
          personalizadas y escalables. Además, tengo experiencia en el análisis
          de rendimiento de sistemas, garantizando su estabilidad, seguridad y
          capacidad de adaptación a las necesidades cambiantes del negocio,
          gestión documental bajo estándares ISO, automatización de procesos y
          desarrollo de soluciones para e-commerce. Cuento con habilidades en
          ASP.NET, C#, python, SQL Server, PostgreSQL, React.js, y vue.js, entre
          otras tecnologías. He tenido colaboración con equipos
          multidisiplinario sean actores del proyecto como es el caso de
          diseñadores UX, diseñadores UI, analistas SRE, analistas de QA como
          con interesados del producto final como agentes KAM's, gerentes de
          marketing, gerentes de areas y directores quienes hicieron uso u
          ofrecieron el producto como solución. Me considero una persona
          analítica, organizada y con un fuerte sentido de urgencia, siempre
          enfocado en aportar soluciones eficientes e innovadoras a los
          proyectos en los que participo.
        </p>
      </section>
    </div>
  );
};

export default Description;
