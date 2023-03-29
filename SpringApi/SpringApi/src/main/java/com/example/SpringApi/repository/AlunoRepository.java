package com.example.SpringApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringApi.entity.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno,Long>{
    

}
