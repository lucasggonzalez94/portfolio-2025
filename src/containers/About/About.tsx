import Window from "../../components/Window/Window";
import { yearsSince } from "../../lib/utils";

const About = () => {
  const years = yearsSince(new Date(2021, 3, 1));
  return (
    <Window title="About" text>
      <p>
        Soy Desarrollador Full Stack con más de {years} años de experiencia
        creando soluciones escalables y mantenibles con tecnologías como
        React.js, Next.js y Node.js. He liderado y colaborado en proyectos para
        sectores como fintech y turismo, mejorando tiempos de respuesta y la
        estabilidad del sistema. Me enfoco en clean code, buenas prácticas
        (SOLID) y la entrega de valor real al negocio.
      </p>
    </Window>
  );
};

export default About;
