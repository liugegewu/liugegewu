package com.example.demo.service.impl;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.UserEntity;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public List<UserEntity> selectUser() {
        return userDao.queryUser();
    }

    @Override
    public void addUser(UserEntity entity) {
         userDao.insertUser(entity);
    }

    @Override
    public void updateUser(UserEntity entity) {
         userDao.updateUser(entity);
    }

}
