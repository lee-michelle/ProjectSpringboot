package com.test.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.test.bean.User;

public interface UserDao {

	public List<User> select(@Param("row") Integer row, @Param("offset") Integer offset);

	/**
	 * public User selectOne(Integer id);
	 * 
	 * public int add(User user);
	 * 
	 * public int edit(User user);
	 * 
	 * public int remove(Integer id);
	 */

}
