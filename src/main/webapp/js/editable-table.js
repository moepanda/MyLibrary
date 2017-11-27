var EditableTable = function () {

'use strict';

    return {
 	   init: function () {
            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }
                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                editRow_pre(oTable, nRow)
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
		    jqTds[6].innerHTML = '<a class="edit" href=""><span class="label label-primary">保存</span></a>';
                jqTds[7].innerHTML = '<a class="cancel" href=""><span class="label label-info">取消</span></a>';
            }
	    	function editRow2(oTable, nRow) {
                editRow_pre(oTable, nRow)
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
		    jqTds[6].innerHTML = '<a class="edit" href=""><span class="label label-primary">保存</span></a>';
                jqTds[7].innerHTML = '<a class="cancel" data-mode="new" href=""><span class="label label-danger">撤销</span></a>';
            }
		function editRow_pre(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<input type="text" class="form-control small" value="' + aData[2] + '">';
                jqTds[3].innerHTML = '<input type="text" class="form-control small" value="' + aData[3] + '">';
                jqTds[4].innerHTML = '<input type="text" class="form-control small" value="' + aData[4] + '">';
                jqTds[5].innerHTML = '<input type="text" class="form-control small" value="' + aData[5] + '">';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
                oTable.fnUpdate('<a class="edit" href=""><span class="label label-success">编辑</span></a>', nRow, 6, false);
                oTable.fnUpdate('<a class="delete" href=""><span class="label label-danger">删除</span></a>', nRow, 7, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
                oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 6, false);
                oTable.fnUpdate('<a class="delete" href="">删除</a>', nRow, 7, false);
                oTable.fnDraw();
            }
            var oTable = $('#editable-sample').dataTable({
                "aLengthMenu": [
                    [5, 15, 20, -1],
                    [5, 15, 20, "All"]
                ],
                "iDisplayLength": 5,
                "sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ 每页显示",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [0]
                }]
            });
            jQuery('#editable-sample_wrapper .dataTables_filter input').addClass("form-control medium");
            jQuery('#editable-sample_wrapper .dataTables_length select').addClass("form-control xsmall");
            var nEditing = null;
            $('#editable-sample_new').click(function (e) {
		     //限制一次只能添加一个空白条目进行编辑
		    if($("#editable-sample tr").eq(1).find("input").length==0){
			e.preventDefault();
                	var aiNew = oTable.fnAddData(['','','', '', '', '', '','']);
                	var nRow = oTable.fnGetNodes(aiNew[0]);
                	editRow2(oTable, nRow);
                	nEditing = nRow;
		     }
                
            });
            $('#editable-sample a.delete').live('click', function (e) {;
                if (confirm("确认删除?") == false) {
                    return;
                	}
                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("删除成功!");
            });
            $('#editable-sample a.cancel').live('click', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, nEditing);
                    nEditing = null;
                }
            });
		 $('#editable-sample a.edit').live('click', function (e) {
                e.preventDefault();
                var nRow = $(this).parents('tr')[0];
                if (true) {
                    saveRow(oTable, nEditing);
                    nEditing = null;
                    alert("修改成功!");
                }else {
                    alert("请检查");
                }
            });
		/*
            $('#editable-sample a.edit').live('click', function (e) {
                e.preventDefault();
                var nRow = $(this).parents('tr')[0];
                if (nEditing !== null && nEditing != nRow) {
                    restoreRow(oTable, nEditing);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                } else if (nEditing == nRow && this.innerHTML == "保存") {
                    saveRow(oTable, nEditing);
                    nEditing = null;
                    alert("修改成功!");
                } else {
                    editRow(oTable, nRow);
                    nEditing = nRow;
                }
            });
		*/
        }
    };
}();
