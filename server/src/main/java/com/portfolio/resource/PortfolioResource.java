package com.portfolio.resource;

import com.portfolio.model.Project;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import java.util.Arrays;

@Path("/v1/portfolio")
public class PortfolioResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Project> listarProjetos() {
        return Arrays.asList(
            new Project("Meu Portfólio", "Sistema fullstack com React e Quarkus", "Java"),
            new Project("API de Vendas", "Backend para controle de estoque", "Java"),
            new Project("App Mobile", "Interface moderna para usuários", "TypeScript")
        );
    }
}
