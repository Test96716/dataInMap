package com.uestc.infomap.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVReader;
import com.uestc.infomap.pojo.geoPoint3;
import com.uestc.infomap.pojo.geoPointFinal1;
import com.uestc.infomap.pojo.pointLine;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class geoPointToLine {
    @SneakyThrows
    public void pointToSingleLine(String path) {
        File file = new File(path);
        File file1 = new File("src/main/resources/static/data/json/pointSaveLine.json");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader fReader = new FileReader(file);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        List<geoPoint3> list3 = new ArrayList();
        String[] str = new String[10];
        List<Double[]> list2 = new ArrayList();
        for (String[] ss : list) {
            list2.add(new Double[]{Double.parseDouble(ss[1]), Double.parseDouble(ss[2])});
            str[0] = ss[0];
            str[1] = ss[3];
            str[2] = ss[4];
            str[3] = ss[5];
            str[4] = ss[6];
        }
        pointLine geo = new pointLine("LineString", list2, str[0], str[1], str[2], str[3], str[4]);
        geoPoint3 geo1 = new geoPoint3("Feature", geo);
        list3.add(geo1);

        ObjectMapper objectMapper = new ObjectMapper();
        geoPointFinal1 geo2 = new geoPointFinal1("FeatureCollection", list3);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file1, geo2);
        csvReader.close();
    }
}
