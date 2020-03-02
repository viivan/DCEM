package com.zjut.bigraph.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zjut.bigraph.common.BaseResponse;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Slf4j
@Component
@Aspect
public class ControllerAspect {

    @Pointcut("execution(* com.zjut.bigraph.controller..*(..))")
    public void controllerPointCut() {
    }

    @Before("controllerPointCut()")
    public void before() throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        HttpServletRequest request =
                ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
        log.info("\n\tRequest info\n\tRemote Addr: {}\n\tRequest URL: {}\n\tMethod: {}\n\tHeaders: {}\n\tParameters: {}",
                request.getRemoteAddr(), request.getRequestURL(), request.getMethod(), getHeaders(request),
                mapper.writeValueAsString(request.getParameterMap()));

    }

    @AfterReturning(returning = "baseResponse", value = "controllerPointCut()")
    public void afterReturning(JoinPoint point, BaseResponse baseResponse) {
        ObjectMapper mapper = new ObjectMapper();
        HttpServletRequest request =
                ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
        log.info("\n\tResponse info\n\tRemote Addr: {}\n\tRequest URL: {}\n\tController Method: {},\n\tResponse: {}\n\t",
                request.getRemoteAddr(), request.getRequestURL(), point.getSignature().getName(), baseResponse);
    }

    @AfterThrowing(throwing = "e", value = "controllerPointCut()")
    public void afterThrowing(JoinPoint point, Exception e) {
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        e.printStackTrace(printWriter);
        HttpServletRequest request =
                ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
        log.info("\n\tException info\n\tRemote Addr: {}\n\tRequest URL: {}\n\tController Method : {},\n\tException: {}\n\t",
                request.getRemoteAddr(), request.getRequestURL(), point.getSignature().getName(), stringWriter.toString());
        printWriter.close();
    }

    public Map<String, String> getHeaders(HttpServletRequest request) {
        Enumeration<String> headerNames = request.getHeaderNames();
        Map<String, String> headers = new HashMap<>();
        while (headerNames.hasMoreElements()) {
            String name = headerNames.nextElement();
            headers.put(name, request.getHeader(name));
        }
        return headers;
    }
}
