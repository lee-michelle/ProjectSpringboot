package com.test.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.bean.User;
import com.test.service.user.UserService;

@RestController
@RequestMapping("/page")
public class PageController {

	@Autowired
	private UserService userService;

	@RequestMapping("/get")
	@ResponseBody
	public List<User> get(HttpServletRequest request) {
		System.out.println(request);
		List<User> list = userService.select(1, 3);
		System.out.println();
		return list;
	}
}
