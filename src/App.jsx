import Home from "./Pages/Home"

const App = () => {
  const persona={
    nombre:'Tomas Cano',
    edad:20,
    universidad:'UTN Tucuman',
    carrera:'Tecnicatura en Programacion'
  }
  const profesion='Estudiante de Programacion'
  const habilidades=['HTML','CSS','JavasCript','React','MySQL','Redis','C#']
  const proyectos=[
    {
      nombre:'gestor de empleados',
      descripcion:'sistema para organizar tareas,consultar estadisticas y comparar perfiles de ingresantes'
    },
    {
      nombre:'Portafolio personal',
      descripcion:'Una pagina para presentar mi perfil, las tegnologias q uso y mis proyectos'
    }
  ]
  return (
    <div>
      <Home
      persona={persona}
      profesion={profesion}
      habilidades={habilidades}
      proyectos={proyectos}/>
      
    </div>
    );
}
 
export default App;