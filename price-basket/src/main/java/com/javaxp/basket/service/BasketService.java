package com.javaxp.basket.service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.javaxp.basket.container.BasketContainer;
import com.javaxp.basket.model.Order;
import com.javaxp.basket.util.BasketUtil;

@Service
public class BasketService {

	@Autowired
	private BasketContainer basketContainer;

	@Autowired
	private OrderService orderService;

	public static final String POUND_SYMBOL = "£";
	public static final int DEFAULT_QUANTITY = 1;

	public void showOptions() {

		try (Scanner scanner = new Scanner(System.in)) {

			while (true) {
				System.out.println("==========OPTIONS==========");
				System.out.print("1. Show Products | ");
				System.out.print("2. Show Offers | ");
				System.out.print("3. Take Order | ");
				System.out.print("4. Show Basket | ");
				System.out.println("x. Exit System");
				System.out.print("Option: ");

				String option = scanner.next();
				switch (option) {
				case "1":
					showProducts();
					break;
				case "2":
					showOffers();
					break;
				case "3":
					takeOrder(scanner);
					break;
				case "4":
					showBasket();
					break;
				case "x":
					break;
				default:
					System.out.println("Invalid option, please re-enter.");
				}

				if ("x".equals(option)) {
					break;
				}
			}
		}

	}

	private void showProducts() {
		System.out.println("==========PRODUCT==========");
		if (!CollectionUtils.isEmpty(basketContainer.getProductMap())) {
			basketContainer.getProductMap().values().forEach(System.out::println);
		} else {
			System.out.println("No Products found!");
		}
	}

	private void showOffers() {
		System.out.println("==========OFFERS==========");
		if (!CollectionUtils.isEmpty(basketContainer.getOfferList())) {
			basketContainer.getOfferList().forEach(System.out::println);
		} else {
			System.out.println("No Offers found!");
		}
	}

	private void takeOrder(Scanner scanner) {
		System.out.print("Enter products: ");

		scanner.nextLine();

		List<String> productsName = Arrays.asList(StringUtils.split(scanner.nextLine()));

		productsName.forEach(product -> {
			if (basketContainer.getProductMap().containsKey(product.toUpperCase())) {
				System.out.println("Adding.. " + product);
				orderService
						.placeOrder(Order.builder().product(basketContainer.getProductMap().get(product.toUpperCase()))
								.quantity(DEFAULT_QUANTITY).build());
			} else {
				System.out.println("Invalid product.. " + product);
			}
		});

		showBasket();
	}

	private void showBasket() {
		System.out.println("==========BASKET==========");
		if (!basketContainer.getOrderList().isEmpty()) {
			basketContainer.getOrderList().stream()
					.collect(Collectors.groupingBy(Order::getProduct, Collectors.summingInt(Order::getQuantity)))
					.forEach((product, totalQuantity) -> {
						System.out.println(product.getName() + " x " + totalQuantity + " = "
								+ BasketUtil.roundOff(product.getPrice().multiply(new BigDecimal(totalQuantity))));
					});
			showTotal();
		} else {
			System.out.println("No Items in Basket!");
		}
	}

	private void showTotal() {
		System.out.println("--------------------------");
		System.out.println("Subtotal: " + POUND_SYMBOL + BasketUtil.roundOff(orderService.getSubTotal()));
		showDiscount();
		System.out.println("--------------------------");
		System.out.println("Total: " + POUND_SYMBOL + BasketUtil.roundOff(orderService.getFinalTotal()));
	}

	private void showDiscount() {
		if (basketContainer.getAppliedOffer().isEmpty()) {
			System.out.println("(no offers available)");
		} else {
			basketContainer.getAppliedOffer()
					.forEach((offerName, value) -> System.out.println(offerName + ": " + BasketUtil.roundOff(value)));
		}
	}
}
