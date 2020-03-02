package com.zjut.bigraph.controller;

import com.zjut.bigraph.common.BException;
import com.zjut.bigraph.common.BigraphResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
public class BigraphExceptionHandler {
    @ExceptionHandler(value = Exception.class)
    public <T> BigraphResponse<T> exceptionHandler(Exception e) {
        if (e instanceof BException) {
            return new BigraphResponse<T>().isFail(e.getMessage());
        }
        return new BigraphResponse<T>().isFail(e.toString());
    }
}