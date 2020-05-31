package com.test.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
//import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.re.RedisBean;
import com.test.service.UserService;

@Controller
@RequestMapping("/user")
public class TestController {
	// private final Logger logger = Logger.getLogger(getClass());

	@Autowired
	private RedisTemplate redisTemplate;
	@Autowired
	private UserService userService;

	@ModelAttribute
	public void init(HttpServletRequest request) {
		// reuqest每个请求都不一样，只是在使用userService的set方法时，线程切换可能造成线程安全问题，userService是共享变量
		userService.setRequest(request);
		System.out.println(Thread.currentThread().getName() + ": " + userService.hashCode());
	}

	/**
	 * 测试request高并发问题
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("/test")
	@ResponseBody
	public String test(HttpServletRequest request) {
		userService.getRequestInfo(request.hashCode());
		return "request 单利测试";

	}

	/**
	 * redis实现分页
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("/redis")
	@ResponseBody
	public List redis(HttpServletRequest request) {
		List<RedisBean> list = new ArrayList<RedisBean>();
		for (int i = 0; i < 100; i++) {
			RedisBean redis = new RedisBean();
			redis.setKey(i + "");
			redis.setValue(i + "");
			list.add(redis);
		}
		redisTemplate.opsForList().rightPushAll("range", list);
		return redisTemplate.opsForList().range("range", 0, 3);
	}
}
