package com.uestc.infomap.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.uestc.infomap.pojo.geojsonPoint;
import org.springframework.stereotype.Service;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

/*完成对单独定位点数据的存储 */
@Service()
public class pointSaveService {
    @lombok.SneakyThrows
    public void pointSave(String mapPoint){
        String[] result= mapPoint.split("\\,");
        SimpleDateFormat sDateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = sDateFormat.parse(result[2]);
        geojsonPoint gpoint = new geojsonPoint(result[0],result[1],date,result[3]);
        File file = new File("src/main/resources/static/data/point.json");
        if(!file.exists()){
            file.createNewFile();
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.writeValue(file,gpoint);
    }
}

