package com.zjut.bigraph.common;

import lombok.Data;

@Data
public class BaseResponse {
    protected boolean success;
    protected int errCode;
    protected String message;
}