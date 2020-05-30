package com.test.utils;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
	/**
	 * 时间格式化
	 * 
	 * @param date
	 * @return
	 * @throws IOException
	 */
	public static String formatDate(Date date) throws IOException {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		String dateString = formatter.format(date);
		return dateString;
	}
}
