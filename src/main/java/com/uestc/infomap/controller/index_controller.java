package com.uestc.infomap.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class index_controller {
    @RequestMapping("/index")
    public String indexCon(){
        return "index.html";
    }

}
