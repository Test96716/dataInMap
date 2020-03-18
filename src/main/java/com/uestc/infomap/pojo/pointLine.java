package com.uestc.infomap.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class pointLine {
    String type;
    List<Double[]> coordinates;
    String id;
    String speed;
    String direction;
    String altitude;
    String time;
}
