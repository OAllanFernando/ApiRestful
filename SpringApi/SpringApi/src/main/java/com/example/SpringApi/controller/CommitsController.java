package com.example.SpringApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringApi.entity.Commit;

import com.example.SpringApi.service.CommitsService;



@RestController
@RequestMapping("/commits")
@CrossOrigin
public class CommitsController {
    @Autowired
    private CommitsService commitsService;

    @GetMapping
    public List<Commit> listarTodos(){
        return commitsService.listarTodos();
    }

    @PostMapping
    public Commit salvar(@RequestBody Commit commit){
        return commitsService.salvar(commit);
    }

    //localhost:8080/Commit/1 - com o verbo delete
    @DeleteMapping("/{id}")
    public void excluir(@PathVariable ("id") Long id){
        commitsService.excluir(id);
    }

}
