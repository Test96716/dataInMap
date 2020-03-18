package com.uestc.infomap.service.mapdeal;

import com.uestc.infomap.utils.mapPutAll;
import ch.hsr.geohash.GeoHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service
public class getGeoHashRoundService {
    public Map getGeoHashRound(Map map,Double[] doubles){
        mapPutAll mapPutAll = new mapPutAll();
        GeoHash geoHash= GeoHash.withCharacterPrecision(doubles[1], doubles[0], 7);
        String strGeo = geoHash.toBase32();
        Map map1 = (Map) map.get(strGeo);

        String strGeo1 = geoHash.getSouthernNeighbour().toBase32();
        Map map2 = (Map) map.get(strGeo1);
        if(map2!=null){map1 =mapPutAll.mapPutinMap(map1,map2);}


        String strGeo2 = geoHash.getEasternNeighbour().toBase32();
        Map map3 = (Map) map.get(strGeo2);
        if(map3!=null){ map1 =mapPutAll.mapPutinMap(map1,map3);}


        String strGeo3 = geoHash.getNorthernNeighbour().toBase32();
        Map map4 = (Map) map.get(strGeo3);
        if(map4!=null){ map1 =mapPutAll.mapPutinMap(map1,map4); }



        String strGeo4 = geoHash.getWesternNeighbour().toBase32();
        Map map5 = (Map) map.get(strGeo4);
        if(map5!=null){ map1 =mapPutAll.mapPutinMap(map1,map5);}


        String strGeo5 = geoHash.getSouthernNeighbour().getEasternNeighbour().toBase32();
        Map map6 = (Map) map.get(strGeo5);
        if(map6!=null){  map1 =mapPutAll.mapPutinMap(map1,map6);}


        String strGeo6 = geoHash.getSouthernNeighbour().getWesternNeighbour().toBase32();
        Map map7 = (Map) map.get(strGeo6);
        if(map7!=null){map1 =mapPutAll.mapPutinMap(map1,map7);}


        String strGeo7 = geoHash.getNorthernNeighbour().getEasternNeighbour().toBase32();
        Map map8 = (Map) map.get(strGeo7);
        if(map8!=null){ map1 =mapPutAll.mapPutinMap(map1,map8);}

        String strGeo8 = geoHash.getNorthernNeighbour().getWesternNeighbour().toBase32();
        Map map9 = (Map) map.get(strGeo8);
        if(map9!=null){map1 =mapPutAll.mapPutinMap(map1,map9);}
        return map1;
    }
}
