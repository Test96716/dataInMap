package com.uestc.infomap.pojo.mappojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class map2pojo {
    String OBJECTID;
    List<Double[]> coordinates;

}
