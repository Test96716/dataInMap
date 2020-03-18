package com.uestc.infomap.service.mapdeal;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.uestc.infomap.pojo.mappojo.map1pojo;
import com.uestc.infomap.pojo.mappojo.map2pojo;
import com.uestc.infomap.pojo.mappojo.mapFinal;
import com.uestc.infomap.service.filedata.jsonNodeToDoubleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.*;

/**将地图文件转化为geohash编码的地图文件，包含了geohash码，道路id，以及道路坐标
 * */
@Service
public class chengduMapService {
    @Autowired
    jsonNodeToDoubleService jsToDouble;

    public void chengduMap() throws IOException {
        File file = new File("src/main/resources/static/data/line-chengdu1.json");
        File file1 = new File("src/main/resources/static/data/chengduMap.json");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(file);
        JsonNode features = jsonNode.get("features");
        Iterator<JsonNode> iterator = features.iterator();
        int i = 0;
        Map temp = new HashMap();
        while (iterator.hasNext()) {
            JsonNode js = iterator.next();
            String string = js.get("properties").get("OBJECTID").asText();
            JsonNode kk = js.get("geometry").get("coordinates");
            temp = jsToDouble.jsonNodeToDouble(kk, string, temp);
           /* if(i==10000){
                break;
            }
            i++;*/
        }

        Set setTemp = temp.keySet();
        map1pojo map1pojo = new map1pojo();
        map2pojo map2pojo = new map2pojo();
        List list = new ArrayList();

        List<com.uestc.infomap.pojo.mappojo.map1pojo> list2 = new ArrayList<com.uestc.infomap.pojo.mappojo.map1pojo>();
        Iterator iterator1 = setTemp.iterator();
        while (iterator1.hasNext()) {
            String strTempKey = (String) iterator1.next();
            Map map1 = (Map) temp.get(strTempKey);
            Set set1 = map1.keySet();
            Iterator iterator2 = set1.iterator();
            List<com.uestc.infomap.pojo.mappojo.map2pojo> list1 = new ArrayList<>();
            while (iterator2.hasNext()) {
                String strKey1 = (String) iterator2.next();
                list = (List) map1.get(strKey1);
                map2pojo = new map2pojo(strKey1, list);
                list1.add(map2pojo);
            }
            map1pojo = new map1pojo(strTempKey, list1);
            list2.add(map1pojo);

        }
        mapFinal mapFinal = new mapFinal(list2);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file1, mapFinal);


    }
}
