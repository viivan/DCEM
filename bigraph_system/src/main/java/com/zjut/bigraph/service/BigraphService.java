package com.zjut.bigraph.service;

import com.zjut.bigraph.common.BException;
import com.zjut.bigraph.dto.BigraphDTO;
import com.zjut.bigraph.dto.PageInfo;
import com.zjut.bigraph.dto.GraphListDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BigraphService {

    private final GraphService graphService;
    private final LinkService linkService;
    private final PortService portService;
    private final ServiceService serviceService;
    private final SiteService siteService;

    public BigraphDTO getBigraph(int id) {
        return BigraphDTO.builder()
                .graph(graphService.getGraph(id))
                .linkList(linkService.listLinks(id))
                .portList(portService.listPorts(id))
                .serviceList(serviceService.listServices(id))
                .siteList(siteService.listSites(id))
                .build();
    }

    public GraphListDTO listBigraph(String userId, String type, int pageNo, int pageSize) {
        return GraphListDTO.builder()
                .graphList(graphService.listGraphs(userId, type,(pageNo - 1) * pageSize, pageSize))
                .pageInfo(
                        PageInfo.builder()
                                .count(graphService.countGraph(userId))
                                .pageNo(pageNo)
                                .pageSize(pageSize)
                                .build())
                .build();
    }

    @Transactional(rollbackFor = Exception.class)
    public BigraphDTO insertBigraph(BigraphDTO bigraphDTO) {
        int result = graphService.insertGraph(bigraphDTO.getGraph());
        if (result == 0) {
            throw new BException("insert error.");
        }
        bigraphDTO.getLinkList().forEach(link -> link.setBigraphId(bigraphDTO.getGraph().getId()));
        bigraphDTO.getPortList().forEach(port -> port.setBigraphId(bigraphDTO.getGraph().getId()));
        bigraphDTO.getServiceList().forEach(service -> service.setBigraphId(bigraphDTO.getGraph().getId()));
        bigraphDTO.getSiteList().forEach(site -> site.setBigraphId(bigraphDTO.getGraph().getId()));
        linkService.insertLinks(bigraphDTO.getLinkList());
        portService.insertPorts(bigraphDTO.getPortList());
        serviceService.insertServices(bigraphDTO.getServiceList());
        siteService.insertSites(bigraphDTO.getSiteList());
        return bigraphDTO;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteBigraph(int id) {
        graphService.deleteGraph(id);
        linkService.deleteLink(id);
        portService.deletePort(id);
        serviceService.deleteService(id);
        siteService.deleteSite(id);
    }

    @Transactional(rollbackFor = Exception.class)
    public BigraphDTO updateBigraph(BigraphDTO bigraphDTO) {
        linkService.deleteLink(bigraphDTO.getGraph().getId());
        portService.deletePort(bigraphDTO.getGraph().getId());
        serviceService.deleteService(bigraphDTO.getGraph().getId());
        siteService.deleteSite(bigraphDTO.getGraph().getId());

        graphService.updateGraph(bigraphDTO.getGraph());
        bigraphDTO.getLinkList().forEach(link -> link.setBigraphId(bigraphDTO.getGraph().getId()));
        bigraphDTO.getPortList().forEach(port -> port.setBigraphId(bigraphDTO.getGraph().getId()));
        bigraphDTO.getServiceList().forEach(service -> service.setBigraphId(bigraphDTO.getGraph().getId()));
        bigraphDTO.getSiteList().forEach(site -> site.setBigraphId(bigraphDTO.getGraph().getId()));
        linkService.insertLinks(bigraphDTO.getLinkList());
        portService.insertPorts(bigraphDTO.getPortList());
        serviceService.insertServices(bigraphDTO.getServiceList());
        siteService.insertSites(bigraphDTO.getSiteList());
        return bigraphDTO;
    }
}
