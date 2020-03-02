package com.zjut.bigraph.service;

import com.zjut.bigraph.mapper.ServiceMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ServiceService {

    private final ServiceMapper serviceMapper;

    public void insertServices(List<com.zjut.bigraph.model.Service> serviceList) {
        serviceList.forEach(serviceMapper::insertService);
    }

    public void deleteService(int bigraphId) {
        serviceMapper.deleteService(bigraphId);
    }

    public List<com.zjut.bigraph.model.Service> listServices(int bigraphId) {
        return serviceMapper.listServiceList(bigraphId);
    }
}
