package com.zjut.bigraph.controller;

import com.zjut.bigraph.common.BaseResponse;
import com.zjut.bigraph.common.BigraphResponse;
import com.zjut.bigraph.dto.BigraphDTO;
import com.zjut.bigraph.service.BigraphService;
import com.zjut.bigraph.service.GraphService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Min;

@RestController
@Validated
@CrossOrigin
@RequestMapping(value = "/api/v1/bigraph")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BigraphController {

    private final BigraphService bigraphService;
    private final GraphService graphService;

    @GetMapping("")
    public BaseResponse getBigraph(@RequestParam @Min(0) Integer id) {
        graphService.addCount(id);
        return new BigraphResponse<>(bigraphService.getBigraph(id));
    }

    @GetMapping("/list")
    public BaseResponse listBigraph(String userId,
                                    String type,
                                    @RequestParam(defaultValue = "1") Integer pageNo,
                                    @RequestParam(defaultValue = "10") Integer pageSize) {
        return new BigraphResponse<>(bigraphService.listBigraph(userId, type, pageNo, pageSize));
    }

    @GetMapping(value = "/xml", produces = "application/xml;charset=utf-8")
    public String getBigraphXml(@RequestParam @Min(0) Integer id) {
        graphService.addCount(id);
        return graphService.getGraph(id).getXmlString();
    }

    @PostMapping("")
    public BaseResponse postBigraph(@RequestBody BigraphDTO bigraphDTO) {
        return new BigraphResponse<>(bigraphService.insertBigraph(bigraphDTO));
    }

    @PatchMapping("")
    public BaseResponse patchBigraph(@RequestBody BigraphDTO bigraphDTO) {
        return new BigraphResponse<>(bigraphService.updateBigraph(bigraphDTO));
    }

    @DeleteMapping("")
    public BaseResponse deleteBigraph(@RequestParam Integer id) {
        bigraphService.deleteBigraph(id);
        return new BigraphResponse<>();
    }
}
