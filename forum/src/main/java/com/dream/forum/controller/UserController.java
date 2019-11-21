package com.dream.forum.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(value = "UserController", description = "用户接口")
@RequestMapping("/user")
public class UserController {

    @ApiOperation(httpMethod = "POST", value = "Hello")
    @RequestMapping("/hello")
    public String getInfo() {
        return "Hello";
    }
}
