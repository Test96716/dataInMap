package com.uestc.infomap;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.uestc.infomap.pojo.geojsonPoint;
import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.*;
import java.util.*;


@SpringBootTest
class InfomapApplicationTests {

    @Test
    void contextLoads() {
    }
    @Test
    void saveFile() throws IOException {
        geojsonPoint gpoint = new geojsonPoint();
        File file = new File("src/main/resources/static/data/1.json");
        if(!file.exists()){
                file.createNewFile();
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.writeValue(file,gpoint);

    }
    @SneakyThrows
    @Test
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

    @Test
    void sorttest(){
        String[] a={"a","b"};
        String[] b={"c","d"};
        String[] c={"e","f"};
        List<String[]> list = new ArrayList<>();
        list.add(a);
        list.add(c);
        list.add(b);

        Collections.sort(list, new Comparator<String[]>() {
            @Override
            public int compare(String[] o1, String[] o2) {
                if(o1[0].compareTo(o2[0])<0){
                    return -1;
                }
                else if(o1[0].compareTo(o2[0])==0){
                    return 0;
                }else {
                    return 1;
                }
            }
        });
        Iterator iterator =list.iterator();
        while (iterator.hasNext()){
            String[] temp= (String[]) iterator.next();
            System.out.println(temp[0]+","+temp[1]);
        }
    }
    @SneakyThrows
    @Test
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
    @SneakyThrows
    @Test
    public void csvToGeo(){
        File file = new File("src/main/resources/static/data/point2.csv");
        FileReader reader = new FileReader(file);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
    }
}
