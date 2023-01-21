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

    var mapData = JSON.parse(document.getElementById('mapData').value);

    for (var key in mapData) {
        var mapPoint = mapData[key];
        var mapPosition = new google.maps.LatLng(mapPoint.lat, mapPoint.long);
        var infowindow = new google.maps.InfoWindow({content: mapPoint.content});
        
        var marker = new google.maps.Marker({
            position: mapPosition,
            title: mapPoint.title,
            icon: icons[mapPoint.type],
            map: map,
            info: mapPoint.content
        });

        // google.maps.event.addListener(marker, 'click', function () {
        google.maps.event.addListener(marker, 'spider_click', function () {    
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });

        google.maps.event.addListener(infowindow, 'domready', function() {
            var gmStyle = $('.gm-style-iw');
            gmStyle.prev().hide();
            gmStyle.parent().addClass('infowindow-bg');
            gmStyle.next().addClass('infowindow-close-btn');
        });

        oms.addMarker(marker);
    }
};