package com.uestc.infomap.controller;
import com.uestc.infomap.service.pointSaveService;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.uestc.infomap.pojo.geojsonPoint;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;


@Controller
@RequestMapping("/index")
public class pointController {
    @Autowired
    pointSaveService pointSave;
    @RequestMapping(value = "/a1")
    @ResponseBody
    public String pointGet(String map_xy){
        if(map_xy!=null){
            System.out.println(map_xy);
          pointSave.pointSave(map_xy);
            return "success";
        }
        else {
            return "fail";
        }


    }

    @SneakyThrows
    @RequestMapping("/single")
    @ResponseBody
    public File singlePoint(String str){
        System.out.println(str);
        pointSave.pointSave(str);
        return null;
    }
}
