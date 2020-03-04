package com.dream.forum.service.serviceImpl;

import com.dream.forum.common.util.Result;
import com.dream.forum.common.util.ResultUtil;
import com.dream.forum.entity.User;
import com.dream.forum.mapper.UserMapper;
import com.dream.forum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service(value = "UserService")
public class UserSerivceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Result getUserInfo(User user) {
        User userInfo =  userMapper.selectByPrimaryKey(user.getUserId());
        Map data = new HashMap();
        data.put("userInfo", userInfo);
        return ResultUtil.success(data);
    }
}
