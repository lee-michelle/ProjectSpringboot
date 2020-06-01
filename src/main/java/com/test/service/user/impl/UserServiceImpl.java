package com.test.service.user.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.bean.User;
import com.test.dao.UserDao;
import com.test.service.user.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	public List<User> select(Integer row, Integer offset) {
		// TODO Auto-generated method stub
		return userDao.select(row, offset);
	}

	public User selectOne(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	public int add(User user) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int edit(User user) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int remove(Integer id) {
		// TODO Auto-generated method stub
		return 0;
	}

}
