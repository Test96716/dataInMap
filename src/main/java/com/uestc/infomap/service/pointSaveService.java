package com.uestc.infomap.service;
/*完成对单独定位点数据的存储 */
public class pointSaveService {
    public  void pointSave(String mapPoint){
       String[] result= mapPoint.split("\\,");

       int i=0;
       int len=result.length;
       while (i<len){
           System.out.println(result[i]);
           i++;
       }
    }
}
