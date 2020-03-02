package com.zjut.bigraph.mapper;

import com.zjut.bigraph.model.User;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface UserMapper {

    @Select("select id, user_password, user_id, name, create_time, update_time from user from user " +
            "where user_id = @{userId}")
    User getUser(String userId);

    @Update("update user set name = #{user}, user_password = #{userPassword} where user_id = @{userId}")
    int updateUser(User user);
}
