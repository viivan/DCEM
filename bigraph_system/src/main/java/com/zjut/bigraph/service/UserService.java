package com.zjut.bigraph.service;

import com.zjut.bigraph.common.BaseResponse;
import com.zjut.bigraph.common.BigraphResponse;
import com.zjut.bigraph.dto.UserDTO;
import com.zjut.bigraph.mapper.UserMapper;
import com.zjut.bigraph.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {
    private final UserMapper userMapper;

    public User get(String userId) {
        return userMapper.getUser(userId);
    }

    public BaseResponse login(UserDTO userDTO, HttpSession session) {
        User user = this.get(userDTO.getUserId());
        if (user == null || !user.getUserPassword().equals(userDTO.getUserPassword())) {
            return new BigraphResponse<>().isFail("login failed");
        }
        session.setAttribute("login", true);
        return new BigraphResponse<>();
    }
}
