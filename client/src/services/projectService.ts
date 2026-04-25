const API_URL = 'http://localhost:8080/v1';

// 1. O Contrato (Interface)
export interface Project {
  name: string;
  description: string;
  language: string;
}

/**
 * 2. O Serviço: Especialista em buscar dados de projetos.
 * Ele isola a lógica de fetch do resto da aplicação.
 */
export const projectService = {
  
  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(`${API_URL}/portfolio`);
      
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error("Falha ao buscar projetos no Service:", error);
      throw error; // Repassa o erro para quem chamou tratar
    }
  }

};
