package com.example.SpringApi.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//classe que responde a requisições, configurada atraves do @restcontroler
@RestController
public class index {
    
    @GetMapping("/hello")
    public String hello() {
        return "Olá mundo Spring, hoje é dia " + new Date();
    }
}