import { useState, useEffect } from 'react'
import { projectService, type Project } from './services/projectService'
import './App.css'

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Agora o App apenas "pede" os dados para o especialista
    projectService.getProjects()
      .then(data => setProjects(data))
      .catch(err => console.error("Erro no componente:", err));
  }, []);

  return (
    <div className="container">
      <h1>Meu Portfólio Profissional</h1>
      
      <div className="project-list">
        {projects.length === 0 && <p>Carregando projetos do Java...</p>}
        
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="badge">{project.language}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
