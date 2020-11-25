var wms_layers = [];


        var lyr_GoogleSatlite_0 = new ol.layer.Tile({
            'title': 'Google Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Construcciones_1 = new ol.format.GeoJSON();
var features_Construcciones_1 = format_Construcciones_1.readFeatures(json_Construcciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Construcciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Construcciones_1.addFeatures(features_Construcciones_1);
var lyr_Construcciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Construcciones_1, 
                style: style_Construcciones_1,
                interactive: true,
                title: '<img src="styles/legend/Construcciones_1.png" /> Construcciones'
            });

lyr_GoogleSatlite_0.setVisible(true);lyr_Construcciones_1.setVisible(true);
var layersList = [lyr_GoogleSatlite_0,lyr_Construcciones_1];
lyr_Construcciones_1.set('fieldAliases', {'localId': 'localId', 'B_UTM_X': 'B_UTM_X', 'B_UTM_Y': 'B_UTM_Y', 'B_Longitud_x': 'B_Longitud_x', 'B_Latitud_y': 'B_Latitud_y', });
lyr_Construcciones_1.set('fieldImages', {'localId': 'TextEdit', 'B_UTM_X': 'TextEdit', 'B_UTM_Y': 'TextEdit', 'B_Longitud_x': 'TextEdit', 'B_Latitud_y': 'TextEdit', });
lyr_Construcciones_1.set('fieldLabels', {'localId': 'no label', 'B_UTM_X': 'no label', 'B_UTM_Y': 'no label', 'B_Longitud_x': 'no label', 'B_Latitud_y': 'no label', });
lyr_Construcciones_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});