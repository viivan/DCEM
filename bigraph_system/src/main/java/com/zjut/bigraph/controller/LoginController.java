package com.zjut.bigraph.controller;

import com.zjut.bigraph.common.BaseResponse;
import com.zjut.bigraph.dto.UserDTO;
import com.zjut.bigraph.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@Validated
@CrossOrigin
@RequestMapping(value = "/api/v1/login")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LoginController {

    private final UserService userService;

    @PostMapping("")
    public BaseResponse login(HttpServletRequest request, @RequestBody @Validated UserDTO userDTO) {
        HttpSession session = request.getSession();
        return userService.login(userDTO, session);
    }
}
