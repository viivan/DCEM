package com.zjut.bigraph.mapper;

import com.zjut.bigraph.model.Graph;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface GraphMapper {

    @Select({"select id, xml_string, name, request_type, user_id, data_clusters, term_language, type, request_count, " +
            "create_time, update_time from graph where id = @{id}"})
    Graph getGraph(int id);

    @Select({"select id, xml_string, name, request_type, user_id, data_clusters, term_language, type, request_count, " +
            "create_time, update_time from graph " +
            "where 1=1 " +
            "#if($_parameter.userId) " +
            "   and user_id = @{userId} " +
            "#end " +
            "#if($_parameter.type) " +
            "   and type = @{type} " +
            "#end " +
            "#if($_parameter.offset) " +
            "   LIMIT @{offset}, @{limit} " +
            "#end "})
    List<Graph> listGraphByUserId(String userId, String type, int offset, int limit);

    @Delete({"delete from graph where id = @{id}"})
    int deleteGraph(int id);

    @Insert("insert into graph(xml_string, name, request_type, user_id, data_clusters, term_language, type, request_count)" +
            " values (@{xmlString}, @{name}, @{requestType}, @{userId}, @{dataClusters}, @{termLanguage}, @{type}, 0)")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int insertGraph(Graph graph);

    @Update("update graph set xml_string = @{xmlString}, data_clusters = @{dataClusters}," +
            "term_language = @{termLanguage}, type = @{type}, name = @{name}, request_type = @{requestType} where id = @{id}")
    int updateGraph(Graph graph);

    @Select("select count(*) from graph #if($_parameter.userId) where user_id = @{userId} #end")
    int countGraph(String userId);

    @Update("update graph set request_count = request_count + 1 where id = @{id}")
    int addOne(int id);
}
