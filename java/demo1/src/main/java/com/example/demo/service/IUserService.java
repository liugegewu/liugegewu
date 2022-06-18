package com.example.demo.service;

import com.example.demo.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IUserService {

    List<UserEntity> selectUser();

}
