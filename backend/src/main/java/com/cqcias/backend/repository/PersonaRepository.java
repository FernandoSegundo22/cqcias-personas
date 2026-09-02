package com.cqcias.backend.repository;

import com.cqcias.backend.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonaRepository extends JpaRepository<Persona, Integer> {

    List<Persona> findByEstatus(String estatus);
}