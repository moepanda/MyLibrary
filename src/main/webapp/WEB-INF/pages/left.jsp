<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="sidebar" class="nav-collapse">
               <ul class="sidebar-menu" id="nav-accordion">
                  <li>
                     <a href="indexUI.do">
                     <i class="fa fa-dashboard"></i>
                     <span>面板主页</span>
                     </a>
                  </li>
                  <li class="sub-menu" id="load-project-id">
                     <a href="javascript:;" class="active">
                     <i class="fa fa-book"></i>
                     <span>图书列表</span>
                     </a>
                  </li>
                  <li class="sub-menu">
                     <a href="javascript:;" class="dcjq-parent">
                     <i class="fa fa-cogs"></i>
                     <span>权限管理</span>
                     <!-- <span class="label label-primary span-sidebar">3</span> -->
                     </a>
                     <ul class="sub">
                        <li id="load-team-id"><a href="grids.html">管理员提升</a></li>
                        <li id="load-rabish-id"><a href="calendar.html">回收站权限</a></li>
                        <li id="load-other-id"><a href="gallery.html">其他权限</a></li>
                     </ul>
                  </li>
               		
                 
                  <li class="sub-menu" id="load-rabishBin-id">
                     <a href="javascript:;">
                     <i class="fa fa-shopping-cart"></i>
                     <span>回收站</span>
               		 <span class="label label-danger span-sidebar" id="rabishCount">3</span>
                     </a>
                    
                  </li>


                  <li>
                     <a href="login.html">
                     <i class="fa fa-user"></i>
                     <span>个人主页</span>
                     </a>
                  </li>
                  
               </ul>
            </div>
            
<script type="text/javascript">
//左侧菜单加载完毕后,自动触发图书列表
$(function(){
	$('#load-project-id').trigger("click");
})

$('#load-project-id').click(function(){
	var url="project/listUI.do?t="+Math.random(1000);
	$("#main-content").load(url);
})
$('#load-team-id').click(function(){
	var url="team/listUI.do?t="+Math.random(1000);
	$("#main-content").load(url);
})
$('#load-rabish-id').click(function(){
	var url="rabish/listUI.do?t="+Math.random(1000);
	$("#main-content").load(url);
})
$('#load-other-id').click(function(){
	var url="attachment/attachmentUI.do?t="+Math.random(1000);
	$("#main-content").load(url);
})
$('#load-rabishBin-id').click(function(){
	var url="project/listRabish.do?t="+Math.random(1000);
	$("#main-content").load(url);
})
$('#load-personal-id').click(function(){
	var url="role/listUI.do?t="+Math.random(1000);
	$("#main-content").load(url);
})


</script>
