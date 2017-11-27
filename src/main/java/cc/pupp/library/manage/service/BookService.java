package cc.pupp.library.manage.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import cc.pupp.library.manage.entity.Book;

/**
 *业务层接口
 */
public interface BookService {
	List<Book> findObjects();
	/**
	 * 
	 * @param pageCurrent 当前页码值
	 * @return 返回当前页数据以及分页信息
	 */
	Map<String,Object> findPageObjects(Integer showon,String title,Integer borrow,Integer pageCurrent,Integer pageSize);
	
	Book findByTitle(String title);
	
	void deleteByTitle(String title);
	
	void moveByTitle(String title, Integer showon);
	
	void updateInfo(Book book);
	
	int getRabishCount();

	void saveNewBook(Book book);
	
	int findMaxNum();
}
