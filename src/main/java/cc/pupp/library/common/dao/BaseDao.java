package cc.pupp.library.common.dao;
/***
 * 提取Dao共性
 */
public interface BaseDao<T> {
	int insertObject(T entity);
	int updateObject(T entity);
}




