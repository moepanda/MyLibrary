package cc.pupp.library.system.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import cc.pupp.library.common.dao.BaseDao;
import cc.pupp.library.system.entity.SysUser;

public interface SysUserDao extends BaseDao<SysUser> {

	List<SysUser> findPageObjects(
			@Param("username")String username,
			@Param("startIndex")Integer startIndex,
			@Param("pageSize") Integer pageSize);
	
	int getRowCount(@Param("username")String username);
	SysUser findObjectById(Integer id);
	int validById(@Param("id")Integer id,@Param("valid")Integer valid);
	SysUser findObjectByName(String username);
	/**
	 * 查询用户得权限
	 * @param userId
	 */
	List<String> findUserPermissions(Integer userId);
	List<Map<String,Object>> findUserMenus(Integer userId);
	
	

}
