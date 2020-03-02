package com.zjut.bigraph.service;

import com.zjut.bigraph.mapper.GraphMapper;
import com.zjut.bigraph.model.Graph;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class GraphService {

    private final GraphMapper graphMapper;

    public int insertGraph(Graph graph) {
        return graphMapper.insertGraph(graph);
    }

    public int countGraph(String id) {
        return graphMapper.countGraph(id);
    }

    public void deleteGraph(int id) {
        graphMapper.deleteGraph(id);
    }

    public void updateGraph(Graph graph) {
        graphMapper.updateGraph(graph);
    }

    public Graph getGraph(int id) {
        return graphMapper.getGraph(id);
    }

    public List<Graph> listGraphs(String userId, String type, int offset, int limt) {
        return graphMapper.listGraphByUserId(userId, type, offset, limt);
    }

    public int addCount(int id) {
        return graphMapper.addOne(id);
    }
}
