package com.javaxp.basket.model;

import java.math.BigDecimal;
import java.util.List;

import com.javaxp.basket.util.BasketConstant;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class DiscountOffer extends Offer {

	private BigDecimal discountPercentage;

	public DiscountOffer(String name, Product product, BigDecimal discountPercentage) {
		super(name, product);
		this.discountPercentage = discountPercentage;
	}

	@Override
	public BigDecimal getDiscount(List<Order> orders) {

		return orders.stream().filter(order -> order.getProduct().equals(this.getProduct()))
				.map(order -> order.getProduct().getPrice()).reduce(BigDecimal.ZERO, BigDecimal::add)
				.multiply(discountPercentage).divide(BasketConstant.ONE_HUNDRED).negate();

	}

	public String toString() {
		return super.getName();
	}

}
