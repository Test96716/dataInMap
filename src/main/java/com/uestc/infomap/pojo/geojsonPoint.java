package com.uestc.infomap.pojo;

import java.util.Date;

public class geojsonPoint {
    String pointx;
    String pointy;
    Date time;
    String speed;

    public String getPointx() {
        return pointx;
    }

    public void setPointx(String pointx) {
        this.pointx = pointx;
    }

    public String getPointy() {
        return pointy;
    }

    public void setPointy(String pointy) {
        this.pointy = pointy;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public geojsonPoint(String pointx, String pointy, Date time, String speed) {
        this.pointx = pointx;
        this.pointy = pointy;
        this.time = time;
        this.speed = speed;
    }

    public geojsonPoint() {
    }

    @Override
    public String toString() {
        return "geojsonPoint{" +
                "pointx='" + pointx + '\'' +
                ", pointy='" + pointy + '\'' +
                ", time=" + time +
                ", speed='" + speed + '\'' +
                '}';
    }
}
