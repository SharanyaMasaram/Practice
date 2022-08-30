package com.javaxp.basket.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Order {
	private Product product;
	private Integer quantity;
}
