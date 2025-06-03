package com.revendaveiculos.backend.repositorios;

import com.revendaveiculos.backend.entidades.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Indica que esta interface é um componente de repositório Spring
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
    // Spring Data JPA magic!
    // Ao estender JpaRepository<T, ID>, você ganha métodos CRUD prontos:
    // - save(T entity): Salva ou atualiza uma entidade
    // - findById(ID id): Busca uma entidade pelo ID
    // - findAll(): Lista todas as entidades
    // - deleteById(ID id): Deleta uma entidade pelo ID
    // - count(): Conta o número de entidades
    // E muito mais!
}