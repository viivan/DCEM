package com.zjut.bigraph.mapper;

import com.zjut.bigraph.model.Service;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ServiceMapper {

    @Select("select id, bigraph_id, service_id, service_name, service_parent_node, service_children_count, " +
            "service_inner, service_site_number, create_time, update_time from service where bigraph_id = @{bigraphId}")
    List<Service> listServiceList(int bigraphId);

    @Delete("delete from service where bigraph_id = @{bigraphid}")
    int deleteService(int bigraphId);

    @Insert("insert into service(bigraph_id, service_id, service_name, service_parent_node, " +
            " service_children_count, service_inner, service_site_number) values(@{bigraphId}, @{serviceId}, @{serviceName}, " +
            "@{serviceParentNode}, @{serviceChildrenCount}, @{serviceInner}, @{serviceSiteNumber})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int insertService(Service service);
}
