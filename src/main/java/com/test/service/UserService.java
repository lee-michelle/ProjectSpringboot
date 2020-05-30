package com.test.service;

import javax.servlet.http.HttpServletRequest;

public interface UserService {

	public void setRequest(HttpServletRequest httpServletRequest);

	public void getRequestInfo(int orgCode);
	/*
	 * public List<User> select();
	 * 
	 * public User selectOne(Integer id);
	 * 
	 * public int add(User user);
	 * 
	 * public int edit(User user);
	 * 
	 * public int remove(Integer id);
	 */
}
