package com.zjut.bigraph.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@Builder
@ToString
public class PageInfo {
    Integer count;
    Integer pageNo;
    Integer pageSize;
}
