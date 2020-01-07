package com.dream.forum;

import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableScheduling
@MapperScan("com.dream.forum.mapper")
@Slf4j
public class ForumApplication {

    @Before
    public void setUp() {
    }
    @Test
    public void test() {
        log.trace("trace 成功了");
        log.debug("debug 成功了");
        log.info("info 成功了");
        log.warn("warn 成功了");
        log.error("error 成功了");
    }

    public static void main(String[] args) {
        SpringApplication.run(ForumApplication.class, args);
    }

}
