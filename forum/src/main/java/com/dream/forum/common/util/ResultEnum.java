package com.dream.forum.common.util;

public enum ResultEnum {
    UN_KNOW_ERROR("9999","未知错误"),
    /*成功*/
    SUCCESS("0000","成功"),
    /*失败*/
    FAIL("8888","接口异常"),
    ;
    /*枚举值*/
    ResultEnum(String code, String message) {
        this.code = code;
        this.message = message;
    }

    private String code;
    private String message;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
