package com.uestc.infomap.service.webpoint;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.uestc.infomap.pojo.geojsonPoint;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/*完成对单独定位点数据的存储 */
@Service()
public class pointSaveService {
    @lombok.SneakyThrows
    public String pointSave(String[] mapPoint) {
        File file = new File("src/main/resources/static/data/csv/pointSave.csv");
        if (!file.exists()) {
            file.createNewFile();
        }
        FileReader fReader = new FileReader(file);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        list.add(mapPoint);
        Writer writer = new FileWriter(file);
        CSVWriter csvWriter = new CSVWriter(writer);
        for (String[] str : list) {
            csvWriter.writeNext(str);
        }
        csvWriter.close();
        csvReader.close();
        return file.getPath();
    }
}

