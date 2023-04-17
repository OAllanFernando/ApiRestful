package com.example.SpringApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringApi.entity.Commit;
import com.example.SpringApi.repository.CommitsRepository;

@Service
public class CommitsService {

    @Autowired
    private CommitsRepository commitsRepository;

    public List<Commit> listarTodos(){
        return commitsRepository.findAll();
    }

    public Commit salvar (Commit commit){
        return commitsRepository.saveAndFlush(commit);

    }

    public Commit atualizar(Commit commit){
        return commitsRepository.saveAndFlush(commit);
    }
    
    public void excluir (Long id){
        Commit commit = commitsRepository.findById(id).get();
        commitsRepository.delete(commit);
    }
}
