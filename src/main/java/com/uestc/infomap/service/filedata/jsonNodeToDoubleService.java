package com.uestc.infomap.service.filedata;

import ch.hsr.geohash.GeoHash;
import com.fasterxml.jackson.databind.JsonNode;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class jsonNodeToDoubleService {
    public Map jsonNodeToDouble(JsonNode jsonNode, String coordinate, Map map) {
        List<Double[]> list = new ArrayList();
        Double[] doubles = new Double[2];
        Iterator iterator = jsonNode.iterator();
        while (iterator.hasNext()) {
            JsonNode js1 = (JsonNode) iterator.next();
            Iterator iterator2 = js1.iterator();
            Double[] temp = new Double[2];
            while (iterator2.hasNext()) {
                JsonNode du = (JsonNode) iterator2.next();
                doubles[0] = du.asDouble();
                JsonNode du1 = (JsonNode) iterator2.next();
                doubles[1] = du1.asDouble();
                temp[0] = doubles[0];
                temp[1] = doubles[1];
            }
            GeoHash geoHash = GeoHash.withCharacterPrecision(temp[1], temp[0], 7);
            String strGeoHash = geoHash.toBase32();
            Map map1 = new HashMap();
            List list2 = new ArrayList();
            if (map.containsKey(strGeoHash)) {
                map1 = (Map) map.get(strGeoHash);
                if (map1.containsKey(coordinate)) {
                    list2 = (List) map1.get(coordinate);
                    list2.add(temp);
                } else {
                    list2.add(temp);
                }
            } else {
                list2.add(temp);
            }
            map1.put(coordinate, list2);
            map.put(strGeoHash, map1);

        }

        return map;
    }
}
