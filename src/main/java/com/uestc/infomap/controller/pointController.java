package com.uestc.infomap.controller;

import com.uestc.infomap.service.CvsSortByIdService;
import com.uestc.infomap.service.csvToGeojsonService;
import com.uestc.infomap.service.geoPointToLine;
import com.uestc.infomap.service.pointPreDealService;
import com.uestc.infomap.service.webpoint.pointSaveService;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;


@Controller
@RequestMapping("/index")
public class pointController {
    private String path;
    @Autowired
    pointSaveService pointSave;

    public pointController(pointPreDealService pointPreDealService, CvsSortByIdService sortByIdService, csvToGeojsonService csvToGeojsonService, geoPointToLine geoPointToLine) {
        this.pointPreDealService = pointPreDealService;
        this.sortByIdService = sortByIdService;
        this.csvToGeojsonService = csvToGeojsonService;
        this.geoPointToLine = geoPointToLine;
    }

    @RequestMapping(value = "/pointSave")
    @ResponseBody
    public String pointGet(String map_xy) {
        Date date = new Date();
        String[] temp = map_xy.split(",");

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if (map_xy != null) {
            String[] stt = new String[7];
            stt[0] = "1";
            stt[1] = temp[0];
            stt[2] = temp[1];
            stt[3] = "0";
            stt[4] = "0";
            stt[5] = "0";
            stt[6] = sdf.format(date);
            System.out.println(map_xy);
            path = pointSave.pointSave(stt);
            return path;
        } else {
            return "fail";
        }

    }

    final
    CvsSortByIdService sortByIdService;
    final
    pointPreDealService pointPreDealService;
    final
    csvToGeojsonService csvToGeojsonService;
    final
    geoPointToLine geoPointToLine;

    @SneakyThrows
    @RequestMapping("/single")
    @ResponseBody
    public String singlePoint(String path) {
        /**
         * 对文件处理过程：
         * 1.获取源文件
         * 2.将源文件进行排序
         * 3.对排序后的文件进行相同点删除
         * 4.将源文件转化为geoJson文件
         * 5.将源文件转化为geoJson线文件
         */
        if (path.compareTo("1") == 0) {
            String pathSort = sortByIdService.CvsSortById("src/main/resources/static/data/csv/pointSave.csv");
            String pathDeal = pointPreDealService.pointPreDeal(pathSort);
            csvToGeojsonService.csvToGeo(pathDeal);
            geoPointToLine.pointToSingleLine(pathDeal);
            return "success";
        }
        return "fail";
    }
}
