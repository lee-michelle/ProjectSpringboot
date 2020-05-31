package com.test.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.test.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private HttpServletRequest httpServletRequest;

	@Override
	public void setRequest(HttpServletRequest httpServletRequest) {
		this.httpServletRequest = httpServletRequest;
	}

	@Override
	public void getRequestInfo(int orgCode) {
		if (orgCode != this.httpServletRequest.hashCode()) {
			System.out.println(
					Thread.currentThread().getName() + ": " + orgCode + " " + this.httpServletRequest.hashCode());
		}
	}

	/*
	 * @Autowired private UserDao userDao;
	 */

	/*
	 * @Override public List<User> select() { List<User> list = new
	 * ArrayList<User>(); Date date = Calendar.getInstance().getTime(); String
	 * time = null; try { time = DateUtils.formatDate(date); } catch
	 * (IOException e) { e.printStackTrace(); } User user1 = new User();
	 * user1.setUsername("1"); user1.setPassword("123456");
	 * user1.setCreateTime(time); User user2 = new User();
	 * user2.setUsername("2"); user2.setPassword("123456");
	 * user2.setCreateTime(time); list.add(user1); list.add(user2); return list;
	 * }
	 */

	/*
	 * @Override public User selectOne(Integer id) { return
	 * userDao.selectOne(id); }
	 */

	/*
	 * @Override public int add(User user) { return userDao.add(user); }
	 * 
	 * @Override public int edit(User user) { return userDao.edit(user); }
	 * 
	 * @Override public int remove(Integer id) { return userDao.remove(id); }
	 */

}
