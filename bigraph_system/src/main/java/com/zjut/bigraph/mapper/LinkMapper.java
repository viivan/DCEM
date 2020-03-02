package com.zjut.bigraph.mapper;

import com.zjut.bigraph.model.Link;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface LinkMapper {

    @Select("select id, bigraph_id, link_from, link_to, create_time, update_time from link where bigraph_id = @{graphId}")
    List<Link> listLinkList(int graphId);

    @Delete("delete from link where bigraph_id = @{graphId}")
    int deleteLink(int graphId);

    @Insert("insert into link(bigraph_id, link_from, link_to) values(@{bigraphId}, @{linkFrom}, @{linkTo})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int insertLink(Link link);
}
