package com.uestc.infomap.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.uestc.infomap.pojo.geoPoint3;
import com.uestc.infomap.pojo.geoPointFinal1;
import com.uestc.infomap.pojo.pointLine;
import com.uestc.infomap.service.mapdeal.getGeoHashRoundService;
import lombok.SneakyThrows;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.util.*;

/**
 * 将轨迹点转换为正确坐标,
 * 1.读取处理后的轨迹文件，同时读取获取到的地图geohash编码，存储到map中
 * 2.读取每一个轨迹点，将其转化为geohash编码，在地图中找到其内对应的候选路段，同时读取周围8块的轨迹候选路段
 * 3.在所有的轨迹路段中获取最近的路段，然后将点处理到该点上
 */
public class trailHandleService {
    @Autowired
    com.uestc.infomap.service.filedata.geoHashService geoHashService;
    @Autowired
    com.uestc.infomap.service.filedata.geoHashInMapService geoHashInMapService;
    @Autowired
    com.uestc.infomap.service.filedata.getMIinDistanceService getMIinDistanceService;
    @Autowired
    getGeoHashRoundService getGeoHashRoundService;
    @SneakyThrows
    public void trailHandle(){


            File file = new File("src/main/resources/static/data/json/pointScopeSortDealFixLine.json");
            Map map = new HashMap();
            map = geoHashInMapService.geoHashInMap();//将地图数据加载为一个map数据

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(file);
            JsonNode features = jsonNode.get("features");//获取所有轨迹点数据

            Iterator<JsonNode> iterator = features.iterator();
            List list = new ArrayList();
            List<List<Double[]>> list2 = new ArrayList<List<Double[]>>();
            List<String[]> list3 = new ArrayList<>();
            int i = 0;
            while (iterator.hasNext()) {
                JsonNode jsonNode1 = iterator.next();
                JsonNode jsonNode3 = jsonNode1.get("geometry");
                JsonNode jsonNode2 = jsonNode3.get("coordinates");//获取单条轨迹点数据
                list = geoHashService.geoHash(jsonNode2);
                int len = list.size();
                int count = 0;
                List<Double[]> list1 = new ArrayList<>();//候选路段集合
                while (count < len) {
                    Double[] doubles = (Double[]) list.get(count);
               /* GeoHash geoHash = GeoHash.withCharacterPrecision(doubles[1], doubles[0], 7);
                //如何获取周围8块的坐标
                String strGeohash = geoHash.toBase32();*/
                    Map map1 =getGeoHashRoundService.getGeoHashRound(map,doubles);
                    if (map1 == null) {
                        count++;
                        continue;
                    }
                    Double[] doubles1 = getMIinDistanceService.getMinDistance(map1, doubles);
                    if (Double.isNaN(doubles1[0]) || Double.isNaN(doubles1[1])) {
                        count++;
                        continue;
                    }
                    if (doubles1[0]==0 || doubles1[1]==0){
                        count++;
                        continue;
                    }

                    list1.add(doubles1);
                    count++;
                }
                String[] strings = {jsonNode3.get("id").asText(), jsonNode3.get("speed").asText(), jsonNode3.get("direction").asText(), jsonNode3.get("altitude").asText(), jsonNode3.get("time").asText()};
                list2.add(clone(list1));
                list3.add(strings);

                System.out.println(i);
            /*if (i == 2) {
                break;
            }*/
                i++;
            }
            File file2 = new File("src/main/resources/static/data/newTest.json");
            if (!file2.exists()) {
                file2.createNewFile();
            }
            List<geoPoint3> list4 = new ArrayList<>();
            int len = list3.size();
            int k = 0;
            while (k < len) {
                List<Double[]> list5 = list2.get(k);
                String[] str = list3.get(k);
                pointLine geo = new pointLine("LineString", list5, str[0], str[1], str[2], str[3], str[4]);
                geoPoint3 geo1 = new geoPoint3("Feature", geo);
                list4.add(geo1);
                k++;
            }

            geoPointFinal1 geo2 = new geoPointFinal1("FeatureCollection", list4);
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(file2, geo2);
        }

        private List<Double[]> clone(List<Double[]> list1) {
            List list = new ArrayList();
            CollectionUtils.addAll(list, new Object[list1.size()]);
            Collections.copy(list,list1);
            return  list;
        }

}
