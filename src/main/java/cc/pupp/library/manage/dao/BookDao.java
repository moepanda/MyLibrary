package cc.pupp.library.manage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import cc.pupp.library.manage.entity.Book;
/**
 * 持久层
 */
public interface BookDao {
	/**
	 * 从数据库查询表中所有数据(项目信息)
	 * 1)一行记录封装为一个Book对象
	 * 2)多行记录对应的多个Book对象再封装到list集合
	 * 
	 */
	List<Book> findObjects();
	/**
	 * 分页查询
	 * @param startIndex 从哪个位置开始取数据
	 * @param pageSize 取几条数据
	 * @return 表示当前页数据
	 */
	List<Book> findPageObjects(
			@Param("showon")Integer showon,
			@Param("title")String title,
			@Param("borrow")Integer borrow,
			@Param("startIndex")int startIndex,
			@Param("pageSize")int pageSize,
			@Param("orderBy")String orderBy
			);
	
	/**获取记录的总行数,用来计算总页数*/
	int getRowCount(
			@Param("showon")Integer showon,
			@Param("title")String title,
			@Param("borrow")Integer borrow);
	
	/**精确查询*/
	Book findByTitle(String title);
	
	/**彻底删除某一本书*/
	void deleteByTitle(String title);
	
	/**
	 * 将书移入/移出回收站
	 * @param title 要更改的书籍
	 * @param showon 更改后的状态 
	 */
	void moveByTitle(@Param("title")String title, @Param("showon")Integer showon);
	
	/**
	 * 提交修改时,根据id更新书的内容
	 * @param book
	 */
	void updateInfo(Book book);
	
	int saveNewBook(Book book);
	
	int findMaxNum();
}






