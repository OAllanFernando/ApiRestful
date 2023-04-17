package com.example.SpringApi.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity

@Data
public class Commit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    

    private String nome;

    private Date initialDate;

    private Date finalDate;

    private int commits;

    private String link;

    private String mensagem;
    

    
}
