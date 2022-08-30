package com.javaxp.basket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.javaxp.basket.service.BasketService;

@SpringBootApplication
public class BasketApplication implements CommandLineRunner {

	@Autowired
	private BasketService basketService;

	public static void main(String[] args) {
		SpringApplication.run(BasketApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		basketService.showOptions();
	}
}
