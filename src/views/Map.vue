<template>
  <div id="map"></div>
</template>

<style>
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
/* global MapboxGeocoder */

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MglMap, MglNavigationControl, MglGeolocateControl } from "vue-mapbox";
import MglGeocoderControl from "vue-mapbox-geocoder";

export default {
  mounted: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;

    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g", // style URL
      center: [-73.2509381, 42.4500846], // starting position [lng, lat]
      zoom: 6, // starting zoom
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

      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        // Add an image to use as a custom marker
        function(error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("places", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {
                    description:
                      "<strong>Rumney NH</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-71.8125811, 43.8053486],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      "<strong>Lincoln Woods State Park</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-71.4314468, 41.8987106],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      "<strong>Shwangunk Mountains</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>",
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-74.538611111111, 41.473333333333],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      "<strong>Ragged Mountain</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>",
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-72.820330052, 41.617164198],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      "<strong>Chatfield Hollow</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>",
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-72.6003, 41.3706],
                  },
                },
              ],
            },
          });

          // Add a layer showing the places.
          map.addLayer({
            id: "places",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
            },
          });
        }
      );

      // Create a popup, but don't add it to the map yet.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.on("mouseenter", "places", function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = "pointer";

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("mouseleave", "places", function() {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  },
};
</script>
