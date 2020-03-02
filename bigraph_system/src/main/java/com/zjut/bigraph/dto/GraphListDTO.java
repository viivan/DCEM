package com.zjut.bigraph.dto;

import com.zjut.bigraph.model.Graph;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@Builder
@ToString
public class GraphListDTO {
    List<Graph> graphList;
    PageInfo pageInfo;
}
