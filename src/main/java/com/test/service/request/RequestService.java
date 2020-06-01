package com.test.service.request;

import javax.servlet.http.HttpServletRequest;

public interface RequestService {

	public void setRequest(HttpServletRequest httpServletRequest);

	public void getRequestInfo(int orgCode);

}
