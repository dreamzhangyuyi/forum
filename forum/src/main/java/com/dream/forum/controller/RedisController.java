package com.dream.forum.controller;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;

public class RedisController {
    @Autowired
    private RedisTemplate redisTemplate;

    @ApiOperation(httpMethod = "POST", value = "Hello")
    @RequestMapping("/hello")
    public String getInfo(String userId) {
        String str = String.valueOf(redisTemplate.opsForHash().get("user:" + userId, "p")) ;
        return str;
    }
}
