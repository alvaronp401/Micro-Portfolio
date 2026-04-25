package com.portfolio.model;

/**
 * Esta classe é o nosso "POJO". 
 * Ela define a estrutura de um projeto no nosso sistema.
 */
public class Project {

    // Campos privados: Só podem ser mexidos por métodos desta classe.
    private String name;
    private String description;
    private String language;

    // Construtor: O "nascimento" do objeto.
    public Project(String name, String description, String language) {
        this.name = name;
        this.description = description;
        this.language = language;
    }

    // Getters: Permitem que o Quarkus leia os dados para transformar em JSON.
    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getLanguage() {
        return language;
    }

    // Setters: Permitem alterar os dados se necessário.
    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}
