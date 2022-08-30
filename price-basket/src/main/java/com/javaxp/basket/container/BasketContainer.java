package com.javaxp.basket.container;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.javaxp.basket.model.Offer;
import com.javaxp.basket.model.Order;
import com.javaxp.basket.model.Product;

import lombok.Data;

@Component
@Data
public class BasketContainer {

	private Map<String, Product> productMap;
	private List<Offer> offerList;

	private List<Order> orderList;
	private Map<String, BigDecimal> appliedOffer;

	public void addOrder(Order order) {
		orderList.add(order);
	}

	public void addApliedOffer(String offerName, BigDecimal amount) {
		appliedOffer.put(offerName, amount);
	}

}
