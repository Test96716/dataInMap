// 地图设置中心，设置到成都，在本地离线地图 offlineMapTiles刚好有一张zoom为4的成都瓦片
var center = ol.proj.transform([103.93664312801074, 30.75465854205899], 'EPSG:4326', 'EPSG:3857');
//创建地图
var map = new ol.Map({
    view: new ol.View({
        center: center,
        zoom: 16,
        minZoom: 8,
        maxZoom: 18
    }),
    target: 'map_info'
});

// 添加一个使用离线瓦片地图的层
var offlineMapLayer = new ol.layer.Tile({
    // source: new ol.source.OSM()
    source: new ol.source.XYZ({
        // 设置本地离线瓦片所在路径，由于例子里面只有一张瓦片，页面显示时就只看得到一张瓦片。
        url: '../data/roadmap/{z}/{x}/{y}.png'
    })
});

var fill = new ol.style.Fill({
    color: '#dd942e'
});
var stroke = new ol.style.Stroke({
    color: '#cc1000',
    width: 1.25
});
var stylePoint = [
    new ol.style.Style({
        image: new ol.style.Circle({
            /* fill: new ol.style.Fill({
                 color: 'rgba(255, 0, 0, 102)'
             }), */
            stroke: new ol.style.Stroke({
                color: '#cc3540',
                width: 1.25
            }),
            radius: 5
        }),
        //fill: fill,
        stroke: stroke
    })
];
map.addLayer(offlineMapLayer);

//实现鼠标点击获取坐标数据
map.on('singleclick', function (e) {
    var address = (ol.proj.transform(map.getEventCoordinate(e.originalEvent), 'EPSG:3857', 'EPSG:4326'));
    $('#map_xy').val(address);
});

//实现将鼠标点击获取的坐标数据传送至后台
function inputPoint() {

    $.post("/index/pointSave", {"map_xy": $("#map_xy").val()}, function (data) {
    })
}

//实现加载单条轨迹数据点
function controlPoint() {
    $.post("/index/single", {"path": "1"}, function (data) {
        if (data.toString() == "success") {
            alert("成功");
        }
    })
}

function single() {
    var layers = new ol.layer.Vector({
        source: new ol.source.Vector({
            projection: 'EPSG:4326',
            url: "./data/json/pointScopeSortDealFix.json", //GeoJSON的文件路径，用户可以根据需求而改变
            format: new ol.format.GeoJSON()
        }),
        style: stylePoint

    })
    map.addLayer(layers);

}

var stylePolyline = [
    new ol.style.Style({
        stroke: stroke
    })
];

//实现将单条轨迹数据点画成线
function singleLine() {
    var layers = new ol.layer.Vector({
        source: new ol.source.Vector({
            projection: 'EPSG:4326',
            url: "./data/json/pointScopeSortDealFixLine.json", //GeoJSON的文件路径，用户可以根据需求而改变
            format: new ol.format.GeoJSON()
        }),
        style: stylePolyline
    })
    map.addLayer(layers);
    $.post("/index/single", {"name": "1"}, function (data) {
    })
}

//实现将所有轨迹数据线加载
var stylePolyline = [
    new ol.style.Style({
        stroke: stroke
    })
];

function allPointLine() {
    var layers = new ol.layer.Vector({
        source: new ol.source.Vector({
            projection: 'EPSG:4326',
            url: "./data/newTest.json", //GeoJSON的文件路径，用户可以根据需求而改变
            format: new ol.format.GeoJSON()
        }),
        style: stylePolyline
    })
    map.addLayer(layers);
    $.post("/index/single", {"name": "1"}, function (data) {
    })
}

function road_load() {
    var layers = new ol.layer.Vector({
        source: new ol.source.Vector({
            projection: 'EPSG:4326',
            url: "./data/line-chengdu1.json", //GeoJSON的文件路径，用户可以根据需求而改变
            format: new ol.format.GeoJSON()
        })
    })
    map.addLayer(layers);
    $.post("/index/single", {"name": "1"}, function (data) {
    })

}