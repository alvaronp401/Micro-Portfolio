# ☕ Skill: Criando Endpoints REST Profissionais no Quarkus

No mundo real, não jogamos código direto no `Resource`. Seguimos uma estrutura clara.

## 🏗️ Anatomia de um Endpoint
1. **Annotations (@Path, @GET, @Produces)**: Definem o endereço e o formato da resposta.
2. **Injeção de Dependência (@Inject)**: Traz as regras de negócio de outras classes.
3. **Response Entity**: Nunca retorne o objeto puro; use `Response` para controlar os códigos HTTP (200, 201, 404, etc).

## 🚀 Exemplo Senior
```java
@Path("/v1/portfolio") // Versione sua API sempre!
@Produces(MediaType.APPLICATION_JSON) // Diz que retornamos JSON
@Consumes(MediaType.APPLICATION_JSON) // Diz que recebemos JSON
public class PortfolioResource {

    @Inject
    PortfolioService portfolioService; // Injeção de dependência

    @GET
    public Response listarProjetos() {
        return Response.ok(portfolioService.buscarTodos()).build();
        // .ok() -> HTTP 200
        // .build() -> Constrói o objeto Response final
    }
}
```

## 📝 Para o Notion
**Java - Como criar um endpoint** -> Utilize `@Path` para a rota, `@Inject` para o serviço e retorne `Response.ok(dados).build()`.
