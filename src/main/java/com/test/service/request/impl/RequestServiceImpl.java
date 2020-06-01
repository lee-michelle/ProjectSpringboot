package com.test.service.request.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.test.service.request.RequestService;

@Service
public class RequestServiceImpl implements RequestService {

	private HttpServletRequest httpServletRequest;

	public void setRequest(HttpServletRequest httpServletRequest) {
		this.httpServletRequest = httpServletRequest;
	}

	public void getRequestInfo(int orgCode) {
		if (orgCode != this.httpServletRequest.hashCode()) {
			System.out.println(
					Thread.currentThread().getName() + ": " + orgCode + " " + this.httpServletRequest.hashCode());
		}
	}

}
