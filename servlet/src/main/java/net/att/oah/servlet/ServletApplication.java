package net.att.oah.servlet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ServletApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(ServletApplication.class, args);
	}

}
