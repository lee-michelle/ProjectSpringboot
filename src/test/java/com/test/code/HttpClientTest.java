package com.test.code;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class HttpClientTest {

	public String client(String url, HttpMethod method) {
		RestTemplate rest = new RestTemplate();
		ResponseEntity<String> factory = rest.getForEntity(url, String.class);
		return factory.getBody();
	}

}
