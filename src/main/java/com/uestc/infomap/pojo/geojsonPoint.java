package com.uestc.infomap.pojo;

import java.util.Date;

public class geojsonPoint {
        double pointx;
        double pointy;
        Date time;
        double speed;

    public geojsonPoint(double pointx, double pointy, Date time, double speed) {
        this.pointx = pointx;
        this.pointy = pointy;
        this.time = time;
        this.speed = speed;
    }

    public double getPointx() {
        return pointx;
    }

    public void setPointx(double pointx) {
        this.pointx = pointx;
    }

    public double getPointy() {
        return pointy;
    }

    public void setPointy(double pointy) {
        this.pointy = pointy;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    @Override
    public String toString() {
        return "geojsonPoint{" +
                "pointx=" + pointx +
                ", pointy=" + pointy +
                ", time=" + time +
                ", speed=" + speed +
                '}';
    }

    public geojsonPoint() {
    }
}
