$(document).ready(function(){    
    var documentWidth = document.body.offsetWidth;
    if (documentWidth >= 1170) {
        var tagsData = JSON.parse(document.getElementById('tagsData').value);

        var settings = {
            entries: tagsData,
            width: 570,
            height: 570,
            radius: '65%',
            radiusMin: 75,
            bgDraw: true,
            bgColor: '#FFF',
            opacityOver: 1.00,
            opacityOut: 0.05,
            opacitySpeed: 6,
            fov: 800,
            speed: 0.3,
            fontFamily: 'Calluna, Arial, sans-serif',
            fontSize: '15',
            fontColor: '#424545',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            fontToUpperCase: true,
            tooltipFontFamily: 'Calluna, Arial, sans-serif',
            tooltipFontSize: '11',
            tooltipFontColor: '#424545',
            tooltipFontWeight: 'normal',
            tooltipFontStyle: 'normal', 
            tooltipFontStretch: 'normal',
            tooltipFontToUpperCase: false,
            tooltipTextAnchor: 'left',
            tooltipDiffX: 0,
            tooltipDiffY: 10
        };
        
        $( '#tagsCloud' ).svg3DTagCloud( settings );
    }
});
