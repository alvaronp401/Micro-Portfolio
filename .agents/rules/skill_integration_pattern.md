# 🔗 Skill: Integração Fullstack (Fetch & CORS)

Conectar o React ao Quarkus exige cuidado com a segurança e com a estrutura dos dados.

## 🏗️ O Fluxo de Dados
1. **Quarkus (CORS)**: Você deve autorizar o endereço do React (`localhost:5173`) a acessar a API.
2. **React (Service Layer)**: Não faça chamadas `fetch` dentro do componente. Crie uma pasta `services/`.
3. **Tipagem Dupla**: O que o Java retorna deve ser mapeado em uma `interface` no TypeScript.

## 🚀 Exemplo Senior (React Service)
```typescript
const API_URL = "http://localhost:8080/v1";

export const getProjetos = async (): Promise<Projeto[]> => {
  const response = await fetch(`${API_URL}/portfolio`);
  if (!response.ok) throw new Error("Erro ao buscar projetos");
  return response.json();
};
```

## 📝 Para o Notion
**Integração - Como conectar React e Java** -> Configure o CORS no Quarkus e use uma camada de `services` no React para isolar as chamadas de API com `async/await`.
