package com.zjut.bigraph.service;

import com.zjut.bigraph.mapper.LinkMapper;
import com.zjut.bigraph.model.Link;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LinkService {

    private final LinkMapper linkMapper;

    public void insertLinks(List<Link> linkList) {
        linkList.forEach(linkMapper::insertLink);
    }

    public void deleteLink(int bigraphId) {
        linkMapper.deleteLink(bigraphId);
    }

    public List<Link> listLinks(int bigraphId) {
        return linkMapper.listLinkList(bigraphId);
    }
}
