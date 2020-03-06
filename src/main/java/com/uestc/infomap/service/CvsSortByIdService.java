package com.uestc.infomap.service;

import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.Writer;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/**
 * 实现将cvs处理后的数据进行排序，目的将同id的点找到。
 * 同时保存到相应文件point2.csv中，以便后续使用
 * */
@Service
public class CvsSortByIdService {
    @SneakyThrows

    public void csvtoGeojson(){
        File file1 = new File("src/main/resources/static/data/point1.csv");
        File file2 = new File("src/main/resources/static/data/point2.csv");
        if(!file2.exists()){
            file2.createNewFile();
        }
        FileReader fReader = new FileReader(file1);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        Writer writer = new FileWriter(file2);
        CSVWriter csvWriter = new CSVWriter(writer);
        Collections.sort(list, new Comparator<String[]>() {
            @Override
            public int compare(String[] o1, String[] o2) {
                if(o1[0].compareTo(o2[0])<0){
                    return -1;
                }else if(o1[0].compareTo(o2[0])==0){
                    return 0;
                }else {
                    return 1;
                }
            }
        });
        for (String[] ss:list){
            csvWriter.writeNext(ss);
        }
        csvWriter.close();
        csvReader.close();
    }
}
