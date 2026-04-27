import { useState, useEffect } from "react"
import "./index.css";
import { projectService, type Project } from "./services/projectService";

export default function App() {

  const titulo = "Meu portifólio técnico!";

  const [likes, setLikes] = useState(0);

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    projectService.getProjects().then(data => {

      setProjects(data)
    })
      .catch(err => console.error('erro ao buscar:', err))
  }, []

  );

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-gray-200 md:bg-blue-700 lg:bg-slate-900'>
      <h1 className="text-6xl md:text-2xl lg:text-5xl font-bold text-center text-red-600 md:text-red-400 lg:text-blue-200 pb-6">{titulo}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl gap-4'>
        {projects.map((projeto, index) => (
          <div key={index} className='bg-white p-8 rounded-2xl border border-slate-100 flex flex-col gap-3 hover:scale-105 
          transition-transform cursor-pointer h-full'>
            <span className='text-[12px] font-black tracking-widest text-slate-400 uppercase '>Posição na lista {index}</span>
            <h2 className='text-xl font-black text-slate-600 leading-tight '>{projeto.name}</h2>
            <p className="text-slate-600 text-base font-medium flex-1">{projeto.description}</p>
            <p className='bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase w-fit'>{projeto.language}</p>
          </div>
        ))}
      </div>

      <p className='text-white font-bold p-4'>Likes: {likes}</p>
      <div className='flex flex-col md:flex-row gap-4 border border-black-900 md:w-auto lg:flex-row '>
        <button className='bg-blue-600 p-4 rounded-xl hover:scale-105 transition-transform text-white font-bold' onClick={() => setLikes(likes + 1)}>
          Curtir
        </button>
        <button className='bg-blue-600 p-4 rounded-xl hover:scale-105 transition-transform text-white font-bold' onClick={() => setLikes(likes - 1)}>
          Descurtir
        </button>
      </div>
    </div>
  )
}