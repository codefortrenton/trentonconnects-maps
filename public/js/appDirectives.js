// directives here
/*
angular.module().directive('maap', function (mapId, tiles, layerData) {

    return {

        restrict: 'A',
        template: '<div id="maap"></div>',

        link: function (scope, elm, attrs, controller) {

            var map = L.map(mapId, {
                zoom: 7,
                minZoom: 6,
                maxZoom: 19,
                center: [39, -77],
                zoomControl: false,
            });
            var tl = L.tileLayer(tiles);
            tl.addTo(map);

            cartodb.Tiles.getTiles(layerData, function (cdbtiles, err) {
                if (cdbtiles == null) {
                    console.log("error: ", err.errors.join('\n'));
                    return;
                }
                
                L.tileLayer(cdbtiles.tiles[0]).addTo(map);
            });
        }
    }
});
*/