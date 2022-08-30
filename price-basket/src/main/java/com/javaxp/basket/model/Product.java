package com.javaxp.basket.model;

import java.math.BigDecimal;

import com.javaxp.basket.util.BasketUtil;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Product {

	private String name;
	private BigDecimal price;
	private String unit;

	@Override
	public String toString() {
		return name + " - " + BasketUtil.roundOff(price) + " per " + unit;

	}
}
