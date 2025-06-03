package com.revendaveiculos.backend.repositorios;

import com.revendaveiculos.backend.entidades.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Indica que esta interface é um componente de repositório Spring
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
}