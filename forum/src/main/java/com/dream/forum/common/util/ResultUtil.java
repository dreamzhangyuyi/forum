package com.dream.forum.common.util;

/**
 * Created by shiqiang on 2017/6/23.
 */
public class ResultUtil {
    @SuppressWarnings("unchecked")
    public static Result success(Object object){
        Result result = new Result(ResultEnum.SUCCESS.getCode(), ResultEnum.SUCCESS.getMessage());
        result.setData(object);
        return result;
    }

    /*成功无返回*/
    @SuppressWarnings("unchecked")
    public static Result success(){
        return ResultUtil.success(null);
    }

    /*失败方法*/
    @SuppressWarnings("unchecked")
    public static Result error(String code, String msg){
        Result result = new Result(code, msg);
        return result;
    }

    /*失败方法无入参*/
    public static  Result error() {
        Result result = new Result(ResultEnum.FAIL.getCode(), ResultEnum.FAIL.getMessage());
        return result;
    }
}
