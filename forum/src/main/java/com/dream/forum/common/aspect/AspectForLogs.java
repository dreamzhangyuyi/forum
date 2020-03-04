package com.dream.forum.common.aspect;

import com.aliyun.openservices.shade.com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class AspectForLogs {

    @Pointcut("execution(* com.dream.forum.controller..*.*(..))")
    public void aspectForLog(){};

    @Around("aspectForLog()")
    public Object doAroundMethods(ProceedingJoinPoint pjp) throws Throwable {
        try {
            log.info("方法:{}开始执行", pjp.getSignature().getName());
            log.info("入参：{}", JSON.toJSONString(pjp.getArgs()));
            Object result = pjp.proceed();
            log.info("方法:{}执行完成", pjp.getSignature().getName());
            return result;
        } catch (Exception e) {
            log.error("方法:{}执行异常，错误:{}",pjp.getSignature().getName(),e.getMessage());
            return null;
        }
    }
}
