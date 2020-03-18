package com.uestc.infomap.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Repository
public class geoPoint {
    String type;
    Double[] coordinates;
    String id;
    String speed;
    String direction;
    String altitude;
    String time;
}
