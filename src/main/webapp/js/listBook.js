$(function(){
	doGetObjects();
	setRabishCount();
});
	
//更新左侧垃圾箱显示数字
function setRabishCount(){
	var url = "project/doGetRabishCount.do";
	$.getJSON(url,function(result){
		$("#rabishCount").text(result);
	});
}

//仿照 沪江网 优化搜索体验
//鼠标移入获得焦点并全选文本
$(".titleSearchInput").mouseenter(function(){
	//console.log($(this).is(":focus"));
	//console.log("halo!");
	var len = $(this).val().length;
	$(this)[0].focus();
	$(this)[0].selectionStart = 0;
	$(this)[0].selectionEnd = len;
}).mouseleave(function(){//鼠标移出失去焦点
	$(this)[0].blur();
});

//搜索框有焦点时,敲击回车会触发搜索
$("body").keydown(function(e){
	if(e.keyCode==13 && $("#searchTitleId").is(":focus")){
		doQueryObjects();
	}
});

//确保一次只有一个条目处于编辑状态
function editing(){
	if($("#editable-sample").find("input").length>2){
		return true;
	}else{
		return false;
	}
}

//删除(移至回收站)/恢复(移出回收站)
function move(t){
	var conf,show,msg;
	if(t.hasClass("remove")){
		conf = "确认删除?编号:";
		show = 0
	}else{
		conf = "确认恢复?编号:";
		show = 1
	}
	//查询数据库
	var title = t.parent().parent().children().eq(1).text();
	var params = {title:title};
	console.log(params);
	var url = "project/findByTitle.do";
	$.getJSON(url,params,function(result){
		//console.log(result);
		if(!confirm(conf+result.num)) {
	        return;
	    }
		//移入回收站
		var deleInfo = {title:result.title,showon:show};
		url="project/moveByTitle.do"
		$.getJSON(url,deleInfo,function(result){
			doGetObjects();
			setRabishCount();
			alert(result.message);
		});
	});
}

$("#editable-sample .remove").die().live("click",function(){
	var t = $(this);
	move(t);
});

$("#editable-sample .relive").die().live("click",function(){
	var t = $(this);
	move(t);
});

//彻底删除
$("#editable-sample .delete").die().live("click",function(){
	var title = $(this).parent().parent().children().eq(1).text();
	var params = {title:title};
	//console.log(params);
	var url = "project/findByTitle.do";
	$.getJSON(url,params,function(result){
		console.log(result);
		if(!confirm("确认彻底删除?编号:"+result.num)) {
	        return;
	    }
		var deleInfo = {title:result.title};
		url="project/deleteByTitle.do"
		$.getJSON(url,deleInfo,function(result){
			doGetObjects();
			setRabishCount();
			alert(result.message);
		});
	});
});


//添加一个空白可编辑的新行
$("#editable-sample_new").click(function(){
	if(editing()){
		return;
	}
	var oddEven = $("#editable-sample tr").eq(1).hasClass("odd")?"odd":"even";
	var newTr = '<tr class="'+oddEven+'">'+editAble+'</tr>';
	$("#editable-sample").prepend(newTr);
	//查询表内最大编号,并对相应列进行填充,避免用户添加已存在的编号
	url="project/findMaxNum.do";
	$.getJSON(url,function(result){
		//填充结果
		$("#editable-sample tr").eq(1).children().eq(0).find("input").val(result.data+1);
	});
});

var editAble = 
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td>'+
	    '<select size="1" id="editBorrow" name="editable-sample_length" '+
	    'aria-controls="editable-sample" class="form-control xsmall">'+
	    	'<option value="" selected="selected">状态</option>'+
		    '<option value="1">已借出</option>'+
		    '<option value="0">未借出</option>'+
	    '</select>'+
	'</td>'+
	'<td></td>'+
	'<td><a class="save" href="javascript:;"><span class="label label-primary">保存</span></a></td>'+
	'<td><a class="cancel" href="javascript:;"><span class="label label-default">撤销</span></a></td>';


//获取编辑后尚未保存的表单数据
function getEditForData(tr,id){
	//console.log("tr:"+tr);
	var num = tr.children().eq(0).find("input").val();
	var title = tr.children().eq(1).find("input").val();
	var author = tr.children().eq(2).find("input").val();
	var press = tr.children().eq(3).find("input").val();
	var borrow = tr.children().eq(4).find("#editBorrow").val();
	var params = {
		"id":id,
		"num":num,
		"title":title,
		"author":author,
		"press":press,
		"borrow":borrow
	};
	return params;
}


//对编辑完的条目进行保存
$("#editable-sample .update").die().live("click",function(){
	var id = $("#tbodyId").data("editingId");
	//初始化tbody上绑定的在编辑条目id
	$("#tbodyId").data("editingId",null);
	var tr = $(this).parent().parent();
	params = getEditForData(tr,id);
	url="project/updateInfo.do";
	//console.log(params.borrow);
	$.getJSON(url,params,function(result){
		doQueryObjects();
		alert(result.message);
	});
});

