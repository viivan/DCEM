package com.zjut.bigraph.mapper;

import com.zjut.bigraph.model.Port;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface PortMapper {

    @Select("select id, bigraph_id, port_id, port_name, data_type, port_type, port_attribute, create_time, update_time " +
            "from port where bigraph_id = @{graphId}")
    List<Port> listPortList(int graphId);

    @Delete("delete from port where bigraph_id = @{graphId}")
    int deletePort(int graphId);

    @Insert("insert into port(bigraph_id, port_id, port_name, data_type, port_type, port_attribute) values(" +
            "@{bigraphId}, @{portId}, @{portName}, @{dataType}, @{portType}, @{portAttribute})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int insertPort(Port port);
}
