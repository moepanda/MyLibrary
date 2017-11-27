package cc.pupp.library.common.controller;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cc.pupp.library.common.web.JsonResult;

@Controller
public class IndexController {
	@RequestMapping("/indexUI.do")
	public String indexUI(){
		System.out.println("indexUI");
		return "index";
	}
}
