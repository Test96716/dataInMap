package com.uestc.infomap.controller;
import com.uestc.infomap.service.pointSaveService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;


@Controller
@RequestMapping("/index")
public class pointController {
    @RequestMapping(value = "/a1")
    @ResponseBody
    public String pointGet(String map_xy){
        if(map_xy!=null){
            System.out.println(map_xy);
          pointSaveService pointsave = new pointSaveService();
          pointsave.pointSave(map_xy);
            return "success";
        }
        else {
            return "fail";
        }

    }
    @RequestMapping("/single")
    @ResponseBody
    public File singlePoint(String str){
        System.out.println(str);
        File file = new File("src/main/resources/static/data/line.json");
        return file;
    }
}
