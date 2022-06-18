package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
public class UserEntity {

        private int userCode;

        private int age;

        private int id;

        private String address;

        private String sex;

        private String userName;

        @DateTimeFormat(pattern = "yyyy-MM-dd")
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDate birthDay;

        @Override
        public String toString() {
            return "UserEntity{" +
                    "userCode=" + userCode +
                    ", age=" + age +
                    ", id=" + id +
                    ", address='" + address + '\'' +
                    ", sex='" + sex + '\'' +
                    ", userName='" + userName + '\'' +
                    ", birthDay=" + birthDay +
                    '}';
        }

}
