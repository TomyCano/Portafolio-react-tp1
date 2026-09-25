const Skills = ({ habilidades }) => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Lo que estoy aprendiendo</p>
        <h2>Habilidades y tecnologias</h2>
      </div>

      <div className="skills-grid">
        {habilidades.map((habilidad, indice) => (
          <article className="skill-card" key={habilidad}>
            <span>{indice + 1}</span>
            <h3>{habilidad}</h3>
            <p>Tecnologia que estoy aprendiendo y usando en mis practicas.</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills