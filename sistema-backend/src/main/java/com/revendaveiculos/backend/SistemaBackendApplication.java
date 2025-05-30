package com.revendaveiculos.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration; // Importe esta classe

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class}) // Adicione esta exclusão
public class SistemaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SistemaBackendApplication.class, args);
    }

}