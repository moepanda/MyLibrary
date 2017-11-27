package cc.pupp.library.common.web;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
/**
 * 自定义日期转换格式
 * */
public class JsonDateTypeConvert extends JsonSerializer<Date>{
	/**
	 * @param value 要转换的日期
	 * @param gen json对象生成器
	 * */
	@Override
	public void serialize(Date value,
			JsonGenerator gen, 
			SerializerProvider serializers)
			throws IOException, 
			JsonProcessingException {
		//定义日期字符串转换对象
		SimpleDateFormat sdf=
		new SimpleDateFormat("yy/MM/dd HH:mm:ss");
		//将日期转换为指定格式字符串
		String dateStr=sdf.format(value);
		//将此字符串写入到json对象中
		gen.writeString(dateStr);
	}
}
