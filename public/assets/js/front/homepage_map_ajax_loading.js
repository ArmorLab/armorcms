window.initMap = function () {
    
    var icons = {
        scan : '/assets/images/front/scan_pin.png',
        recording : '/assets/images/front/recording_pin.png'
    };
    
    map = new google.maps.Map(document.getElementById('documentsMap'), {
        zoom: 13,
        center: {lat: 50.2516775, lng: 18.9132642},
        //mapTypeId: 'roadmap'
        //disableDefaultUI: true
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        //mapTypeId: google.maps.MapTypeId.HYBRID,
        tilt: 45
    });

    map.data.loadGeoJson('/assets/js/front/kochlowice_geo.json');
    map.data.setStyle({
        fillColor: '#CFA550',
        strokeWeight: 1
    });

    var oms = new OverlappingMarkerSpiderfier(map, {
        markersWontMove: true,
        markersWontHide: true,
        basicFormatEvents: true
    });
    
    function getMapData () {
    	var dataUrl = document.getElementById('mapDataUrl').value;
    	var mapDataAjax;
    	
        return $.ajax({
            url: dataUrl,
            type: 'GET',
            dataType: 'json',
            async: false,

            success: function (data) {
                mapDataAjax = data;
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
                console.log(textStatus);
            }
        });
        
        return mapDataAjax;
    }

    var mapData = getMapData();
    
    function prepareMarkersData(item, index) {
        var mapPoint = item;
        var mapPosition = new google.maps.LatLng(mapPoint.lat, mapPoint.long);
//        var infowindow = new google.maps.InfoWindow({content: mapPoint.content});
        var infowindow = new google.maps.InfoWindow({content: ""});
        
        var marker = new google.maps.Marker({
            position: mapPosition,
            title: mapPoint.title,
            icon: icons[mapPoint.type],
            map: map,
            info: mapPoint.content
        });
        
//        var marker = new google.maps.Marker({
//            position: mapPosition,
//            title: mapPoint.title,
//            icon: icons[mapPoint.type],
//            map: map
//        });

        // google.maps.event.addListener(marker, 'click', function () {
        google.maps.event.addListener(marker, 'spider_click', function () {
        	infowindow.setContent(this.info);
        	
        	//to do get infowindow by ajax
//        	$.ajax({
//                url: dataUrl,
//                type: 'GET',
//                dataType: 'json',
//                async: false,
//
//                success: function (data) {
//                    mapDataAjax = data;
//                },
//                error: function (xhr, textStatus, errorThrown) {
//                    console.log(errorThrown);
//                    console.log(textStatus);
//                }
//            });
        	
        	
            infowindow.open(map, this);
        });

        google.maps.event.addListener(infowindow, 'domready', function() {
            var gmStyle = $('.gm-style-iw');
            gmStyle.prev().hide();
            gmStyle.parent().addClass('infowindow-bg');
            gmStyle.next().addClass('infowindow-close-btn');
        });

        oms.addMarker(marker);
    };
    
    mapData.responseJSON.forEach(prepareMarkersData);
};