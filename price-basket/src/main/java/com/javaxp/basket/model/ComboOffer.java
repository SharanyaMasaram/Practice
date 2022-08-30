package com.javaxp.basket.model;

import java.math.BigDecimal;
import java.util.List;

import com.javaxp.basket.util.BasketConstant;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class ComboOffer extends Offer {

	private Integer productQuantity;
	private Product targetProduct;
	private BigDecimal percentOff;

	public ComboOffer(String name, Product product, Integer productQuantity, Product targetProduct,
			BigDecimal percentOff) {
		super(name, product);
		this.productQuantity = productQuantity;
		this.targetProduct = targetProduct;
		this.percentOff = percentOff;
	}

	@Override
	public BigDecimal getDiscount(List<Order> orders) {

		int count = (int) orders.stream().filter(order -> order.getProduct().equals(getProduct())).count();

		if (count >= productQuantity) {

			int targetCount = (int) orders.stream().filter(order -> order.getProduct().equals(targetProduct)).count();

			if (targetCount >= 1) {

				BigDecimal discountAmount = BigDecimal.ZERO;

				int eligbleOfferCount = count / productQuantity;

				for (int i = 0; i < eligbleOfferCount; i++) {
					discountAmount = discountAmount
							.add(targetProduct.getPrice().multiply(percentOff).divide(BasketConstant.ONE_HUNDRED));
				}

				return discountAmount.negate();

			} else {
				return BigDecimal.ZERO;
			}

		} else {
			return BigDecimal.ZERO;
		}

	}

	@Override
	public String toString() {
		return super.getName();
	}

}
