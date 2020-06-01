package com.test.service.user;

import java.util.List;

import com.test.bean.User;

public interface UserService {

	public List<User> select(Integer row, Integer offset);

	public User selectOne(Integer id);

	public int add(User user);

	public int edit(User user);

	public int remove(Integer id);

}
