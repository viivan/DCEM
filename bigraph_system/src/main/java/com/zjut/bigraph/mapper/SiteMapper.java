package com.zjut.bigraph.mapper;

import com.zjut.bigraph.model.Site;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface SiteMapper {

    @Select("select id, bigraph_id, site_id, site_outer_id, create_time, update_time from site " +
            "where bigraph_id = @{bigraphId}")
    List<Site> listSiteList(int bigraphId);

    @Delete("delete from site where bigraph_id = @{bigraphId}")
    int deleteSite(int bigraphId);

    @Insert("insert into site(bigraph_id, site_id, site_outer_id) values(@{bigraphId}, @{siteId}, @{siteOuterId})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int insertSite(Site site);
}
