package com.dream.forum.common.swagger;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * 项目启动时用于自动打开 http://localhost:{port}/swagger-ui.html
 * @author 王仁进
 * @Description
 * @date 2019-07-22 14:55
 */
@Component
@Slf4j
public class AutoExecuteAfterServerStarted implements ApplicationRunner {

	//获取执行调用工具，缺省配置时的默认值：explorer-浏览器
	@Value("${spring.web.excute-tool:explorer}")
	private String excuteTool;

	//获取是否开启打开配置的url，缺省配置时默认值：false-不打开/不执行
	@Value("${spring.web.isopenurl:false}")
	private boolean isOpen;

	@Value("${spring.web.open-url:}")
	private String openUrl;

	@Override
	public void run(ApplicationArguments args){
		if (!isLinuxServer()){
			//启动swagger-ui
			this.applicationAutoExcute();
		}
	}

	private Boolean isLinuxServer() {
		String osName = System.getProperties().getProperty("os.name");
		if("Linux".equals(osName)) {
			log.debug("***AutoExecuteAfterServerStarted- running in Linux");
			return true;
		}
		else{
			log.debug("***AutoExecuteAfterServerStarted- don't running in Linux");
			return false;
		}
	}

	private void applicationAutoExcute() {

		log.debug("***AutoExecuteAfterServerStarted-isOpen：" + isOpen);
		if (isOpen){
			String cmd = excuteTool +" "+ openUrl;
			log.debug("***AutoExecuteAfterServerStarted-浏览地址：" + cmd);
			Runtime run = Runtime.getRuntime();
			try{
				run.exec(cmd);
				log.debug("***AutoExecuteAfterServerStarted-启动浏览器打开项目成功！");
			}catch (Exception e){
				e.printStackTrace();
				log.error(e.getMessage());
			}
		}
	}
}
