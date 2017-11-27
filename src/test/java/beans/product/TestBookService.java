package beans.product;

import java.util.List;
import java.util.Map;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cc.pupp.library.manage.controller.BookController;
import cc.pupp.library.manage.dao.BookDao;
import cc.pupp.library.manage.entity.Book;
import cc.pupp.library.manage.service.BookService;

public class TestBookService {
	ClassPathXmlApplicationContext ctx;
	@Before
	public void init() {
		ctx = new ClassPathXmlApplicationContext("spring-mvc.xml","spring-mybatis.xml");
	}

	
	@Test
	public void con1() {
		BookController con = ctx.getBean("bookController",BookController.class);
		Map map = con.doFindPageObjects(0,"",0,1,30);
		System.out.println(map);
	}
	
	//测试服务层
	@Test
	public void testFindPageObjects() {
		BookService BookService = ctx.getBean("bookServiceImpl",BookService.class);
		Map<String,Object> map = BookService.findPageObjects(0,"",0,1,30);
		List<Book> list = (List<Book>)map.get("list");
		System.out.println(list.size());
	}
	
	@Test
	public void testDAO1() {
		List<Book> list = 
				ctx.getBean("bookDao",BookDao.class).findPageObjects(0, "", 0, 1, 30, "modifiedTime");
		System.out.println(list.size());
	}
	
	@Test//精确查询某一本书
	public void testfindByTitle() {
		Book book = ctx.getBean("bookDao",BookDao.class).findByTitle("白夜行");
		System.out.println(book);
	}
	
	@Test//彻底删除某一本书
	public void testDeleteByTitle() {
		ctx.getBean("bookDao",BookDao.class).deleteByTitle("万维网");
	}
	
	@Test//更改某一本书的显示状态
	public void testmoveByTitle() {
		ctx.getBean("bookDao",BookDao.class).moveByTitle("火花", 1);
	}
	
	@Test//更新某一本书的内容
	public void testUpdate() {
		BookDao dao = ctx.getBean("bookDao",BookDao.class);
		Book book = dao.findByTitle("骑兵军");
		book.setAuthor("伊萨克・巴别尔");
		book.setBorrow(0);
		dao.updateInfo(book);
	}
	
	@After
	public void destroy() {
		ctx.close();
	}
}




