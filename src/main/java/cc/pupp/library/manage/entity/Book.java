package cc.pupp.library.manage.entity;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import cc.pupp.library.common.web.JsonDateTypeConvert;

/**
 * 实体化对象 实现与表中数据的映射
 *   
 * @author sunny
 *
 */

public class Book implements Serializable{
	private Integer id;
	private Integer num;
	private String title;
	private String author;
	private String press;
	private Integer borrow;
	private Integer showon;
	private String remark;
	private Date createdTime;
	private Date modifiedTime;
	private String createdUser;
	private String modifiedUser;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPress() {
		return press;
	}
	public void setPress(String press) {
		this.press = press;
	}
	public Integer getBorrow() {
		return borrow;
	}
	public void setBorrow(Integer borrow) {
		this.borrow = borrow;
	}
	public Integer getShowon() {
		return showon;
	}
	public void setShowon(Integer showon) {
		this.showon = showon;
	}
	public String getRemark() {
		return remark;
	}
	
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	@JsonSerialize(using=JsonDateTypeConvert.class)
	public Date getCreatedTime() {
		return createdTime;
	}
	public void setCreatedTime(Date createdTime) {
		this.createdTime = createdTime;
	}
	@JsonSerialize(using=JsonDateTypeConvert.class)
	public Date getModifiedTime() {
		return modifiedTime;
	}
	public void setModifiedTime(Date modifiedTime) {
		this.modifiedTime = modifiedTime;
	}
	public String getCreatedUser() {
		return createdUser;
	}
	public void setCreatedUser(String createdUser) {
		this.createdUser = createdUser;
	}
	public String getModifiedUser() {
		return modifiedUser;
	}
	public void setModifiedUser(String modifiedUser) {
		this.modifiedUser = modifiedUser;
	}
	@Override
	public String toString() {
		return "Book [num=" + num + ", title=" + title + ", author=" + author + "]";
	}
	
	
	
}