//插入新增条目
$("#editable-sample .save").die().live("click",function(){
	var tr = $(this).parent().parent();
	params = getEditForData(tr,null);//此处id可以任意设置,mapper里写死了为null
	url="project/saveNewBook.do";
	$.getJSON(url,params,function(result){
		if(result.state==1){
			alert("添加成功!");
		}else{
			alert(result.message);
		}
		doQueryObjects();
	});
});


//放弃编辑或添加时,重新请求查询当前页
$("#editable-sample .cancel").die().live("click",function(){
//	if (!confirm("放弃操作吗?")) {
//		return;
//	}
	doGetObjects();
});

//编辑条目
$("#editable-sample .edit").die().live("click",function(){
	if(editing()){
		return;
	}
	//移除当前行并插入空行
	var tr = $(this).parent().parent();
	var title = tr.children().eq(1).text();
	tr.children("td").remove();
	tr.append(editAble);
	//查询此行数据内容
	var params = {title:title};
	console.log(params);
	var url = "project/findByTitle.do";
	$.getJSON(url,params,function(result){
		//记录此条目的id,并绑定到tbody上
		$("#tbodyId").data("editingId",result.id);
		//对空行进行填充
		tr.children().eq(0).find("input").val(result.num);
		tr.children().eq(1).find("input").val(result.title);
		tr.children().eq(2).find("input").val(result.author);
		tr.children().eq(3).find("input").val(result.press);
		//删除borrow下拉菜单的第一行,防止数据提交出错,将当前状态设置为默认选中
		$("#editBorrow").children().eq(0).remove();
		$("#editBorrow").children().each(function(){
			if($(this).val()==result.borrow){
				$(this).attr("selected","selected");
			}
		});
		tr.children().eq(5).html(result.modifiedTime);
		//改变保存按钮,用以区分
		tr.children().eq(6).find("a").removeClass("save").addClass("update").children().text("更新");
	});
});


//将页面初始化成第一页,重新加载
function doQueryObjects(){
	$('#pageId').data("pageCurrent",1);
	doGetObjects();
}


//异步加载服务端数据
function doGetObjects(){
	var url="project/doFindPageObjects.do";
	//获取表单数据(查询时用)
	var params = getQueryFormData();

	var pageCurrent = $('#pageId').data("pageCurrent");
	if(!pageCurrent){
		pageCurrent=1;
	}
	params.pageCurrent = pageCurrent;
	$.getJSON(url,params,function(result){
		//设置当前页数据
		setTableBodyRows(result.list);
		//设置分页信息(setPagination方法在page.js中)
		setPagination(result.pageObject);
	});
	//清空跳转页码内容
	$(".jumpToWhere").val("");
}

//将服务端返回的json对象数据显示在页面上
function setTableBodyRows(list){
	var tBody = $("#tbodyId");
	tBody.empty();
	//迭代result对象
	for(var i in list){
		//构建tr对象
		var tr = $("<tr></tr>");
		tr.data("id",list[i].id);
		//构建td对象
		var td1 = '<td><a class="edit" href="javascript:;"><span class="label label-info">编辑</span></a></td>';
		var td2 = '<td><a class="remove" href="javascript:;"><span class="label label-warning">删除</span></a></td>';
		if(!getShowon()){
			td1 = '<td><a class="relive" href="javascript:;"><span class="label label-success">恢复</span></a></td>';
			td2 = '<td><a class="delete" href="javascript:;"><span class="label label-danger">彻底删除</span></a></td>';
		}
		var tdBorrow = list[i].borrow==0?'<td style="color:green">未借出</td>':'<td style="color:red">已借出</td>';
		var tds = 
			'<td>'+list[i].num+'</td>'+
	        '<td>'+list[i].title+'</td>'+
	        '<td>'+list[i].author+'</td>'+
	        '<td>'+list[i].press+'</td>'+
	        tdBorrow +
	        '<td>'+list[i].modifiedTime+'</td>'+
	        td1 + td2;
	        
		//将td对象添加到tr中
		tr.append(tds);
		//将tr对象添加到tboady中
		tBody.append(tr);
		
		//初始化tbody上绑定的在编辑条目id
		$("#tbodyId").data("editingId",null);
	}
}

//获取表单数据
function getQueryFormData(){
	var params={
			"showon":getShowon,
			"title":$("#searchTitleId").val(),
			"borrow":$("#ifBorrowed").val(),
			"pageSize":$("#pageSizeId").val()
	};
	return params;
}

//根据所在页面(元素id)确定显示状态
//这里有更巧妙的三目写法,不过为了易读....
function getShowon(){
	if(document.getElementById("showAllBooks")){
		return 1;
	}else if(document.getElementById("showDelBooks")){
		return 0;
	}else{
		return "";
	}
}

//点击搜索
$(".btn-search").click(function(){
	doQueryObjects();
});

//选择每页显示几条
$("#pageSizeId").change(function(){
	doQueryObjects();
});

//点击按钮 跳转至多少页
$(".jumpTo").click(function(){
	//判断输入的页码合法性
	var p = $(".jumpToWhere").val();
	var pageCount = $('#pageId').data("pageCount");
	if(isNaN(p) || p>pageCount || p<1){
		alert("请输入正确的页码");
		return;
	}
	$('#pageId').data("pageCurrent",p);
	doGetObjects();
})




