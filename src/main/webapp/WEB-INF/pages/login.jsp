﻿<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- BEGIN META -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Custom Theme">
    <!-- END META -->
    
    <!-- BEGIN SHORTCUT ICON -->
    <link rel="shortcut icon" href="img/favicon.ico">
    <!-- END SHORTCUT ICON -->
    <title>
      Olive Admin - Flat & Responsive Bootstrap Admin Template
    </title>
    <!-- BEGIN STYLESHEET-->
		<link href="css/bootstrap.min.css" rel="stylesheet"><!-- BOOTSTRAP CSS -->
		<link href="css/bootstrap-reset.css" rel="stylesheet"><!-- BOOTSTRAP CSS -->
		<link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet"><!-- FONT AWESOME ICON CSS -->
		<link href="css/style.css" rel="stylesheet"><!-- THEME BASIC CSS -->
		<link href="css/style-responsive.css" rel="stylesheet"><!-- THEME RESPONSIVE CSS -->
    <!--[if lt IE 9]>
<script src="js/html5shiv.js">
</script>
<script src="js/respond.min.js">
</script>
<![endif]-->
     <!-- END STYLESHEET-->
  </head>
  <body class="login-screen">
    <!-- BEGIN SECTION -->
    <div class="container">
      <form class="form-signin" action="index.html">
        <h2 class="form-signin-heading">
          管理员登陆
        </h2>
		<!-- LOGIN WRAPPER  -->
        <div class="login-wrap">
          <input type="text" class="form-control" placeholder="用户名" autofocus>
          <input type="password" class="form-control" placeholder="密码">
	    <input type="text" class="form-control" placeholder="验证码" style="width:50%;">
          <label class="checkbox">
            <input type="checkbox" value="remember-me">
            	记住我
            <span class="pull-right">
              <a data-toggle="modal" href="#myModal">
                	忘记密码?
              </a>
            </span>
          </label>
          <button class="btn btn-lg btn-login btn-block" type="submit">
            	登入
          </button>
          <p>
           	欢迎回来,请先登陆
          </p>

		<!-- END LOGIN WRAPPER -->
		<!-- MODAL -->
        <div  id="myModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
                <h4 class="modal-title">
                  	忘记密码?
                </h4>
              </div>
              <div class="modal-body">
                <p>
                  	请输入注册邮箱以便重置密码
                </p>
                <input type="text" name="email" placeholder="邮箱" autocomplete="off" class="form-control placeholder-no-fix">
              </div>
              <div class="modal-footer">
                <button data-dismiss="modal" class="btn btn-default" type="button">
                  	取消
                </button>
                <button class="btn btn-success" type="button">
                  	提交
                </button>
              </div>
            </div>
          </div>
        </div>
		<!-- END MODAL -->
      </form>
    </div>
    <!-- END SECTION -->
    <!-- BEGIN JS -->
    <script src="js/jquery.js" ></script><!-- BASIC JQUERY LIB. JS -->
	<script src="js/bootstrap.min.js" ></script><!-- BOOTSTRAP JS -->
    <!-- END JS -->
  </body>
</html>

