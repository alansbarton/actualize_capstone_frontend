<template>
  <div id="map"></div>
</template>

<style>
/* @import "mapbox-gl/dist/mapbox-gl.css"; */
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

<script>
/* global mapboxgl */
import mapboxgl from "mapbox-gl";

export default {
  mounted: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;

    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g", // style URL
      center: [-119.5591, 37.715], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    map.on("load", function() {
      map.addSource("dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.terrain-rgb",
      });
      map.addLayer(
        {
          id: "hillshading",
          source: "dem",
          type: "hillshade",
          // insert below waterway-river-canal-shadow;
          // where hillshading sits in the Mapbox Outdoors style
        },
        "waterway-river-canal-shadow"
      );
    });
    var popup = new mapboxgl.Popup({ offset: 25 }).setText("Construction on the Washington Monument began in 1848.");
    var marker = new mapboxgl.Marker()
      .setLngLat([-119.5591, 37.715])
      .setPopup(popup)
      .addTo(map);
  },
};
</script>
