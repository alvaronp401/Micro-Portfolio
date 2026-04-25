# 🧼 Skill: Clean Code e Nomenclatura Senior

Código é lido muito mais vezes do que escrito. Escreva para humanos.

## 📏 Regras de Ouro
1. **Nomes Descritivos**: Fuja de `a`, `b`, `data`, `info`. Use `customerList`, `calculateOrderTotal`.
2. **Funções Pequenas**: Uma função deve fazer apenas UMA coisa (Single Responsibility).
3. **Sem Comentários Óbvios**: Se você precisa comentar o que o código faz, o código não está claro o suficiente. Comente o "porquê", não o "como".

## 🚀 Exemplo Senior
```java
// RUIM
public void p(Data d) { ... }

// BOM
public void processarPedido(PedidoDTO pedidoParaProcessar) {
    validarEstoque(pedidoParaProcessar);
    salvarNoBanco(pedidoParaProcessar);
}
```

## 📝 Para o Notion
**Geral - Como escrever código limpo** -> Use nomes descritivos em camelCase para variáveis e métodos, e siga o princípio de responsabilidade única (uma função = uma ação).
