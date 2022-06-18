package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo1")
public class UserController {

    @RequestMapping("/printHello")
    public String sayHello(){
        return "Hello laji";
    }

}
