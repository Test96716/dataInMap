package com.uestc.infomap.service.filedata;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.*;
/**将json格式地图转化为一个用geohash做键值，数据做值得map中并返回
 * */
@Service
public class geoHashInMapService {
    public Map geoHashInMap() throws IOException {
        File file1 = new File("src/main/resources/static/data/chengduMap.json");

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(file1);
        JsonNode features = jsonNode.get("features");
        Iterator iterator = features.iterator();
        Map<String,Map> map = new HashMap();
        while (iterator.hasNext()) {
            JsonNode jsonNode1 = (JsonNode) iterator.next();
            String strGeoHash = jsonNode1.get("geohash").asText();
            JsonNode jsonNode2 = jsonNode1.get("list");
            Iterator iterator1 = jsonNode2.iterator();
            Map<String,List> map1 = new HashMap();
            while (iterator1.hasNext()) {
                JsonNode jsonNode3 = (JsonNode) iterator1.next();
                String strID = jsonNode3.get("objectid").asText();
                JsonNode jsonNode4 = jsonNode3.get("coordinates");
                Iterator iterator2 = jsonNode4.iterator();
                List list  = new ArrayList();
                while (iterator2.hasNext()){
                    list.add(iterator2.next());
                }
                map1.put(strID, list);
        }
            map.put(strGeoHash, map1);
        }
        return map;
    }
}
