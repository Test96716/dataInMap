package com.uestc.infomap.service.filedata;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import java.util.*;

/**获取最近路段，并将点归结到路线上。
 * 1.传入待轨迹点和一个当前轨迹点的geoHash得到的jsonNode对象，包括了路线的id和路线上的点的集合
 * 2.获取每一个id对应的数据，如果当前id的点仅有一个则转换为该点，如果该点不唯一，则获取两个点，通过端点计算距离
 * 3，获取最短距离后计算最终的点。
 * */
@Service
public class getMIinDistanceService {
    public Double[] getMinDistance(Map map, Double[] doubles) {
        Double[] result = {0.0,0.0};
        Double x1;
        Double y1;
        Double x2;
        Double y2;
        Map<Double, List<Double[]>> map1 = new HashMap();//存储每次的到的距离及坐标
        List list = new ArrayList();

        Set set = map.keySet();
        for (Object o : set) {//循环一次得到一条候选路线上的点
            String st1 = (String) o;
            list = (List) map.get(st1);
            if(list.size()==0){
                continue;
            }
            Double[] doubles1 = new Double[2];
            Double[] doubles2 = new Double[2];
            Double dis;
            if (list.size() == 1) {
                JsonNode jsonNode1 = (JsonNode) list.get(0);
                Iterator iterator1 = jsonNode1.iterator();
                doubles1[0] = ((JsonNode) iterator1.next()).asDouble();
                doubles1[1] = ((JsonNode) iterator1.next()).asDouble();
                List list3 = new ArrayList();
                Double[] tempk = {doubles1[0], doubles1[1]};
                list3.add(tempk);
                map1.put(1.0, list3);
            } else {

                JsonNode jsonNode1 = (JsonNode) list.get(0);//获取两个点的第一个点
                Iterator iterator1 = jsonNode1.iterator();
                doubles1[0] = ((JsonNode) iterator1.next()).asDouble();
                doubles1[1] = ((JsonNode) iterator1.next()).asDouble();

                JsonNode jsonNode2 = (JsonNode) list.get(0);//获取两个点的第二个点
                Iterator iterator2 = jsonNode2.iterator();
                doubles2[0] = ((JsonNode) iterator2.next()).asDouble();
                doubles2[1] = ((JsonNode) iterator2.next()).asDouble();
                //用来判断第一种条件，轨迹点是在两个点之间
                //else if 轨迹点是在两个点的延长线上
                //else初始化dis
                double tempDou = (doubles1[1] - doubles2[1]) / doubles1[0] - doubles2[0];
                Double re1 = doubles1[0] + tempDou * doubles1[1];
                Double re2 = doubles[0] + tempDou * doubles[1];
                Double re3 = doubles2[0] + tempDou * doubles2[1];
                if (re1 <= re2 && re2 <= re3) {
                    dis = (Math.abs((doubles1[1] - doubles2[1]) * doubles[0] + (doubles2[0] - doubles1[0]) * doubles[1] + (doubles1[0] * doubles2[1] + doubles2[0] * doubles1[1]))) / (Math.sqrt(Math.pow((doubles2[0] - doubles2[0]), 2) + Math.pow((doubles2[1] - doubles1[1]), 2)));
                } else if ((doubles1[1] <= doubles[1] && doubles[1] <= doubles2[1]) || (doubles1[1] >= doubles[1] && doubles[1] >= doubles2[1])) {
                    dis = Math.min(Math.sqrt(Math.pow(doubles1[0] - doubles[0], 2) + Math.pow(doubles1[1] - doubles[1], 2)), Math.sqrt(Math.pow(doubles2[0] - doubles[0], 2) + Math.pow(doubles2[1] - doubles[1], 2)));
                } else {
                    dis = 0.0000000000001;
                }
                List<Double[]> list1 = new ArrayList();
                //深复制，防止值会不变
                Double[] duTemp1 = doubles1;
                Double[] duTemp2 = doubles1;
                list1.add(duTemp1);
                list1.add(duTemp2);
                map1.put(dis, list1);
            }
            list.clear();
        }
        Set set1 = map1.keySet();
        if (set1.size()==0){
            return result;
        }
        Iterator iteratorSet = set1.iterator();
        Double douSet = (Double) iteratorSet.next();
        List<Double[]> listSet =  map1.get(douSet);
        int len = listSet.size();
        Double[] temp3 = listSet.get(0);
        //map1中存储的值为dis和坐标点，由于hashmap是自然排序的，第一个则是在key值最小，即dis是最小的
        if (len == 1) {
            result[0] = temp3[0];
            result[1] = temp3[1];
        } else {
            x1 = temp3[0];
            y1 = temp3[1];
            Double[] temp2 = listSet.get(1);
            x2 = temp2[0];
            y2 = temp2[1];
            result[0] = ((x2 - x1) * (doubles[0] * (x2 - x1) + doubles[1] * (y2 - y1)) + (y2 - y1) * (x1 * y2 - x2 * y1)) / ((x2 - x1) + (y2 - y1));
            result[1] = ((y2 - y1) * (doubles[0] * (x2 - x1) + doubles[1] * (y2 - y1)) - (x2 - x1) * (x1 * y2 - x2 * y1)) / (Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
        return result;
    }

}
