package com.zjut.bigraph.service;

import com.zjut.bigraph.common.BException;
import com.zjut.bigraph.mapper.SiteMapper;
import com.zjut.bigraph.model.Site;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SiteService {

    private final SiteMapper siteMapper;

    public void insertSites(List<Site> siteList) {
        siteList.forEach(siteMapper::insertSite);
    }

    public void deleteSite(int bigraphId) {
        siteMapper.deleteSite(bigraphId);
    }

    public List<Site> listSites(int bigraphId) {
        return siteMapper.listSiteList(bigraphId);
    }
}
