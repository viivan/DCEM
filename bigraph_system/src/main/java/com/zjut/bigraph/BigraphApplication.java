package com.zjut.bigraph;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@MapperScan(basePackages = "package com.zjut.bigraph.mapper")
public class BigraphApplication {

	public static void main(String[] args) {
		SpringApplication.run(BigraphApplication.class, args);
	}

}
