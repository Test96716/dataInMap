package com.uestc.infomap.utils;

import com.uestc.infomap.pojo.geoPointFianl;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;

import java.io.File;

@Component
public class JsonFile {
    @SneakyThrows
    public void jsonFileWrite(String str, geoPointFianl geo) {
        File file = new File(str);
        if (!file.exists()) {
            file.createNewFile();
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file, geo);
    }
}
