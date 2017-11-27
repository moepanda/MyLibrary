$(function(){
	doGetObjects();
});

//仿照 沪江网 优化搜索体验
//鼠标移入获得焦点并全选文本
$(".titleSearchInput").mouseenter(function(){
	//console.log($(this).is(":focus"));
	console.log("halo!");
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


//删除(移至回收站)
$("#editable-sample .delete").die().live("click",function(){
	//查询数据库
	//console.log(this);
	var title = $(this).parent().parent().children().eq(1).text();
//	var params = getEditForData(tr);
	var params = {title:title};
	console.log(params);
	var url = "project/findByTitle.do";
	$.getJSON(url,params,function(result){
		console.log(result);
		if(!confirm("确认删除?编号:"+result.num)) {
	        return;
	    }
		//移入回收站
		var deleInfo = {title:result.title,showon:0};
		url="project/moveByTitle.do"
		$.getJSON(url,deleInfo,function(){
			doGetObjects();
			$(this).alert("删除成功!");
		});
	});
});



//确保一次只有一个条目处于编辑状态,避免数据的保存混乱
function editing(){
	if($("#editable-sample").find("input").length>2){
		return true;
	}else{
		return false;
	}
}
    

//添加一个空白可编辑的新行
$("#editable-sample_new").click(function(){
	if(editing()){
		return;
	}
	var oddEven = $("#editable-sample tr").eq(1).hasClass("odd")?"odd":"even";
	var newTr = '<tr class="'+oddEven+'">'+editAble+'</tr>';
	$("#editable-sample").prepend(newTr);
});
var editAble = 
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td><input name="" class="form-control small" type="text"/></td>'+
	'<td>'+
	    '<select size="1" name="editable-sample_length" '+
	    'aria-controls="editable-sample" class="form-control xsmall">'+
	    	'<option value="" selected="selected">状态</option>'+
		    '<option value="1">已借出</option>'+
		    '<option value="0">未借出</option>'+
	    '</select>'+
	'</td>'+
	'<td></td>'+
	'<td><a class="save" href="javascript:;"><span class="label label-primary">保存</span></a></td>'+
	'<td><a class="cancel" href="javascript:;"><span class="label label-info">撤销</span></a></td>';



function doSave(){
	
}

function getEditForData(tr){
	console.log("tr:"+tr);
	var num = tr.children().eq(0).find("input").val();
	var title = tr.children().eq(1).find("input").val();
	var author = tr.children().eq(2).find("input").val();
	var press = tr.children().eq(3).find("input").val();
	var borrow = tr.children().eq(4).find("#editBorrow").val();
	var params = {
		"num":num,
		"title":title,
		"author":author,
		"press":press,
		"borrow":borrow
	};
	console.log("pre_save_params:"+params);
	return params;
}

$("#editable-sample .save").die().live("click",function(){
	var num = $(this).parent().parent().children().eq(1).text();
	
	if(true){
		doSave(tr);
		alert("保存成功!");
		//重新查询数据库,更新页面
	}else{
		alert("保存失败,请检查数据");
	}
});

function tr_edit(t){
	if(editing()){
		return;
	}
	var tr = t.parent().parent();
	tr.children("td").remove();
	tr.append(editAble);
	
}

$("#editable-sample .cancel").die().live("click",function(){
	if (!confirm("放弃操作吗?")) {
		return;
	}
	doGetObjects();
});


//无服务器交互时,以下作为静态页面演示效果用
//
//$("#editable-sample .cancel").die().live("click",function(){
//	if (!confirm("放弃操作吗?")) {
//		return;
//	}
//	if ($(this).find("span").text()=="撤销") {
//		tr_del($(this));
//    } else {
//    	//这里卡了很久,点击取消后,借用save方法更新了该行,此时
//    	//原有的this对象就消失了,所以要重新获取新加的tr节点
//    	tr = tr_save($(this));
//    	//重新写入编辑前的数据
//    	for(i=0;i<6;i++){
//    		tr.children("td").eq(i).text(backup[i]);
//    	}
//    	var colorInput = tr.children("td").eq(4);
//    }
//});
//

//function tr_save(t){
//	var tr = t.parent().parent();
//	var arr = [];
//	for(var i=0;i<6;i++){
//		arr[i]=tr.children("td").eq(i).find("input").val();
//	}
//	tr.children("td").remove();
//	console.log(arr[4]);
//	console.log(arr[4]=="未借出");
//	var tds = 
//		'<td>'+arr[0]+'</td>'+
//		'<td>'+arr[1]+'</td>'+
//		'<td>'+arr[2]+'</td>'+
//		'<td>'+arr[3]+'</td>'+
//		'<td style="color:'+(arr[4]=="未借出"?"green":"red")+'">'+arr[4]+'</td>'+
//		'<td>'+arr[5]+'</td>'+
//		'<td><a class="edit" href="javascript:;"><span class="label label-success">编辑</span></a></td>'+
//        '<td><a class="delete" href="javascript:;"><span class="label label-danger">删除</span></a></td>';
//	tr.append(tds);
//	return tr;
//}


function tr_del(t){
	var tr = t.parent().parent();
	tr.remove();
}

//var backup = [];
//function tr_edit(t){
//	if(editing()){
//		return;
//	}
//	var tr = t.parent().parent();
//	var arr = [];
//	for(i=0;i<6;i++){
//		arr[i]=tr.children("td").eq(i).text();
//	}
//	backup = arr;//取消时,恢复成编辑前的数据
//	tr.children("td").remove();
//	tr.append(editAble);
//	for(i=0;i<4;i++){
//		tr.children("td").eq(i).find("input").val(arr[i]);
//	}
//	tr.children("td").eq(4).find("input").css("color","green");
//	tr.children("td").eq(5).html(arr[5]);
//	//将"撤销"改为"取消",以作区分,在静态页面下可对应不同处理方式(直接删除/恢复编辑前的数据)
//	tr.children("td").eq(7).find("span").text("取消");
//}

$("#editable-sample .edit").die().live("click",function(){
	tr_edit($(this));
});

function doQueryObjects(){
	//1,初始化当前页码信息
	$('#pageId').data("pageCurrent",1);
	doGetObjects();
}


/*(ajax)异步加载服务端数据*/
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
		//console.log(result);
		setPagination(result.pageObject);
	});
}

/*将服务端返回的json对象数据显示在页面上*/
function setTableBodyRows(list){
	//1.获得具体dom对象(显示数据位置的那个dom)
	var tBody = $("#tbodyId");
	tBody.empty();
	//2.迭代result对象
	for(var i in list){
		//构建tr对象
		var tr = $("<tr></tr>");
		tr.data("id",list[i].id);
		//构建td对象
		var tdBorrow = list[i].borrow==0?'<td style="color:green">未借出</td>':'<td style="color:red">已借出</td>';
		var tds = 
			'<td>'+list[i].num+'</td>'+
	        '<td>'+list[i].title+'</td>'+
	        '<td>'+list[i].author+'</td>'+
	        '<td>'+list[i].press+'</td>'+
	        tdBorrow +
	        '<td>'+list[i].modifiedTime+'</td>'+
	        '<td><a class="edit" href="javascript:;"><span class="label label-success">编辑</span></a></td>'+
	        '<td><a class="delete" href="javascript:;"><span class="label label-danger">删除</span></a></td>';
		//将td对象添加到tr中
		tr.append(tds);
		//将tr对象添加到tboady中
		tBody.append(tr);
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
	var p = $(".jumpToWhere").val();
	$('#pageId').data("pageCurrent",p);
	doGetObjects();
})




