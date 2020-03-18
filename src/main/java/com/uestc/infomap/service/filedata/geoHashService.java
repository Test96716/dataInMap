package com.uestc.infomap.service.filedata;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class geoHashService {
    public List geoHash(JsonNode jsonNode) {
        List list = new ArrayList();
        Double[] doubles = new Double[2];
        Iterator iterator1 = jsonNode.iterator();
        while (iterator1.hasNext()) {
            JsonNode js2 = (JsonNode) iterator1.next();
            Iterator iterator2 = js2.iterator();
            Double[] temp = new Double[2];
            while (iterator2.hasNext()) {
                JsonNode du = (JsonNode) iterator2.next();
                doubles[0] = du.asDouble();
                JsonNode du1 = (JsonNode) iterator2.next();
                doubles[1] = du1.asDouble();
                temp[0] = doubles[0];
                temp[1] = doubles[1];
                list.add(temp);
            }
        }
        return list;
    }
}
