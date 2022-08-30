package com.javaxp.basket.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaxp.basket.container.BasketContainer;
import com.javaxp.basket.model.ComboOffer;
import com.javaxp.basket.model.DiscountOffer;
import com.javaxp.basket.model.Offer;
import com.javaxp.basket.model.Product;

import lombok.Data;

@Service
@Data
public class BasketInitializer {

	public static final BigDecimal TEN_PERCENT = new BigDecimal(10);
	public static final BigDecimal FIFTY_PERCENT = new BigDecimal(50);

	@Autowired
	BasketContainer basketContainer;

	@PostConstruct
	public void initialize() {
		loadProduct();
		loadOffer();
		basketContainer.setOrderList(new ArrayList<>());
		basketContainer.setAppliedOffer(new HashMap<>());
	}

	private void loadOffer() {
		List<Offer> offers = new ArrayList<>();

		Offer apple10PercentOff = new DiscountOffer("Apples 10% off", basketContainer.getProductMap().get("APPLE"),
				TEN_PERCENT);

		Offer buy2TinsOfSoupGet50PercentOffOnBread = new ComboOffer("Bread 50% off",
				basketContainer.getProductMap().get("SOUP"), 2, basketContainer.getProductMap().get("BREAD"),
				FIFTY_PERCENT);

		offers.add(apple10PercentOff);
		offers.add(buy2TinsOfSoupGet50PercentOffOnBread);

		basketContainer.setOfferList(offers);
	}

	private void loadProduct() {
		List<Product> products = new ArrayList<>();

		products.add(Product.builder().name("Soup").price(BigDecimal.valueOf(0.65)).unit("tin").build());
		products.add(Product.builder().name("Bread").price(BigDecimal.valueOf(0.80)).unit("loaf").build());
		products.add(Product.builder().name("Milk").price(BigDecimal.valueOf(1.30)).unit("bottle").build());
		products.add(Product.builder().name("Apple").price(BigDecimal.valueOf(1.00)).unit("bag").build());

		basketContainer.setProductMap(products.stream()
				.collect(Collectors.toMap(product -> product.getName().toUpperCase(), product -> product)));
	}
}
