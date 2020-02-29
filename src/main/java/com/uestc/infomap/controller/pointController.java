package com.uestc.infomap.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/index")
public class pointController {
    @RequestMapping(value = "/a1")
    @ResponseBody
    public String pointGet(String map_xy){
        if(map_xy!=null){
            System.out.println(map_xy);
            return "success";
        }
        else {
            return "fail";
        }

    }
}
