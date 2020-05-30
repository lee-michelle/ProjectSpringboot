package com.test.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
//import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.service.UserService;

@Controller
@RequestMapping("/user")
public class TestController {
	// private final Logger logger = Logger.getLogger(getClass());

	// @RequestMapping(value = "/getUsers", method = { RequestMethod.GET })
	// public String get(Model model) {
	//
	// return "list";
	// }

	@Autowired
	private UserService userService;

	@ModelAttribute
	public void init(HttpServletRequest request) {
		userService.setRequest(request);
	}

	@RequestMapping("/test")
	@ResponseBody
	public String test(HttpServletRequest request) {
		userService.getRequestInfo(request.hashCode());
		return "TEST";
	}
}
