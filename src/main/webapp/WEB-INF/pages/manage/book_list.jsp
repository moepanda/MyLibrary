<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="basePath" value="${pageContext.request.contextPath}"></c:set>
<script src="${basePath}/js/listBook.js" ></script>
<script src="${basePath}/js/page.js" ></script>
<!-- BEGIN WRAPPER  -->
    <section class="wrapper site-min-height">
       <section class="panel">
          <header class="panel-heading">
             <span class="label label-primary" id="showAllBooks">图书列表</span>
             <span class="tools pull-right">
             <!-- <a href="javascript:;" class="fa fa-chevron-down"></a>
             <a href="javascript:;" class="fa fa-times"></a> -->
             </span>
          </header>
          <div class="panel-body">
             <div class="adv-table editable-table ">
                <div class="clearfix">
                   <div class="btn-group" style="margin-bottom:10px;">
                   <button id="editable-sample_new" class="btn btn-success green">添加 <i class="fa fa-plus"></i>
                   </button>
                   </div>
                      
                   
                   <div class="row" id="queryFormId">
                   	<div style="float:left;display:inline-block;margin-left:16px;">
				      	<label>
						  <select id="ifBorrowed" size="1" name="editable-sample_length" aria-controls="editable-sample" class="form-control xsmall">
						    <option value="" selected="selected">状态</option>
						    <option value="1">已借出</option>
						    <option value="0">未借出</option>
						  </select>
						</label>
					  </div>
					 <div class="col-lg-6" style="float:left;width:40%;">
					   <div class="input-group">
					     <input type="text" class="form-control titleSearchInput" placeholder="书名" id="searchTitleId">
					      <span class="input-group-btn">
					       	  <button class="btn btn-primary btn-search" type="button">查询</button>
					      </span>
					    </div><!-- /input-group -->
				      
					  </div><!-- /.col-lg-6 -->
					  	<div style="float:right;display:inline-block;margin-right:16px;">
					  		每页显示
						    <label>
							  <select id="pageSizeId" size="1" name="editable-sample_length" aria-controls="editable-sample" class="form-control xsmall">
							    <option value="3">3</option>
							    <option value="5" selected="selected">5</option>
							    <option value="10">10</option>
							  </select>
							</label>
						</div>
					</div>
                   
                </div>
                <div class="space15"></div>
                <table class="table table-striped table-hover table-bordered" id="editable-sample">
                   <thead>
                       <tr>
                         <th>编号</th>
                         <th>书名</th>
                         <th>作者</th>
                         <th>备注</th>
                         <th>借出状态</th>
                         <th>最后修改</th>
                         <th>操作</th>
                         <th>删除</th>
                      </tr>
                   </thead>
                   <tbody id="tbodyId">
                      <!-- <tr class="">
                         <td class="">123123</td>
                         <td>论语</td>
                         <td>孔子</td>
                         <td>古籍出版社</td>
                         <td>已借出</td>
                         <td>古典名著</td>
                         <td><a class="edit" href="javascript:;"><span class="label label-success">编辑</span></a></td>
                         <td><a class="delete" href="javascript:;"><span class="label label-danger">删除</span></a></td>
                      </tr>  -->
                     
                   </tbody>
                </table>
                <span id="pageId">
					<button class="first btn">首页</button>&nbsp;
					<button class="pre btn">上一页</button>&nbsp;
					<button class="next btn">下一页</button>&nbsp;
					<button class="last btn">尾页</button>&nbsp;
					<span class="pageCount">总页数</span>&nbsp;
					<span class="pageCurrent">当前页</span>&nbsp;
					<input type="text" class="jumpToWhere"/> 页
					<button class="btn jumpTo">跳转</button>
				</span>
             </div>
          </div>
       </section>
    </section>
	<!-- END WRAPPER  -->