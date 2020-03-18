package com.uestc.infomap.utils;


import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class mapPutAll {
    public Map<String,List> mapPutinMap(Map<String, List> map1, Map<String, List> map2){
        Set set = map2.keySet();
        Iterator iterator1 = set.iterator();
        if (set.size()==0){
            return map1;
        }
        if(map1==null){
            return map2;
        }
        HashMap mapTemp = (HashMap) map1;
        List temp = new ArrayList();
        while (iterator1.hasNext()) {
            String str = (String) iterator1.next();
            if (map1.containsKey(str)) {
                List list = map1.get(str);
                List list1 = map2.get(str);
                int len = list1.size();
                CollectionUtils.addAll(temp, new Object[list.size()]);
                Collections.copy(temp,list);

               for(int i=0;i<len;i++){
                   temp.add(list1.get(i));
               }
               map1.put(str,clone(temp));
               temp.clear();
            }else {
                map1.put(str,map2.get(str));
            }
        }
        return map1;
    }

    private List clone(List temp) {
        List list = new ArrayList();
        CollectionUtils.addAll(list, new Object[temp.size()]);
        Collections.copy(list,temp);
        return  list;
    }
}
