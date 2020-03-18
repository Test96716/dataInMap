package com.uestc.infomap.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVReader;
import com.uestc.infomap.pojo.geoPoint;
import com.uestc.infomap.pojo.geoPoint1;
import com.uestc.infomap.pojo.geoPointFianl;
import com.uestc.infomap.utils.CsvFile;
import com.uestc.infomap.utils.JsonFile;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

/**
 * 通过加载文件，将其转换为实体类，再将其转化为geojson数据
 */

@Service
public class csvToGeojsonService {
    @Autowired
    CsvFile csvFile;

    @SneakyThrows
    public void csvToGeo(String path) {
        File file1 = new File(path);
        File file2 = new File("src/main/resources/static/data/json/pointSave.json");
        if (!file2.exists()) {
            file2.createNewFile();
        }
        FileReader reader = new FileReader(file1);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        ObjectMapper objectMapper = new ObjectMapper();
        List<geoPoint1> list1 = new ArrayList();
        for (String[] ss : list) {
            geoPoint geo = new geoPoint("Point", new Double[]{Double.parseDouble(ss[1]), Double.parseDouble(ss[2])}, ss[0], ss[3], ss[4], ss[5], ss[6]);
            geoPoint1 geo1 = new geoPoint1("Feature", geo);
            list1.add(geo1);
        }
        geoPointFianl geo2 = new geoPointFianl("FeatureCollection", list1);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file2, geo2);
        csvReader.close();

    }
}
