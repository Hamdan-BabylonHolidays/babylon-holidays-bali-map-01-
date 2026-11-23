var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FIXEDSVGHolidayInn_1 = new ol.format.GeoJSON();
var features_FIXEDSVGHolidayInn_1 = format_FIXEDSVGHolidayInn_1.readFeatures(json_FIXEDSVGHolidayInn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXEDSVGHolidayInn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXEDSVGHolidayInn_1.addFeatures(features_FIXEDSVGHolidayInn_1);
var lyr_FIXEDSVGHolidayInn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIXEDSVGHolidayInn_1, 
                style: style_FIXEDSVGHolidayInn_1,
                popuplayertitle: 'FIXED SVG — Holiday Inn',
                interactive: true,
                title: '<img src="styles/legend/FIXEDSVGHolidayInn_1.png" /> FIXED SVG — Holiday Inn'
            });
var format_fixedngurahraiairportsvg_2 = new ol.format.GeoJSON();
var features_fixedngurahraiairportsvg_2 = format_fixedngurahraiairportsvg_2.readFeatures(json_fixedngurahraiairportsvg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fixedngurahraiairportsvg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fixedngurahraiairportsvg_2.addFeatures(features_fixedngurahraiairportsvg_2);
var lyr_fixedngurahraiairportsvg_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fixedngurahraiairportsvg_2, 
                style: style_fixedngurahraiairportsvg_2,
                popuplayertitle: 'fixed ngurah rai airport svg',
                interactive: true,
                title: '<img src="styles/legend/fixedngurahraiairportsvg_2.png" /> fixed ngurah rai airport svg'
            });
