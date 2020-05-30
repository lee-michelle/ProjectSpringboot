package com.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProjectSpringbootApplicationTests {
	//
	// @Autowired
	// private RestTemplate restTemplate;

	private static final String URL = "http://localhost:8087/user/test";

	@Test
	public void test1() throws Exception {
		// ResponseEntity<String> response = this.restTemplate.getForEntity(URL,
		// String.class, "");
		// System.out.println(String.format("测试结果为：%s", response.getBody()));

		for (int j = 0; j < 1000; j++) {
			new Thread(new Runnable() {
				public void run() {
					RestTemplate restTemplate = new RestTemplate();
					try {
						// httpClientTest.client(URL, HttpMethod.GET);
						ResponseEntity<String> response = restTemplate.getForEntity(URL, String.class, "");
						// System.out.println(String.format("测试结果为：%s",
						// response.getBody()));
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}).start();
		}
	}

}
