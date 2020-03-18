package com.uestc.infomap;


import ch.hsr.geohash.GeoHash;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.uestc.infomap.pojo.*;
import com.uestc.infomap.pojo.mappojo.*;
import com.uestc.infomap.utils.*;
import com.uestc.infomap.service.mapdeal.getGeoHashRoundService;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.uestc.infomap.service.filedata.jsonNodeToDoubleService;
import lombok.SneakyThrows;

import org.apache.commons.collections4.CollectionUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.*;
import java.util.*;


@SpringBootTest
class InfomapApplicationTests {

    /**
     * 实现将csv原始数据加载到固定范围的文件内
     */
    @SneakyThrows
    @Test
    void printCvs() {
        File file = new File("F:\\CSVdata\\sichuan-xcar-2016080810.csv");
        File file1 = new File("src/main/resources/static/data/csv/pointScope.csv");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        //将文件内容读取到list集合中
        FileReader fReader = new FileReader(file);//字符流读取，适合文本文件
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        //初始化写文件，使用CSV接口
        Writer writer = new FileWriter(file1);
        CSVWriter csvWriter = new CSVWriter(writer);
        for (String[] ss : list) {
            if (ss[1].compareTo("103.80") >= 0 && ss[1].compareTo("103.98") < 0) {
                if (ss[2].compareTo("30.90") < 0 && ss[2].compareTo("30.73") >= 0) {
                    csvWriter.writeNext(ss);
                }
            }
        }
        csvWriter.close();
        csvReader.close();
    }


    /**
     * 实现csv文件的排序，通过对比id进行排序，可以将同一个点存储到一起
     */

    @SneakyThrows
    @Test
    public void csvtoGeojson() {
        File file1 = new File("src/main/resources/static/data/csv/pointScope.csv");
        File file2 = new File("src/main/resources/static/data/csv/pointScopeSort.csv");
        if (!file2.exists()) {
            file2.createNewFile();
        }
        FileReader fReader = new FileReader(file1);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        Writer writer = new FileWriter(file2);
        CSVWriter csvWriter = new CSVWriter(writer);
        Collections.sort(list, new Comparator<String[]>() {
            @Override
            public int compare(String[] o1, String[] o2) {
                if (o1[0].compareTo(o2[0]) < 0) {
                    return -1;
                } else if (o1[0].compareTo(o2[0]) == 0) {
                    return 0;
                } else {
                    return 1;
                }
            }
        });
        for (String[] ss : list) {
            csvWriter.writeNext(ss);
        }
        csvWriter.close();
        csvReader.close();
    }

    /**
     * 实现获取轨迹数据为设定数据，通过对注释字段进行设置可以获得确定的轨迹线的数据
     */
    @SneakyThrows
    @Test
    public void getfixedCsv() {
        File file1 = new File("src/main/resources/static/data/csv/pointScopeSortDeal2.csv");
        File file2 = new File("src/main/resources/static/data/csv/pointScopeSortDealFix.csv");
        if (!file2.exists()) {
            file2.createNewFile();
        }
        FileReader reader = new FileReader(file1);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        List<String[]> list1 = new ArrayList<>();
        int i = 1;
        int result = 0;
        int len = list.size();
        System.out.println(len);
        list1.add(list.get(0));
        while (i < len) {
            if (list.get(i)[0].compareTo(list.get(i - 1)[0]) != 0) {
                result++;
            }
            list1.add(list.get(i));
          /*  if (result == 20) {
                break;
            }*/
            i++;
        }
        Writer writer = new FileWriter(file2);
        CSVWriter csvWriter = new CSVWriter(writer);
        csvWriter.writeAll(list1);
        csvWriter.close();
        csvReader.close();

    }

