package com.toyproject.todolist.service;


import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;

import java.util.List;

public interface UserService {
    RespUserDto login(ReqUserDto userDto);
}
