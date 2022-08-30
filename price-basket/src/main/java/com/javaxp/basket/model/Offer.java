package com.javaxp.basket.model;

import java.math.BigDecimal;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public abstract class Offer {
	private String name;
	private Product product;

	public abstract BigDecimal getDiscount(List<Order> orders);
}
