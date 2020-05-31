package com.test;

//import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@ComponentScan(basePackages = { "com.test.controller", "com.test.service", "com.test.re" })
// @MapperScan(basePackages = { "com.test.dao" })
public class ProjectSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectSpringbootApplication.class, args);
	}

	/*
	 * @ModelAttribute public void getLocale(Model model) { Locale _locale =
	 * ((LocaleResolver) SpringBeanUtils.getBean(LocaleResolver.class))
	 * .resolveLocale((HttpServletRequest) null);
	 * 
	 * model.addAttribute("_locale", _locale.toString()); }
	 */
}
