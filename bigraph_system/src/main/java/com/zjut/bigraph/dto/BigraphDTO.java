package com.zjut.bigraph.dto;

import com.zjut.bigraph.model.Graph;
import com.zjut.bigraph.model.Link;
import com.zjut.bigraph.model.Port;
import com.zjut.bigraph.model.Service;
import com.zjut.bigraph.model.Site;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@ToString
public class BigraphDTO {
    Graph graph;
    List<Link> linkList;
    List<Port> portList;
    List<Service> serviceList;
    List<Site> siteList;

    public BigraphDTO() {
        this.linkList = new ArrayList<>();
        this.portList = new ArrayList<>();
        this.serviceList = new ArrayList<>();
        this.siteList = new ArrayList<>();
    }
}
