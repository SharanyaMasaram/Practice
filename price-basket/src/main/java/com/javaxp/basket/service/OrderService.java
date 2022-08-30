package com.javaxp.basket.service;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaxp.basket.container.BasketContainer;
import com.javaxp.basket.model.Order;

import lombok.Data;

@Service
@Data
public class OrderService {

	@Autowired
	private BasketContainer basketContainer;

	public void placeOrder(Order order) {
		basketContainer.addOrder(order);
		applyOffer();
	}

	private void applyOffer() {
		basketContainer.getOfferList().forEach(offer -> {
			BigDecimal discount = offer.getDiscount(basketContainer.getOrderList());
			if (discount.compareTo(BigDecimal.ZERO) < 0) {
				basketContainer.addApliedOffer(offer.getName(), discount);
			}
		});
	}

	public BigDecimal getSubTotal() {
		return basketContainer.getOrderList().stream()
				.map(order -> order.getProduct().getPrice().multiply(new BigDecimal(order.getQuantity())))
				.reduce(BigDecimal.ZERO, BigDecimal::add);
	}

	private BigDecimal getDiscountTotal() {
		return basketContainer.getAppliedOffer().values().stream().reduce(BigDecimal.ZERO, BigDecimal::add);
	}

	public BigDecimal getFinalTotal() {
		return getSubTotal().add(getDiscountTotal());
	}
}