    /**
     * 实现点 csv文件到geojson 点文件的转换
     */
    @SneakyThrows
    @Test
    public void csvToGeo() {
        File file1 = new File("src/main/resources/static/data/csv/pointScopeSortDeal2.csv");
        File file2 = new File("src/main/resources/static/data/json/pointScopeSortDealFix.json");
        if (!file2.exists()) {
            file2.createNewFile();
        }
        FileReader reader = new FileReader(file1);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        ObjectMapper objectMapper = new ObjectMapper();
        List<geoPoint1> list1 = new ArrayList<>();
        for (String[] ss : list) {
            geoPoint geo = new geoPoint("Point", new Double[]{Double.parseDouble(ss[1]), Double.parseDouble(ss[2])}, ss[0], ss[3], ss[4], ss[5], ss[6]);
            geoPoint1 geo1 = new geoPoint1("Feature", geo);
            list1.add(geo1);
        }
        geoPointFianl geo2 = new geoPointFianl("FeatureCollection", list1);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file2, geo2);
        csvReader.close();
    }

    /**
     * 获取单条轨迹记录的数据
     */
    @SneakyThrows
    @Test
    public void getSinglePoint() {
        File file = new File("src/main/resources/static/data/csv/pointScopeSortDeal.csv");
        File file1 = new File("src/main/resources/static/data/csv/SinglePointLine.csv");
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

    /**
     * 单个轨迹数据点转换为json文件
     */
    @SneakyThrows
    @Test
    public void csvToGeoline() {
        File file1 = new File("src/main/resources/static/data/csv/cvs/newsinglePointLine.csv");
        File file2 = new File("src/main/resources/static/data/json/newsingleLinePoint.json");
        if (!file2.exists()) {
            file2.createNewFile();
        }
        FileReader reader = new FileReader(file1);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        ObjectMapper objectMapper = new ObjectMapper();
        List<geoPoint1> list1 = new ArrayList<>();
        for (String[] ss : list) {
            geoPoint geo = new geoPoint("Point", new Double[]{Double.parseDouble(ss[1]), Double.parseDouble(ss[2])}, ss[0], ss[3], ss[4], ss[5], ss[6]);
            geoPoint1 geo1 = new geoPoint1("Feature", geo);
            list1.add(geo1);
        }
        geoPointFianl geo2 = new geoPointFianl("FeatureCollection", list1);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file2, geo2);
        csvReader.close();
    }

    private List clone1(List<Double[]> list1) {
        List list = new ArrayList();
        CollectionUtils.addAll(list, new Object[list1.size()]);
        Collections.copy(list, list1);
        return list;
    }

    private List<String[]> clone2(List<String[]> list1) {
        List list = new ArrayList();
        CollectionUtils.addAll(list, new Object[list1.size()]);
        Collections.copy(list, list1);
        return list;
    }

    /**
     * 将点 cvs转换为geojson 线文件
     */
    @SneakyThrows
    @Test

    public void pointToLine() {
        File file = new File("src/main/resources/static/data/csv/pointScopeSortDeal2.csv");
        File file1 = new File("src/main/resources/static/data/json/pointScopeSortDealFixLine.json");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader fReader = new FileReader(file);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        List<String[]> list1 = new ArrayList<>();
        List<geoPoint3> list3 = new ArrayList<>();
        int i = 0;
        int len = list.size();
        int k = 0;
        int key = 0;
        while (i < len - 1) {
            list1.add(list.get(i));
            if (list.get(i)[0].compareTo(list.get(i + 1)[0]) == 0) {

            } else {
                String[] str = new String[10];
                List<Double[]> list2 = new ArrayList<>();
                List<String[]> temp1 = clone2(list1);
                for (String[] ss : temp1) {
                    list2.add(new Double[]{Double.parseDouble(ss[1]), Double.parseDouble(ss[2])});
                    str[0] = ss[0];
                    str[1] = ss[3];
                    str[2] = ss[4];
                    str[3] = ss[5];
                    str[4] = ss[6];
                }
                List temp = clone1(list2);
                pointLine geo = new pointLine("LineString", temp, str[0], str[1], str[2], str[3], str[4]);
                geoPoint3 geo1 = new geoPoint3("Feature", geo);
                list3.add(geo1);
                k++;
                list2.clear();
                list1.clear();

            }
            System.out.println(i);

            i++;

        }
        System.out.println(k);
        ObjectMapper objectMapper = new ObjectMapper();
        geoPointFinal1 geo2 = new geoPointFinal1("FeatureCollection", list3);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file1, geo2);
        csvReader.close();
    }


    /**
     * 加载单条轨迹线的 cvs 为 geojson线
     */
    @SneakyThrows
    @Test
    public void pointToSingleLine() {
        File file = new File("src/main/resources/static/data/csv/cvs/newsinglePointLine.csv");
        File file1 = new File("src/main/resources/static/data/json/newsingleLine.json");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader fReader = new FileReader(file);
        CSVReader csvReader = new CSVReader(fReader);
        List<String[]> list = csvReader.readAll();
        List<geoPoint3> list3 = new ArrayList<>();
        String[] str = new String[10];
        List<Double[]> list2 = new ArrayList<>();
        for (String[] ss : list) {
            list2.add(new Double[]{Double.parseDouble(ss[1]), Double.parseDouble(ss[2])});
            str[0] = ss[0];
            str[1] = ss[3];
            str[2] = ss[4];
            str[3] = ss[5];
            str[4] = ss[6];
        }
        pointLine geo = new pointLine("LineString", list2, str[0], str[1], str[2], str[3], str[4]);
        geoPoint3 geo1 = new geoPoint3("Feature", geo);
        list3.add(geo1);

        ObjectMapper objectMapper = new ObjectMapper();
        geoPointFinal1 geo2 = new geoPointFinal1("FeatureCollection", list3);
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(file1, geo2);
        csvReader.close();
    }


    /**
     * 轨迹数据预处理，将轨迹数据中重复的数据去除，参考同一个轨迹数据的同一个坐标点
     * 并且只获取1w个轨迹点
     */
    @SneakyThrows
    @Test
    public void pointPreDeal() {
        File file = new File("src/main/resources/static/data/csv/pointScopeSort.csv");
        File file1 = new File("src/main/resources/static/data/csv/pointScopeSortDeal.csv");
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
            if (list.get(i)[0].compareTo(list.get(i - 1)[0]) != 0 || list.get(i)[1].compareTo(list.get(i - 1)[1]) != 0 || list.get(i)[2].compareTo(list.get(i - 1)[2]) != 0) {
                list1.add(list.get(i));
            }
            i++;
            System.out.println(i);
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

    /**
     * 获取去重处理后的轨迹数据，然后将阈值不符合的排出在外
     * 速度阈值，时间间隔阈值，距离阈值
     * 1. 速度阈值，速度不为负数
     * 2、距离阈值，两点之间不超过100米
     * 3、平均速度阈值，两点之间除以时间间隔，速度不超过100mi
     * 4、时间间隔，时间间隔不宜过大，如果过大则视为新的轨迹点
     */

    @SneakyThrows
    @Test
    void csvThreshold() {
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
            if (list.get(i)[0].compareTo(list.get(i - 1)[0]) == 0) {
                Double x1 = Double.parseDouble(list.get(i)[1]);
                Double y1 = Double.parseDouble(list.get(i)[2]);
                Double x2 = Double.parseDouble(list.get(i - 1)[1]);
                Double y2 = Double.parseDouble(list.get(i - 1)[2]);
                Double distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

                if (distance >= 0 && distance < 0.01) {
                    System.out.println(distance);
                    list1.add(list.get(i));
                }
            } else {
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

    /**
     * 路网数据道路选择，即只选择路网数据中的道路，对不是道路的不进行选择。
     */
    @SneakyThrows
    @Test
    void raodSelect() {
        File file = new File("F:\\oms-geojson\\line-csv.csv");
        File file1 = new File("src/main/resources/static/data/csv/roadDeal.csv");
        if (!file1.exists()) {
            file1.createNewFile();
        }
        FileReader reader = new FileReader(file);
        CSVReader csvReader = new CSVReader(reader);
        List<String[]> list = csvReader.readAll();
        List<String[]> list1 = new ArrayList<>();
        Iterator<String[]> iterator = list.iterator();
        System.out.println(list.size());
        String[] temp;
        while (iterator.hasNext()) {
            temp = iterator.next();
            if (temp[1].compareTo("") != 0) {//判断路网数据中的道路标记是否为空，空则代表不是道路，则不添加
                list1.add(temp);
                System.out.println(temp[1]);
            }
        }
        System.out.println(list1.size());
        Writer writer = new FileWriter(file1);
        CSVWriter csvWriter = new CSVWriter(writer);
        csvWriter.writeAll(list1);
        csvReader.close();
        csvWriter.close();
    }

    /**
     * 路网json格式数据处理
     */
    @SneakyThrows
    @Test
    void jsonRoad() {
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

    /**
     * 将地图分解为地图块
     */
    @Autowired
    jsonNodeToDoubleService jsToDouble;

    @SneakyThrows
    @Test
    void mapToSplit() {
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

    /**
     * 将轨迹点转换为正确坐标,
     * 1.读取处理后的轨迹文件，同时读取获取到的地图geohash编码，存储到map中
     * 2.读取每一个轨迹点，将其转化为geohash编码，在地图中找到其内对应的候选路段，同时读取周围8块的轨迹候选路段
     * 3.在所有的轨迹路段中获取最近的路段，然后将点处理到该点上
     */
    @Autowired
    com.uestc.infomap.service.filedata.geoHashService geoHashService;
    @Autowired
    com.uestc.infomap.service.filedata.geoHashInMapService geoHashInMapService;
    @Autowired
    com.uestc.infomap.service.filedata.getMIinDistanceService getMIinDistanceService;
    @Autowired
    getGeoHashRoundService getGeoHashRoundService;

    @SneakyThrows
    @Test
    void mapPointDeal() {
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
                Map map1 = getGeoHashRoundService.getGeoHashRound(map, doubles);
                if (map1 == null) {
                    count++;
                    continue;
                }
                Double[] doubles1 = getMIinDistanceService.getMinDistance(map1, doubles);
                if (Double.isNaN(doubles1[0]) || Double.isNaN(doubles1[1])) {
                    count++;
                    continue;
                }
                if (doubles1[0] == 0 || doubles1[1] == 0) {
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
        Collections.copy(list, list1);
        return list;
    }
}



