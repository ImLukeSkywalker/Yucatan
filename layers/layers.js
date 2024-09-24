var wms_layers = [];


        var lyr_Voyager_0 = new ol.layer.Tile({
            'title': 'Voyager',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_MunicipiosdeInteres_1 = new ol.format.GeoJSON();
var features_MunicipiosdeInteres_1 = format_MunicipiosdeInteres_1.readFeatures(json_MunicipiosdeInteres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosdeInteres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosdeInteres_1.addFeatures(features_MunicipiosdeInteres_1);
var lyr_MunicipiosdeInteres_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosdeInteres_1, 
                style: style_MunicipiosdeInteres_1,
                popuplayertitle: "Municipios de Interes",
                interactive: false,
                title: '<img src="styles/legend/MunicipiosdeInteres_1.png" /> Municipios de Interes'
            });
var format_LocalidadesYucatanyQRoo_2 = new ol.format.GeoJSON();
var features_LocalidadesYucatanyQRoo_2 = format_LocalidadesYucatanyQRoo_2.readFeatures(json_LocalidadesYucatanyQRoo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesYucatanyQRoo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesYucatanyQRoo_2.addFeatures(features_LocalidadesYucatanyQRoo_2);
var lyr_LocalidadesYucatanyQRoo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesYucatanyQRoo_2, 
                style: style_LocalidadesYucatanyQRoo_2,
                popuplayertitle: "Localidades Yucatan y Q Roo",
                interactive: false,
                title: '<img src="styles/legend/LocalidadesYucatanyQRoo_2.png" /> Localidades Yucatan y Q Roo'
            });
var format_PoligonosUrbanos_3 = new ol.format.GeoJSON();
var features_PoligonosUrbanos_3 = format_PoligonosUrbanos_3.readFeatures(json_PoligonosUrbanos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonosUrbanos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonosUrbanos_3.addFeatures(features_PoligonosUrbanos_3);
var lyr_PoligonosUrbanos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonosUrbanos_3, 
                style: style_PoligonosUrbanos_3,
                popuplayertitle: "Poligonos Urbanos",
                interactive: false,
                title: '<img src="styles/legend/PoligonosUrbanos_3.png" /> Poligonos Urbanos'
            });
var format_LocalidadesPiloto_4 = new ol.format.GeoJSON();
var features_LocalidadesPiloto_4 = format_LocalidadesPiloto_4.readFeatures(json_LocalidadesPiloto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesPiloto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesPiloto_4.addFeatures(features_LocalidadesPiloto_4);
var lyr_LocalidadesPiloto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesPiloto_4, 
                style: style_LocalidadesPiloto_4,
                popuplayertitle: "Localidades Piloto",
                interactive: true,
                title: '<img src="styles/legend/LocalidadesPiloto_4.png" /> Localidades Piloto'
            });

lyr_Voyager_0.setVisible(true);lyr_MunicipiosdeInteres_1.setVisible(true);lyr_LocalidadesYucatanyQRoo_2.setVisible(true);lyr_PoligonosUrbanos_3.setVisible(true);lyr_LocalidadesPiloto_4.setVisible(true);
var layersList = [lyr_Voyager_0,lyr_MunicipiosdeInteres_1,lyr_LocalidadesYucatanyQRoo_2,lyr_PoligonosUrbanos_3,lyr_LocalidadesPiloto_4];
lyr_MunicipiosdeInteres_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'NOMGEO': 'NOMGEO', });
lyr_LocalidadesYucatanyQRoo_2.set('fieldAliases', {'ENTIDAD': 'Entidad', 'LOC': 'ID Localidad', 'NOM_LOC': 'Nombre Localidad', 'POBTOT': 'Población Total', });
lyr_PoligonosUrbanos_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', 'POB1': 'POB1', });
lyr_LocalidadesPiloto_4.set('fieldAliases', {'NOM_ENT': 'Entidad', 'NOM_MUN': 'Municipio', 'NOM_LOC': 'Localidad', 'POBTOT': 'Población total', 'POBMAS': 'Población Masculina', 'POBFEM': 'Población Femenina', 'P_15A49_F': 'Población Femenina de 15 a 49 años', 'GRAPROES': 'Grado Promedio de Escolaridad', 'VIVTOT': 'Total de viviendas', });
lyr_MunicipiosdeInteres_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_LocalidadesYucatanyQRoo_2.set('fieldImages', {'ENTIDAD': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', });
lyr_PoligonosUrbanos_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'POB1': 'TextEdit', });
lyr_LocalidadesPiloto_4.set('fieldImages', {'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'NOM_LOC': 'TextEdit', 'POBTOT': 'TextEdit', 'POBMAS': 'TextEdit', 'POBFEM': 'TextEdit', 'P_15A49_F': 'TextEdit', 'GRAPROES': 'TextEdit', 'VIVTOT': 'TextEdit', });
lyr_MunicipiosdeInteres_1.set('fieldLabels', {'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_LocalidadesYucatanyQRoo_2.set('fieldLabels', {'ENTIDAD': 'no label', 'LOC': 'no label', 'NOM_LOC': 'no label', 'POBTOT': 'no label', });
lyr_PoligonosUrbanos_3.set('fieldLabels', {'CVEGEO': 'hidden field', 'NOMGEO': 'hidden field', 'POB1': 'hidden field', });
lyr_LocalidadesPiloto_4.set('fieldLabels', {'NOM_ENT': 'inline label - always visible', 'NOM_MUN': 'inline label - always visible', 'NOM_LOC': 'inline label - always visible', 'POBTOT': 'inline label - always visible', 'POBMAS': 'inline label - always visible', 'POBFEM': 'inline label - always visible', 'P_15A49_F': 'inline label - always visible', 'GRAPROES': 'inline label - always visible', 'VIVTOT': 'inline label - always visible', });
lyr_LocalidadesPiloto_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});