package com.revendaveiculos.backend.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Year;

@Entity // Indica que esta classe é uma entidade JPA e será mapeada para uma tabela no banco de dados
@Data // Anotação do Lombok para gerar getters, setters, toString, equals e hashCode
@NoArgsConstructor // Anotação do Lombok para gerar construtor sem argumentos
@AllArgsConstructor // Anotação do Lombok para gerar construtor com todos os argumentos
public class Veiculo {

    @Id // Indica que este campo é a chave primária da tabela
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Configura a geração automática do ID pelo banco de dados
    private Long id;

    private String marca;
    private String modelo;
    private Integer ano; // Ano pode ser Integer
    private String cor;
    private BigDecimal preco; // Usar BigDecimal para valores monetários é uma boa prática
    private Integer quilometragem;
    private String tipoCombustivel;
    private String cambio;
    private String placa;
    private String status; // Ex: "Disponível", "Vendido", "Reservado"
    private String descricao;
    // private String urlImagemPrincipal; // Podemos adicionar upload de imagens depois

    // Por enquanto, vamos manter simples. Podemos adicionar relacionamentos depois.
}