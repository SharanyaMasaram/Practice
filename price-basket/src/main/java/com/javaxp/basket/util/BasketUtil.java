package com.javaxp.basket.util;

import java.math.BigDecimal;

public class BasketUtil {

	public static BigDecimal roundOff(BigDecimal value) {
		return value.setScale(2, BigDecimal.ROUND_DOWN);
	}
}
