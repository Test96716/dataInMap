package com.uestc.infomap.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class pointController {
    @RequestMapping(value = "/inputPoint")
    public Object pointGet(){
        return null;
    }
}
