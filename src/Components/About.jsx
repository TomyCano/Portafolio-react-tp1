import { useState } from 'react'

const About = ({persona}) => {
 
  const [mostrarMas, setMostrarMas] = useState(false)

  const cambiarTexto = () => {
    setMostrarMas(!mostrarMas)
  }

  return (
    <section className="section" id="sobre-mi">
      <div className="section-heading">
        <p className="eyebrow">Sobre mi</p>
        <h2>Perfil profesional</h2>
      </div>

      <div className="about-layout">
        <article className="panel">
          <h3>Quien soy</h3>
          <p>
            Soy estudiante de la Tecnicatura en Programacion en la Universidad
            Tecnologica Nacional de Tucuman. Me interesa el desarrollo web,
            las bases de datos y crear herramientas que ayuden a resolver
            problemas cotidianos.
          </p>

          {mostrarMas && (
            <p>
              Mi objetivo es seguir aprendiendo y participar en proyectos donde
              pueda aplicar lo que estudio y trabajar en equipo.
            </p>
          )}

          <button className="skill-filter" type="button" onClick={cambiarTexto}>
            {mostrarMas ? 'Ver menos' : 'Ver más'}
          </button>
        </article>

        <div className="stats" aria-label="Datos destacados">
          <div className="stat"><strong>{persona.edad}</strong><span>Años</span></div>
          <div className="stat"><strong>2</strong><span>Año de carrera</span></div>
          <div className="stat"><strong>6</strong><span>Habilidades</span></div>
        </div>
      </div>
    </section>
  )
}

export default About