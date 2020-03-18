package com.uestc.infomap.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class geoPointFinal1 {
    String type;
    List<geoPoint3> features;
}
