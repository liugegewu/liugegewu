package com.example.demo.dao;

import com.example.demo.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserDao {
//查询
    List<UserEntity> queryUser();

    //新增
    List<UserEntity> insertUser();

    //修改
    UserEntity updateUser();

    //删除
    Integer deleteUser();

}
