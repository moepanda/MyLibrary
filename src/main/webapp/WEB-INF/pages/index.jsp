<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="basePath" value="${pageContext.request.contextPath}"></c:set>
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
	  <link href="${basePath}/img/favicon.ico" rel="shortcut icon">
	  <!-- END SHORTCUT ICON -->
      <title>MyLibrary图书列表</title>
	  
	  <!-- BEGIN STYLESHEET --> 
      <link href="${basePath}/css/bootstrap.min.css" rel="stylesheet"><!-- BOOTSTRAP CSS -->
      <link href="${basePath}/css/bootstrap-reset.css" rel="stylesheet"><!-- BOOTSTRAP CSS -->
      <link href="${basePath}/assets/font-awesome/css/font-awesome.css" rel="stylesheet"><!-- FONT AWESOME ICON STYLESHEET -->
      <link href="${basePath}/assets/data-tables/DT_bootstrap.css" rel="stylesheet" ><!-- DATATABLE CSS -->
      <link href="${basePath}/css/style.css" rel="stylesheet"><!-- THEME BASIC CSS -->
      <link href="${basePath}/css/style-responsive.css" rel="stylesheet"><!-- THEME BASIC RESPONSIVE  CSS -->
      <!--[if lt IE 9]>
      <script src="${basePath}/js/html5shiv.js"></script>
      <script src="${basePath}/js/respond.min.js"></script>
      <![endif]-->
	  <!-- END STYLESHEET --> 
	  
	  <!-- BEGIN JS --> 	  
		<script src="${basePath}/js/jquery-1.8.3.min.js" ></script><!-- BASIC JS LIABRARY 1.8.3 -->
		<script src="${basePath}/js/bootstrap.min.js" ></script><!-- BOOTSTRAP JS  -->
		<script src="${basePath}/js/jquery.dcjqaccordion.2.7.js"></script><!-- ACCORDING JS -->
		<script src="${basePath}/js/jquery.scrollTo.min.js" ></script><!-- SCROLLTO JS  -->
		<script src="${basePath}/js/jquery.nicescroll.js" > </script><!-- NICESCROLL JS  -->
		<script src="${basePath}/assets/data-tables/jquery.dataTables.js"></script><!-- DATATABLE JS  -->
		<script src="${basePath}/assets/data-tables/DT_bootstrap.js"></script><!-- DATATABLE JS  -->
		<script src="${basePath}/js/respond.min.js" ></script><!-- RESPOND JS  -->
		<script src="${basePath}/js/common-scripts.js" ></script><!-- BASIC COMMON JS  -->
		<script src="${basePath}/js/index.js" ></script>
	  <!-- END JS --> 
   </head>
   <body>
   <!-- BEGIN SECTION --> 
      <section id="container" class="">
	  
	  <%@include file="header.jsp" %> 
		 
		 <!-- BEGIN SIDEBAR --> 
         <aside>
            <%@include file="left.jsp" %> 
         </aside>
		 <!-- END SIDEBAR -->
		 
		 <!-- BEGIN MAIN CONTENT --> 
         <section id="main-content">
		    
         </section>
		 <!-- END MAIN CONTENT --> 
		 <%@include file="footer.jsp" %> 
      </section>
	  <!-- END SECTION -->

	
   </body>
</html>


