package com.example.SpringApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringApi.entity.Aluno;
import com.example.SpringApi.repository.AlunoRepository;

@Service
public class AlunoService {


    // crio o metodo repository chamando o @autowired, assim toda vez que eu utilizo chamada de banco ele cria nova instancia, isso significa que a instancia será gerenciada pelo Spring
    @Autowired
    private AlunoRepository alunoRepository;

    public List<Aluno> listarTodos(){
        return alunoRepository.findAll();
    }


    // O save and flush salva no mesmo momento no banco de dados, diretamente. Somente o save salva na memoria e depois manda ao banco
    public Aluno salvar(Aluno aluno){
        return alunoRepository.saveAndFlush(aluno);
    }

    public Aluno atualizar(Aluno aluno){
        return alunoRepository.saveAndFlush(aluno);
    }
    
    public void excluir(Long id){
        Aluno aluno = alunoRepository.findById(id).get();
        alunoRepository.delete(aluno);
    }



}
