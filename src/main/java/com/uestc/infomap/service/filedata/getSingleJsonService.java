package com.uestc.infomap.service.filedata;

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

@Service
public class getSingleJsonService {
    @SneakyThrows
    public void getSingleJson() {
        File file = new File("src/main/resources/static/data/pointScopeSort.csv");
        File file1 = new File("src/main/resources/static/data/singlePointLine.csv");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader fReader = new FileReader(file);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        Writer writer = new FileWriter(file1);
        CSVWriter csvWriter = new CSVWriter(writer);
        int i = 0;
        List<String[]> list1 = new ArrayList<>();
        while (i < list.size() - 1) {
            if (list.get(i)[0].compareTo(list.get(i + 1)[0]) == 0) {
                list1.add(list.get(i));
            } else {
                break;
            }
            i++;
        }
        csvWriter.writeAll(list1);
        csvWriter.close();
        csvReader.close();
    }
}
