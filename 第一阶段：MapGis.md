第一阶段：MapGis

第二阶段：openLayer

第三阶段：MapBox

第四阶段：React

第五阶段：antv&L7



![image-20240615151918373](https://gitee.com/freeanyli/picture/raw/master/image-20240615151918373.png)

GIS是数字经济的基石。将现实中的东西搬到了网络上。



![image-20240615153456317](https://gitee.com/freeanyli/picture/raw/master/image-20240615153456317.png)



![image-20240615153645980](https://gitee.com/freeanyli/picture/raw/master/image-20240615153645980.png)



相比较传统的数据库多了地理信息和可视化信息

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240615153815649.png" alt="image-20240615153815649" style="zoom:50%;" />

什么是webgis：就是将空间数据库中的数据，在前端实现可视化。

​	简单理解就是将地理数据库中的数据，在地图上做可视化的呈现。



做前端开发需要拿到地理数据，地理数据是怎么来的？

倾斜摄影数据： 无人机带着五个摄像头飞出来的数据。

测绘通过无人机获得倾斜摄影数据（gis数据） 或者用测量工具拿到矢量数据**=》** 数据拿到之后要做一个转换，倾斜摄影数据有专门的工具去转，矢量数据可以用Arcgis/supermap工具处理, 这些工作需要数据处理gis人员去处理，这个时候已经存到数据库中了（gdb），shp格式文件 =》地图框架，openlayers，mapbox，cesium，leaflet。



Arcgis（基本上都会）提供了javascript的api，javascript可以直接获取地理数据库中的数据，然后直接在前端呈现。

但是这种情况并不是很好，因为数据太多了，api太繁琐，需要处理，这个就涉及到服务端gis，可能使用java/nodejs做的。举个例子：地理数据库中的数据是一套坐标，但是前端用的又是另外一套坐标，在web端有时候没办法转换这个坐标，所以要在服务端去转换这个坐标，然后生成一套api接口，给web端去读。



#### 整个gis开发的流程



![image-20240615155446980](https://gitee.com/freeanyli/picture/raw/master/image-20240615155446980.png)



#### webgis

##### 1、webgis

![image-20240615155525157](https://gitee.com/freeanyli/picture/raw/master/image-20240615155525157.png)

##### 2、 三维gis

![image-20240615155611475](https://gitee.com/freeanyli/picture/raw/master/image-20240615155611475.png)

![image-20240615155619898](https://gitee.com/freeanyli/picture/raw/master/image-20240615155619898.png)

![image-20240615155628165](https://gitee.com/freeanyli/picture/raw/master/image-20240615155628165.png)

##### 3、开源三维可视化平台

![image-20240615155636047](https://gitee.com/freeanyli/picture/raw/master/image-20240615155636047.png)

![image-20240615155916130](https://gitee.com/freeanyli/picture/raw/master/image-20240615155916130.png)

![image-20240615160001114](https://gitee.com/freeanyli/picture/raw/master/image-20240615160001114.png)

![image-20240615160013713](https://gitee.com/freeanyli/picture/raw/master/image-20240615160013713.png)

#### 中地webgl二开

![image-20240615160159040](https://gitee.com/freeanyli/picture/raw/master/image-20240615160159040.png)

![image-20240615160048045](https://gitee.com/freeanyli/picture/raw/master/image-20240615160048045.png)



![image-20240615160334271](https://gitee.com/freeanyli/picture/raw/master/image-20240615160334271.png)

![image-20240615160343007](https://gitee.com/freeanyli/picture/raw/master/image-20240615160343007.png)



![image-20240615160351956](https://gitee.com/freeanyli/picture/raw/master/image-20240615160351956.png)

![image-20240615160501782](https://gitee.com/freeanyli/picture/raw/master/image-20240615160501782.png)

![image-20240615160513323](https://gitee.com/freeanyli/picture/raw/master/image-20240615160513323.png)



#### 我们web开发用的架构图

![image-20240615160537235](https://gitee.com/freeanyli/picture/raw/master/image-20240615160537235.png)



 ![image-20240615160633540](https://gitee.com/freeanyli/picture/raw/master/image-20240615160633540.png)

![image-20240615160639912](https://gitee.com/freeanyli/picture/raw/master/image-20240615160639912.png)



#### 一张地图由什么组成

##### 1. 数据表现来说

> 点、线、面组成

点： 地标识别成一个点

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240615193956387.png" alt="image-20240615193956387" style="zoom:50%;" />

线：

铁路、公路、地铁线

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240615194304003.png" alt="image-20240615194304003" style="zoom:50%;" />



面/区域

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240615194042833.png" alt="image-20240615194042833" style="zoom:50%;" />

##### 2、 从数据类型来说

1. 矢量数据---放大之后不会失真。 

2. 栅格数据---卫星-由一个个像素点组成，放大后会失真

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240615194545014.png" alt="image-20240615194545014" style="zoom:20%;" />

##### 3、从图层来说



假如这个四个火车站的图层叫train--layer-point，那么是由4个点(gis中叫要素 `Feature`)组成，

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240615194914047.png" alt="image-20240615194914047" style="zoom:50%;" />

图层同一个类型的事物我们会把她们放到同一个图层上。

一幅地图是由很多图层组成的。一张电子地图是由很多图层堆叠而成的。









## 坐标系

坐标的表示方法：三种坐标表示方法：经纬度和高程LBH，空间直角坐标XYZ，平面坐标和高程XYH

国际：WGS84坐标系是目前最通用的标准坐标系，平时我们常说的经度纬度多少多少、从GPS设备、智能手机中取出的数据的坐标系、国际地图提供商使用的坐标系都是这个坐标系。

国内：CGCS2000国家大地坐标系是我国最新的国家大地坐标系，英文名为CGCS2000，全球地心大地坐标系(目前通用的坐标表示方法)在我国的具体表现。CGCS2000与WGS84相差个几厘米，对于一般工程测量而言，可以认为二者是一致的。这两者几乎可以兼容。



WGS84和CGCS2000坐标系统都是以经纬度的形式来表示地球平面上的某一个位置。但是在我国，出于国家安全考虑，国内所有导航电子地图必须使用国家测绘局制定的加密坐标系统，即将一个真实的经纬度坐标加密成一个不正确的经纬度坐标，我们在业内将前者称之为地球坐标，后者称之为火星坐标(GCJ-02)。 当我们使用的数据和服务不同时，就产生了我们时常说的偏移和纠偏的问题。

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622105711516.png" alt="image-20240622105711516" style="zoom:50%;" />

所以需要坐标系转换。



<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622105042197.png" alt="image-20240622105042197" style="zoom:50%;" />

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622105128971.png" alt="image-20240622105128971" style="zoom:50%;" />

工作底图平面坐标系应采用国家大地坐标系CGCS2000，投影方式采用高斯-克吕格投影，高程基准采用 1985 国家高程基准。





目前在互联网上的大部分全国公众地图网站均采用Web墨卡托投影坐标系。



## 比例尺和分辨率

比例尺（ Scale） 即地图上的一厘米代表着实际上的多少厘米。例如地图上1厘米代表实地距离500千米，可写成：1 ∶ 50,000,000或写成：1/50,000,000。

分辨率（ Resolution） 代表当前地图范围内，1像素代表多少地图单位（X地图单位/像素），地图单位取决于数据本身的空间参考。可见Resolution跟 dpi有关系（dpi代表每英寸的像素数），跟地图的单位也有关系

![image-20240622110011599](https://gitee.com/freeanyli/picture/raw/master/image-20240622110011599.png)



## WKID和EPSG

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622110256711.png" alt="image-20240622110256711" style="zoom:50%;" />



# 数据

坐标系是gis的骨架，数据是gis的血肉，数据通常是由gis工程师来生产或处理相关数据。

GIS地图数据是由不同图层构成，各图层内的数据可以分为矢量或栅格数据。



## 地图结构

地图是由图层组成的，但是二维地图与三维地图的结构不一样

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622111027657.png" alt="image-20240622111027657" style="zoom:50%;" />



### 基础的数据结构：矢量数据和栅格数据

矢量数据和栅格数据分别对应不同的数学模型来对现实世界进行模拟。

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622111514718.png" alt="image-20240622111514718" style="zoom:50%;" />

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622111605206.png" alt="image-20240622111605206" style="zoom:50%;" />

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622111750531.png" alt="image-20240622111750531" style="zoom:50%;" />

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622111809949.png" alt="image-20240622111809949" style="zoom:50%;" />

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622111847102.png" alt="image-20240622111847102" style="zoom:50%;" />

![image-20240622111903600](https://gitee.com/freeanyli/picture/raw/master/image-20240622111903600.png)

![image-20240622111934940](https://gitee.com/freeanyli/picture/raw/master/image-20240622111934940.png)

![image-20240622111944899](https://gitee.com/freeanyli/picture/raw/master/image-20240622111944899.png)

![image-20240622111956379](https://gitee.com/freeanyli/picture/raw/master/image-20240622111956379.png)

### 数据的产生

![image-20240622112028960](https://gitee.com/freeanyli/picture/raw/master/image-20240622112028960.png)

![image-20240622112046133](https://gitee.com/freeanyli/picture/raw/master/image-20240622112046133.png)

### 数据来源

1. 人工手绘/建模(矢量数据或模型)
2. 测绘仪器
3. 航拍



### gis数据常见文件格式

![image-20240622112544193](https://gitee.com/freeanyli/picture/raw/master/image-20240622112544193.png)

### .tif格式

![image-20240622112813621](https://gitee.com/freeanyli/picture/raw/master/image-20240622112813621.png)

### .dem

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622112849759.png" alt="image-20240622112849759" style="zoom:50%;" />

### .shp

<img src="https://gitee.com/freeanyli/picture/raw/master/image-20240622112912567.png" alt="image-20240622112912567" style="zoom:50%;" />

### .kml/.kmz

![image-20240622112932924](https://gitee.com/freeanyli/picture/raw/master/image-20240622112932924.png)

### .dwg/.dxf

![image-20240622112952240](https://gitee.com/freeanyli/picture/raw/master/image-20240622112952240.png)

### .GeoJSON

![image-20240622113035342](https://gitee.com/freeanyli/picture/raw/master/image-20240622113035342.png)

### .WKT/.WKB

![image-20240622113238210](https://gitee.com/freeanyli/picture/raw/master/image-20240622113238210.png)

### OSGB（倾斜摄影）

![image-20240622113305593](https://gitee.com/freeanyli/picture/raw/master/image-20240622113305593.png)

### .obj

![image-20240622113323774](https://gitee.com/freeanyli/picture/raw/master/image-20240622113323774.png)

### 无人机航拍常见格式

![image-20240622113500818](https://gitee.com/freeanyli/picture/raw/master/image-20240622113500818.png)



# geo server

![image-20240622113623203](https://gitee.com/freeanyli/picture/raw/master/image-20240622113623203.png)

## 静态资源数据服务

![image-20240622113700965](https://gitee.com/freeanyli/picture/raw/master/image-20240622113700965.png)

## 互联网在线地图平台

![image-20240622113737170](https://gitee.com/freeanyli/picture/raw/master/image-20240622113737170.png)

## 天地图

![image-20240622113803534](https://gitee.com/freeanyli/picture/raw/master/image-20240622113803534.png)

## 百度和高德

![image-20240622113957174](https://gitee.com/freeanyli/picture/raw/master/image-20240622113957174.png)

## gis服务发布

![image-20240622114036788](https://gitee.com/freeanyli/picture/raw/master/image-20240622114036788.png)



# gis应用开发

![image-20240622134326438](https://gitee.com/freeanyli/picture/raw/master/image-20240622134326438.png)

## LeafLet

![image-20240622134404935](https://gitee.com/freeanyli/picture/raw/master/image-20240622134404935.png)



## cesium

![image-20240622134436310](https://gitee.com/freeanyli/picture/raw/master/image-20240622134436310.png)

![image-20240622134656462](https://gitee.com/freeanyli/picture/raw/master/image-20240622134656462.png)

## 项目中开发框架的选择

![image-20240622134747295](https://gitee.com/freeanyli/picture/raw/master/image-20240622134747295.png)

