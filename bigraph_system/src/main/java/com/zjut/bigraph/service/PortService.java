package com.zjut.bigraph.service;

import com.zjut.bigraph.mapper.PortMapper;
import com.zjut.bigraph.model.Port;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PortService {

    private final PortMapper portMapper;

    public void insertPorts(List<Port> portList) {
        portList.forEach(portMapper::insertPort);
    }

    public void deletePort(int bigraphId) {
        portMapper.deletePort(bigraphId);
    }

    public List<Port> listPorts(int bigraphId) {
        return portMapper.listPortList(bigraphId);
    }
}
