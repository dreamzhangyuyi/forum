package com.dream.forum.service;

import com.dream.forum.common.util.Result;
import com.dream.forum.entity.User;
import org.springframework.stereotype.Service;

public interface UserService {
    Result getUserInfo(User user);
}
