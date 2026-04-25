# ⚛️ Skill: Componentes React de Alta Performance

Um componente "Senior" é previsível, tipado e isolado.

## 🏗️ Anatomia do Componente
1. **Interface de Props**: Sempre defina o que o componente recebe.
2. **Componente Funcional**: Use `export const` para consistência.
3. **Desestruturação**: Pegue as propriedades direto no argumento.

## 🚀 Exemplo Senior
```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  isCompleted?: boolean; // O '?' indica que é opcional
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, isCompleted = false }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {isCompleted && <span>✅ Finalizado</span>}
    </div>
  );
};
```

## 📝 Para o Notion
**React - Como criar um componente** -> Defina uma `interface` para as Props, use `React.FC` para tipar o componente e desestruture as propriedades no argumento.
