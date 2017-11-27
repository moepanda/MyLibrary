package cc.pupp.library.manage.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cc.pupp.library.common.exception.ServiceException;
import cc.pupp.library.common.web.JsonResult;
import cc.pupp.library.common.web.PageObject;
import cc.pupp.library.manage.dao.BookDao;
import cc.pupp.library.manage.entity.Book;
import cc.pupp.library.manage.service.BookService;

@Service//假如没有指定名字, 默认id为BookServiceImpl
public class BookServiceImpl implements BookService {
	@Autowired
	private BookDao bookDao;
	public List<Book> findObjects() {
		return bookDao.findObjects();
	}
	
	public Map<String,Object> findPageObjects(Integer showon,String title,Integer borrow,Integer pageCurrent,Integer pageSize){
		//验证参数的有效性
		if(pageCurrent==null || pageCurrent<1) {
			throw new ServiceException("参数值无效,pageCurrent="+pageCurrent);
		}
		if(showon ==null || !(showon==0 || showon==1)) {
			throw new ServiceException("参数值无效,showon="+showon);
		}
		//计算当前页数据
		//int pageSize = 5;
		int startIndex = (pageCurrent-1)*pageSize;
		List<Book> list = bookDao.findPageObjects(showon,title,borrow,startIndex, pageSize,"modifiedTime");
		int rowCount = bookDao.getRowCount(showon,title,borrow);
		
		PageObject pageObject = new PageObject();
		pageObject.setPageCurrent(pageCurrent);
		pageObject.setStartIndex(startIndex);
		pageObject.setPageSize(pageSize);
		pageObject.setRowCount(rowCount);
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("list", list);
		map.put("pageObject", pageObject);
		return map;
		
	}

	public Book findByTitle(String title) {
		Book book = bookDao.findByTitle(title);
		return book;
	}

	@Override
	public void deleteByTitle(String title) {
		if(title==null || title.equals("")) {
			throw new ServiceException("参数不合法");
		}
		bookDao.deleteByTitle(title);
	}

	@Override
	public void moveByTitle(String title, Integer showon) {
		if(title==null || title.equals("")) {
			throw new ServiceException("参数不合法");
		}
		bookDao.moveByTitle(title, showon);
	}

	@Override
	public void updateInfo(Book book) {
		if(book.getBorrow()!=1&&book.getBorrow()!=0) {
			throw new ServiceException("借出状态异常");
		}
		if(book.getAuthor()==null||book.getAuthor()==""||book.getTitle()==null||book.getTitle()=="") {
			throw new ServiceException("书名、作者不得为空！");
		}
		bookDao.updateInfo(book);
	}

	@Override
	public int getRabishCount() {
		return bookDao.getRowCount(0, "", null);
	}

	@Override
	public void saveNewBook(Book book) {
		if(bookDao.findByTitle(book.getTitle())!=null) {
			throw new ServiceException("该书名已存在！");
		}
		if(book.getBorrow()==null) {
			throw new ServiceException("请选择借出状态");
		}
		bookDao.saveNewBook(book);
	}

	@Override
	public int findMaxNum() {		
		return bookDao.findMaxNum();
	}
	
}


