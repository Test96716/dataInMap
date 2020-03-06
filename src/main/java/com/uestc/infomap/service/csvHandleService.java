package com.uestc.infomap.service;

import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.Writer;
import java.util.List;
/**
 * 实现将原数据处理为固定范围内的数据，具体为成都市附近的
 * 并且将其保存到point1.csv中。
 * */
@Service
public class csvHandleService {
    @SneakyThrows
    void printCvs(){
        File file = new File("F:\\CSVdata\\sichuan-xcar-2016080810.csv");
        File file1 = new File("src/main/resources/static/data/point1.csv");
        if(!file1.exists()){
            file1.createNewFile();
        }
        FileReader fReader = new FileReader(file);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        Writer writer = new FileWriter(file1);
        CSVWriter csvWriter = new CSVWriter(writer);
        for(String[] ss : list){
            if(ss[1].compareTo("103")>=0 && ss[1].compareTo("105")<0){
                if(ss[2].compareTo("31")<0&& ss[2].compareTo("30")>=0){
                    csvWriter.writeNext(ss);
                }
            }
        }
        csvWriter.close();
        csvReader.close();
    }

}

