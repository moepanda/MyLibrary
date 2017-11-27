package cc.pupp.library.common.exception;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cc.pupp.library.common.web.JsonResult;
/**声明全局异常处理类*/
@ControllerAdvice
public class ControllerExceptionHandler {
	@ExceptionHandler(ServiceException.class)
	@ResponseBody
	public JsonResult handleServiceException(
			   ServiceException e){
		e.printStackTrace();
		//将异常封装到JsonResult
		return new JsonResult(e);
	}
	@ExceptionHandler(RuntimeException.class)
	public ModelAndView  handleRuntimeException(RuntimeException e) {
		e.printStackTrace();
		ModelAndView mv=new ModelAndView("error");
		mv.addObject("exp", e.getMessage());
		return mv;
	}
}