var format_Babylon_Holidays_Routesday_01_routes_3 = new ol.format.GeoJSON();
var features_Babylon_Holidays_Routesday_01_routes_3 = format_Babylon_Holidays_Routesday_01_routes_3.readFeatures(json_Babylon_Holidays_Routesday_01_routes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Babylon_Holidays_Routesday_01_routes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Babylon_Holidays_Routesday_01_routes_3.addFeatures(features_Babylon_Holidays_Routesday_01_routes_3);
var lyr_Babylon_Holidays_Routesday_01_routes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Babylon_Holidays_Routesday_01_routes_3, 
                style: style_Babylon_Holidays_Routesday_01_routes_3,
                popuplayertitle: 'Babylon_Holidays_Routes — day_01_routes',
                interactive: true,
                title: '<img src="styles/legend/Babylon_Holidays_Routesday_01_routes_3.png" /> Babylon_Holidays_Routes — day_01_routes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FIXEDSVGHolidayInn_1.setVisible(true);lyr_fixedngurahraiairportsvg_2.setVisible(true);lyr_Babylon_Holidays_Routesday_01_routes_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FIXEDSVGHolidayInn_1,lyr_fixedngurahraiairportsvg_2,lyr_Babylon_Holidays_Routesday_01_routes_3];
lyr_FIXEDSVGHolidayInn_1.set('fieldAliases', {'fid': 'fid', 'location_id': 'location_id', 'place_name': 'place_name', 'category': 'category', 'subcategory': 'subcategory', 'icon_file': 'icon_file', 'area': 'area', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'package_name': 'package_name', 'nights': 'nights', 'room_type': 'room_type', 'description': 'description', 'inclusions': 'inclusions', 'exclusions': 'exclusions', 'website_url': 'website_url', 'photo_url': 'photo_url', 'photo_file': 'photo_file', 'photo_credit': 'photo_credit', 'photo_license': 'photo_license', 'photo_source_page': 'photo_source_page', 'display_on_web': 'display_on_web', 'photo_approved': 'photo_approved', 'google_maps_url': 'google_maps_url', 'verified': 'verified', 'notes': 'notes', });
lyr_fixedngurahraiairportsvg_2.set('fieldAliases', {'fid': 'fid', 'location_id': 'location_id', 'place_name': 'place_name', 'category': 'category', 'subcategory': 'subcategory', 'icon_file': 'icon_file', 'area': 'area', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'package_name': 'package_name', 'nights': 'nights', 'room_type': 'room_type', 'description': 'description', 'inclusions': 'inclusions', 'exclusions': 'exclusions', 'website_url': 'website_url', 'photo_url': 'photo_url', 'photo_file': 'photo_file', 'photo_credit': 'photo_credit', 'photo_license': 'photo_license', 'photo_source_page': 'photo_source_page', 'display_on_web': 'display_on_web', 'photo_approved': 'photo_approved', 'google_maps_url': 'google_maps_url', 'verified': 'verified', 'notes': 'notes', });
lyr_Babylon_Holidays_Routesday_01_routes_3.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'route_id': 'route_id', 'day_no': 'day_no', });
lyr_FIXEDSVGHolidayInn_1.set('fieldImages', {'fid': 'TextEdit', 'location_id': 'TextEdit', 'place_name': 'TextEdit', 'category': 'TextEdit', 'subcategory': 'TextEdit', 'icon_file': 'TextEdit', 'area': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'package_name': 'TextEdit', 'nights': 'Range', 'room_type': 'TextEdit', 'description': 'TextEdit', 'inclusions': 'TextEdit', 'exclusions': 'TextEdit', 'website_url': 'TextEdit', 'photo_url': 'TextEdit', 'photo_file': 'TextEdit', 'photo_credit': 'TextEdit', 'photo_license': 'TextEdit', 'photo_source_page': 'TextEdit', 'display_on_web': 'CheckBox', 'photo_approved': 'CheckBox', 'google_maps_url': 'TextEdit', 'verified': 'CheckBox', 'notes': 'TextEdit', });
lyr_fixedngurahraiairportsvg_2.set('fieldImages', {'fid': 'TextEdit', 'location_id': 'TextEdit', 'place_name': 'TextEdit', 'category': 'TextEdit', 'subcategory': 'TextEdit', 'icon_file': 'TextEdit', 'area': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'package_name': 'TextEdit', 'nights': 'Range', 'room_type': 'TextEdit', 'description': 'TextEdit', 'inclusions': 'TextEdit', 'exclusions': 'TextEdit', 'website_url': 'TextEdit', 'photo_url': 'TextEdit', 'photo_file': 'TextEdit', 'photo_credit': 'TextEdit', 'photo_license': 'TextEdit', 'photo_source_page': 'TextEdit', 'display_on_web': 'CheckBox', 'photo_approved': 'CheckBox', 'google_maps_url': 'TextEdit', 'verified': 'CheckBox', 'notes': 'TextEdit', });
lyr_Babylon_Holidays_Routesday_01_routes_3.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'route_id': 'TextEdit', 'day_no': 'Range', });
lyr_FIXEDSVGHolidayInn_1.set('fieldLabels', {'fid': 'hidden field', 'location_id': 'hidden field', 'place_name': 'header label - visible with data', 'category': 'hidden field', 'subcategory': 'inline label - visible with data', 'icon_file': 'hidden field', 'area': 'inline label - visible with data', 'address': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'package_name': 'hidden field', 'nights': 'hidden field', 'room_type': 'hidden field', 'description': 'no label', 'inclusions': 'hidden field', 'exclusions': 'hidden field', 'website_url': 'hidden field', 'photo_url': 'hidden field', 'photo_file': 'hidden field', 'photo_credit': 'hidden field', 'photo_license': 'hidden field', 'photo_source_page': 'hidden field', 'display_on_web': 'hidden field', 'photo_approved': 'hidden field', 'google_maps_url': 'hidden field', 'verified': 'hidden field', 'notes': 'hidden field', });
lyr_fixedngurahraiairportsvg_2.set('fieldLabels', {'fid': 'hidden field', 'location_id': 'hidden field', 'place_name': 'no label', 'category': 'hidden field', 'subcategory': 'inline label - visible with data', 'icon_file': 'hidden field', 'area': 'inline label - visible with data', 'address': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'package_name': 'hidden field', 'nights': 'hidden field', 'room_type': 'hidden field', 'description': 'no label', 'inclusions': 'hidden field', 'exclusions': 'hidden field', 'website_url': 'hidden field', 'photo_url': 'hidden field', 'photo_file': 'hidden field', 'photo_credit': 'hidden field', 'photo_license': 'hidden field', 'photo_source_page': 'hidden field', 'display_on_web': 'hidden field', 'photo_approved': 'hidden field', 'google_maps_url': 'hidden field', 'verified': 'hidden field', 'notes': 'hidden field', });
lyr_Babylon_Holidays_Routesday_01_routes_3.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', 'route_id': 'no label', 'day_no': 'inline label - visible with data', });
lyr_Babylon_Holidays_Routesday_01_routes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});