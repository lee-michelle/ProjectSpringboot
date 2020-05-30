package com.test.code;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class TestController {
	@Autowired
	private HttpClientTest httpClientTest;

	private static final String URL = "http://localhost:8087/user/test";

	@RequestMapping("/get")
	@ResponseBody
	public String init(HttpServletRequest request) {
		for (int j = 0; j < 1000; j++) {
			new Thread(new Runnable() {
				public void run() {
					try {
						httpClientTest.client(URL, HttpMethod.GET);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}).start();
		}
		return "OK";
	}
}
