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

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    private String marca;
    private String modelo;
    private Integer ano;
    private String cor;
    private BigDecimal preco; 
    private String tipoCombustivel;
    private String cambio;
    private String placa;
    private String status; 
    private String descricao;
}