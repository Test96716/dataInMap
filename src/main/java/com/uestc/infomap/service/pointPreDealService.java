package com.uestc.infomap.service;

import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

/**
 * 轨迹数据预处理，将轨迹数据中重复的数据去除，参考同一个轨迹数据的同一个坐标点
 * 并且只获取1w个轨迹点
 */
@Service
public class pointPreDealService {
    @SneakyThrows
    public String pointPreDeal(String path) {
        File file = new File(path);
        File file1 = new File("src/main/resources/static/data/json/pointSaveSortDeal.csv");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader reader = new FileReader(file);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        List<String[]> list1 = new ArrayList();
        int i = 1;
        int len = list.size();
        if (list.get(0)[0].compareTo(list.get(1)[0]) != 0 || list.get(0)[1].compareTo(list.get(1)[1]) != 0 || list.get(0)[2].compareTo(list.get(1)[2]) != 0) {
            list1.add(list.get(0));
        }
        while (i < len) {
            if (list.get(i)[0].compareTo(list.get(i - 1)[0]) != 0 || list.get(i)[1].compareTo(list.get(i - 1)[1]) != 0 || list.get(i)[2].compareTo(list.get(i - 1)[2]) != 0) {
                list1.add(list.get(i));
            }
            i++;
            System.out.println(i);
            if (i == 10000) {
                break;
            }
        }
        Writer writer = new FileWriter(file1);
        CSVWriter csvWriter = new CSVWriter(writer);
        csvWriter.writeAll(list1);
        csvReader.close();
        csvWriter.close();
        return file1.getPath();
    }
}
