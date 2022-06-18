package com.example.demo.controller;

import com.example.demo.entity.UserEntity;
import com.example.demo.service.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/app")
public class testController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value="/test",method = RequestMethod.POST)
    public List<UserEntity> test(UserEntity userList){
        System.out.println("``````````"+userList);

        return userService.selectUser();
    }

}