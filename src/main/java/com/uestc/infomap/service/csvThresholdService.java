package com.uestc.infomap.service;

import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import lombok.SneakyThrows;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

/**获取去重处理后的轨迹数据，然后将阈值不符合的排出在外
 * 速度阈值，时间间隔阈值，距离阈值
 * 1. 速度阈值，速度不为负数
 * 2、距离阈值，两点之间不超过100米
 * 3、平均速度阈值，两点之间除以时间间隔，速度不超过100mi
 * 4、时间间隔，时间间隔不宜过大，如果过大则视为新的轨迹点
 * */
public class csvThresholdService {
    @SneakyThrows
    public void csvThreshold(){
        File file = new File("src/main/resources/static/data/csv/pointScopeSortDeal.csv");
        File file1 = new File("src/main/resources/static/data/csv/pointScopeSortDeal2.csv");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader reader = new FileReader(file);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        List<String[]> list1 = new ArrayList<>();

        int i = 1;
        int len = list.size();
        if (list.get(0)[0].compareTo(list.get(1)[0]) != 0 || list.get(0)[1].compareTo(list.get(1)[1]) != 0 || list.get(0)[2].compareTo(list.get(1)[2]) != 0) {
            list1.add(list.get(0));
        }
        while (i < len) {
            if(list.get(i)[0].compareTo(list.get(i-1)[0])==0){
                Double x1 = Double.parseDouble(list.get(i)[1]);
                Double y1 = Double.parseDouble(list.get(i)[2]);
                Double x2 = Double.parseDouble(list.get(i-1)[1]);
                Double y2 = Double.parseDouble(list.get(i-1)[2]);
                Double distance  =Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));

                if(distance>=0 && distance<0.01){
                    System.out.println(distance);
                    list1.add(list.get(i));
                }
            }else {
                list1.add(list.get(i));
            }
            i++;
            if (i == 10000) {
                break;
            }
        }
        Writer writer = new FileWriter(file1);
        CSVWriter csvWriter = new CSVWriter(writer);
        csvWriter.writeAll(list1);
        csvReader.close();
        csvWriter.close();
    }
}
