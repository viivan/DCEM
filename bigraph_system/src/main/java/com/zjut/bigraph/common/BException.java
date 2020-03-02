package com.zjut.bigraph.common;

import java.util.Map;

public class BException extends RuntimeException  {
    private int httpStatus;
    private String code;

    public BException(String message) {
        super(message);
        this.httpStatus = 400;
        String name = this.getClass().getSimpleName();
        if (this.getClass().getName().contains("$")) {
            String[] parts = this.getClass().getCanonicalName().split("\\.");
            name = parts[parts.length - 2] + "." + parts[parts.length - 1];
        }

        this.code = name;
    }
}
