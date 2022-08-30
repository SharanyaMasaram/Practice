package com.javaxp.basket.util;

import java.math.BigDecimal;

public class TestHelper {

	public static BigDecimal roundOff(BigDecimal value) {
		return value.setScale(2, BigDecimal.ROUND_HALF_DOWN);
	}

}
