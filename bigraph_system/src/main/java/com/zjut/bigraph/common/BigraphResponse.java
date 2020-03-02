package com.zjut.bigraph.common;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class BigraphResponse<T> extends BaseResponse {
    private T data;

    public BigraphResponse(T data) {
        this.data = data;
        this.errCode = 0;
        this.success = true;
    }

    public BigraphResponse() {
        this.errCode = 0;
        this.success = true;
    }

    public BigraphResponse<T> isFail(String message) {
        this.success = false;
        this.message = message;
        return this;
    }
}