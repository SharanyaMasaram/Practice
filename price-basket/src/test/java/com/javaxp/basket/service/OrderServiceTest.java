package com.javaxp.basket.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.javaxp.basket.container.BasketContainer;
import com.javaxp.basket.service.OrderService;
import com.javaxp.basket.util.TestConstant;
import com.javaxp.basket.util.TestHelper;

@RunWith(MockitoJUnitRunner.class)
public class OrderServiceTest {

	@InjectMocks
	private OrderService orderService;

	@Mock
	private BasketContainer basketContainer;

	@Test
	public void testGetSubTotalWhenNoOrderInBasketThenReturnZero() {
		BigDecimal subTotal = orderService.getSubTotal();

		assertEquals(BigDecimal.ZERO, subTotal);
	}

	@Test
	public void testGetSubTotalWhenOrderAddedInBasketThenReturnValue() {
		when(basketContainer.getOrderList()).thenReturn(TestConstant.getDummyOrderList1());

		BigDecimal subTotal = orderService.getSubTotal();

		assertEquals(TestHelper.roundOff(new BigDecimal(3.10)), TestHelper.roundOff(subTotal));
	}

	@Test
	public void testGetFinalTotalWhenNoOrderInBasketThenReturnZero() {
		BigDecimal finalTotal = orderService.getFinalTotal();

		assertEquals(BigDecimal.ZERO, finalTotal);
	}

	@Test
	public void testGetFinalTotalWhenOrderAddedInBasketAndNoOffersThenReturnValue() {
		when(basketContainer.getOrderList()).thenReturn(TestConstant.getDummyOrderList1());
		BigDecimal finalTotal = orderService.getFinalTotal();

		assertEquals(TestHelper.roundOff(new BigDecimal(3.10)), TestHelper.roundOff(finalTotal));
	}

	@Test
	public void testGetFinalTotalWhenOrderAddedInBasketAndAppleTenPercentOffThenReturnValue() {

		when(basketContainer.getOrderList()).thenReturn(TestConstant.getDummyOrderList1());
		when(basketContainer.getAppliedOffer()).thenReturn(TestConstant.getDummyOfferMap(true, false));
		BigDecimal finalTotal = orderService.getFinalTotal();

		assertEquals(TestHelper.roundOff(new BigDecimal(3)), TestHelper.roundOff(finalTotal));
	}

	@Test
	public void testGetFinalTotalWhenOrderAddedInBasketAndTwoTinSoupOfferThenReturnValue() {
		when(basketContainer.getOrderList()).thenReturn(TestConstant.getDummyOrderList2());
		when(basketContainer.getAppliedOffer()).thenReturn(TestConstant.getDummyOfferMap(false, true));
		BigDecimal finalTotal = orderService.getFinalTotal();

		assertEquals(TestHelper.roundOff(new BigDecimal(1.7)), TestHelper.roundOff(finalTotal));
	}

	@Test
	public void testGetFinalTotalWhenOrderAddedInBasketAndMultiOfferThenReturnValue() {
		when(basketContainer.getOrderList()).thenReturn(
				Stream.concat(TestConstant.getDummyOrderList1().stream(), TestConstant.getDummyOrderList2().stream())
						.collect(Collectors.toList()));
		when(basketContainer.getAppliedOffer()).thenReturn(TestConstant.getDummyOfferMap(true, true));
		BigDecimal finalTotal = orderService.getFinalTotal();

		assertEquals(TestHelper.roundOff(new BigDecimal(4.7)), TestHelper.roundOff(finalTotal));
	}
}
