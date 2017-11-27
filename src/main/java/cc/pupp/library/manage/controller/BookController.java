package cc.pupp.library.manage.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cc.pupp.library.common.web.JsonResult;
import cc.pupp.library.manage.entity.Book;
import cc.pupp.library.manage.service.BookService;

@RequestMapping("/project/")
@Controller
public class BookController {
	
	@Autowired
	@Qualifier("bookServiceImpl")
	private BookService bookService;
	
	@RequestMapping("listUI")
	public String listUI() {
		return "manage/book_list";
	}
	
	@RequestMapping("listRabish.do")
	public String listRabish() {
		return "manage/rabish_list";
	}
	
	@RequestMapping("doFindObjects")
	@ResponseBody
	public List<Book> doFindObjects(){
		List<Book> list = bookService.findObjects();
		return list;
	}
	
	@RequestMapping("doGetRabishCount")
	@ResponseBody
	public int doGetRabishCount(){
		return bookService.getRabishCount();
	}
	
	
	@RequestMapping("doFindPageObjects")
	@ResponseBody
	public Map<String,Object> doFindPageObjects(Integer showon,String title,Integer borrow,Integer pageCurrent,Integer pageSize){
		Map map = bookService.findPageObjects(showon,title,borrow,pageCurrent,pageSize);
		return map;
	}
	
	@RequestMapping("findByTitle")
	@ResponseBody
	public Book findByTitle(String title){
		Book book = bookService.findByTitle(title);
		return book;
	}
	
	@RequestMapping("deleteByTitle")
	@ResponseBody
	public JsonResult deleteByTitle(String title){
		bookService.deleteByTitle(title);
		return new JsonResult();
	}
	
	@RequestMapping("moveByTitle")
	@ResponseBody
	public JsonResult moveByTitle(String title, Integer showon){
		bookService.moveByTitle(title, showon);
		return new JsonResult();
	}
	
	@RequestMapping("updateInfo")
	@ResponseBody
	public JsonResult updateInfo(Book book){
		bookService.updateInfo(book);
		return new JsonResult();
	}
	
	@RequestMapping("saveNewBook")
	@ResponseBody
	public JsonResult saveNewBook(Book book){
		bookService.saveNewBook(book);
		return new JsonResult();
	}
	
	@RequestMapping("findMaxNum")
	@ResponseBody
	public JsonResult findMaxNum(){
		return new JsonResult(bookService.findMaxNum());
	}
	
}



