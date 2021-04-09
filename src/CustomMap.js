"use strict";
exports.__esModule = true;
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap(mapId) {
        this.googleMap = new google.maps.Map(document.getElementById(mapId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    CustomMap.prototype.addMarker = function (mappable) {
        new google.maps.Marker({
            map: this.googleMap,
            position: { lat: mappable.location.lat, lng: mappable.location.lng }
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
