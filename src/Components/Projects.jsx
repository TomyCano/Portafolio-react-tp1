
const Projects = ({ proyectos }) => {
  return (
    <section className="section future-section" id="proyectos">
      <div className="section-heading">
        <p className="eyebrow">Trabajos e ideas</p>
        <h2>Mis proyectos</h2>
      </div>

      <div className="future-grid">
        {proyectos.map((proyecto, indice) => (
          <article className="future-card" key={proyecto.nombre}>
            <span>{indice + 1}</span>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects