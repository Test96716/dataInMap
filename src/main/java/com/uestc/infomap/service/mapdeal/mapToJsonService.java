package com.uestc.infomap.service.mapdeal;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.Iterator;

/**将成都地图进行格式处理，转化为geojson格式
 * */
@Service
public class mapToJsonService {
    @SneakyThrows
    public void  mapToJson(){
        File file = new File("src/main/resources/static/data/line-chengdu.json");
        File file1 = new File("src/main/resources/static/data/line-chengdu1.json");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode jsonNode = (ObjectNode) objectMapper.readTree(file);
        JsonNode features = jsonNode.get("features");
        Iterator<JsonNode> iterator = features.iterator();
        while (iterator.hasNext()) {
            if (((iterator.next()).get("properties").get("highway").asText()).compareTo("null") == 0) {
                System.out.println("-----");
                iterator.remove();
            }
        }
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file1, jsonNode);
    }
}
