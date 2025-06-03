package com.revendaveiculos.backend.controladores;

import com.revendaveiculos.backend.entidades.Veiculo;
import com.revendaveiculos.backend.repositorios.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController 
@RequestMapping("/api/veiculos") 
@CrossOrigin(origins = "http://localhost:4200") 

public class VeiculoController {

    @Autowired // Injeta uma instância do VeiculoRepository (Spring Data JPA)
    private VeiculoRepository veiculoRepository;

    // Endpoint para listar todos os veículos (READ all)
    @GetMapping
    public List<Veiculo> listarTodos() {
        return veiculoRepository.findAll();
    }

    // Endpoint para buscar um veículo por ID (READ by ID)
    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> buscarPorId(@PathVariable Long id) {
        Optional<Veiculo> veiculo = veiculoRepository.findById(id);
        return veiculo.map(ResponseEntity::ok) // Se encontrar, retorna 200 OK com o veículo
                      .orElse(ResponseEntity.notFound().build()); // Se não encontrar, retorna 404 Not Found
    }

    // Endpoint para cadastrar um novo veículo (CREATE)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED) // Retorna status 201 Created em caso de sucesso
    public Veiculo cadastrar(@RequestBody Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    // Endpoint para atualizar um veículo existente (UPDATE)
    @PutMapping("/{id}")
    public ResponseEntity<Veiculo> atualizar(@PathVariable Long id, @RequestBody Veiculo veiculoDetalhes) {
        Optional<Veiculo> veiculoExistente = veiculoRepository.findById(id);

        if (veiculoExistente.isPresent()) {
            Veiculo veiculo = veiculoExistente.get();
            // Atualiza os campos do veículo existente com os detalhes recebidos
            veiculo.setMarca(veiculoDetalhes.getMarca());
            veiculo.setModelo(veiculoDetalhes.getModelo());
            veiculo.setAno(veiculoDetalhes.getAno());
            veiculo.setCor(veiculoDetalhes.getCor());
            veiculo.setPreco(veiculoDetalhes.getPreco());
            veiculo.setQuilometragem(veiculoDetalhes.getQuilometragem());
            veiculo.setTipoCombustivel(veiculoDetalhes.getTipoCombustivel());
            veiculo.setCambio(veiculoDetalhes.getCambio());
            veiculo.setPlaca(veiculoDetalhes.getPlaca());
            veiculo.setStatus(veiculoDetalhes.getStatus());
            veiculo.setDescricao(veiculoDetalhes.getDescricao());

            Veiculo veiculoAtualizado = veiculoRepository.save(veiculo);
            return ResponseEntity.ok(veiculoAtualizado); // Retorna 200 OK com o veículo atualizado
        } else {
            return ResponseEntity.notFound().build(); // Retorna 404 Not Found se o veículo não existir
        }
    }

    // Endpoint para deletar um veículo (DELETE)
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT) // Retorna status 204 No Content em caso de sucesso (sem corpo de resposta)
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (veiculoRepository.existsById(id)) {
            veiculoRepository.deleteById(id);
            return ResponseEntity.noContent().build(); // Retorna 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // Retorna 404 Not Found
        }
    }
}