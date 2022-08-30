package com.javaxp.basket.util;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.javaxp.basket.model.ComboOffer;
import com.javaxp.basket.model.DiscountOffer;
import com.javaxp.basket.model.Offer;
import com.javaxp.basket.model.Order;
import com.javaxp.basket.model.Product;

public class TestConstant {

	public static final BigDecimal TEN_PERCENT = new BigDecimal(10);
	public static final BigDecimal FIFTY_PERCENT = new BigDecimal(50);

	public static Map<String, Product> getDummyProductMap() {

		List<Product> products = new ArrayList<>();

		products.add(getSoup());
		products.add(getBread());
		products.add(getMilk());
		products.add(getApple());

		return products.stream()
				.collect(Collectors.toMap(product -> product.getName().toUpperCase(), product -> product));

	}

	private static Product getSoup() {
		return Product.builder().name("Soup").price(new BigDecimal(0.65)).unit("tin").build();
	}

	private static Product getBread() {
		return Product.builder().name("Bread").price(new BigDecimal(0.80)).unit("loaf").build();
	}

	private static Product getMilk() {
		return Product.builder().name("Milk").price(new BigDecimal(1.30)).unit("bottle").build();
	}

	private static Product getApple() {
		return Product.builder().name("Apple").price(new BigDecimal(1.00)).unit("bag").build();
	}

	public static List<Offer> getDummyOfferList() {
		List<Offer> offers = new ArrayList<>();

		Offer apple10PercentOff = new DiscountOffer("Apples 10% off", getApple(), TEN_PERCENT);

		Offer buy2TinsOfSoupGet50PercentOffOnBread = new ComboOffer("Bread 50% off", getSoup(), 2, getBread(),
				FIFTY_PERCENT);

		offers.add(apple10PercentOff);
		offers.add(buy2TinsOfSoupGet50PercentOffOnBread);

		return offers;
	}

	public static List<Order> getDummyOrderList1() {

		List<Order> dummyOrderList = new ArrayList<Order>();

		dummyOrderList.add(Order.builder().product(getApple()).quantity(1).build());
		dummyOrderList.add(Order.builder().product(getMilk()).quantity(1).build());
		dummyOrderList.add(Order.builder().product(getBread()).quantity(1).build());

		return dummyOrderList;

	}

	public static List<Order> getDummyOrderList2() {

		List<Order> dummyOrderList = new ArrayList<Order>();

		dummyOrderList.add(Order.builder().product(getSoup()).quantity(2).build());
		dummyOrderList.add(Order.builder().product(getBread()).quantity(1).build());

		return dummyOrderList;

	}

	public static Map<String, BigDecimal> getDummyOfferMap(boolean isAppleOffer, boolean isSoupOffer) {
		Map<String, BigDecimal> appliedOffer = new HashMap<>();

		if (isAppleOffer) {
			appliedOffer.put("Apples 10% off", new BigDecimal(0.1).negate());
		}

		if (isSoupOffer) {
			appliedOffer.put("Bread 50% off", new BigDecimal(0.4).negate());
		}

		return appliedOffer;
	};

}
