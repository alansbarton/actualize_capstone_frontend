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
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  mounted: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;

    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g", // style URL
      center: [-73.2509381, 42.4500846], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });

    var geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      placeholder: "Search for climbing places",
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
    });

    map.addControl(geocoder);

    map.on("load", function() {
      map.addSource("single-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      map.addLayer({
        id: "point",
        source: "single-point",
        type: "circle",
        paint: {
          "circle-radius": 10,
          "circle-color": "#448ee4",
        },
      });

      geocoder.on("result", function(e) {
        map.getSource("single-point").setData(e.result.geometry);
      });

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
          // eslint-disable-next-line curly
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
                      "<strong>Rumney NH</strong><p>Rumney is one of the premier sport climbing destinations in the country. This area has become a focal point of hard sport climbing, with climbers from all over the world visiting during the fall season.</p>",
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
                      "<strong>Lincoln Woods State Park</strong><p>High quality bouldering on sharply-textured granite awaits urban adventurers in Lincoln Woods State Park, a few miles north of Providence, R.I. It is entirely fitting that Little Rhody's best climbing is on the small stones. Biking and walking trails link clusters of boulders, set among picnic areas and ponds. The climbing season extends deep into winter here, when sunny days in the 20s and 30s invite beanie-headed pebble wrestlers to enjoy killer friction with handwarmers simmering in chalkbags and wool socks stuffed in pockets.</p>",
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
                      "<strong>Shwangunk Mountains</strong><p>The Gunks (short for Shawangunks) is one of the premier climbing areas in the country. Located near New Paltz, NY, the Gunks is about 85 miles from the NYC metropolitan area, making it a popular weekend destination. The rock is quartz conglomerate, solid rock with horizontal rather than vertical cracks. Climbing at the Gunks is characterized by roofs, jugs, traverses, big air, and sometimes sporty pro. The Gunks is famous for great one-to-three-pitch climbs of all levels of difficulty. You'll find some of the best easy and moderate trad climbs in the country at the Gunks. There are a few bolted climbs at the Gunks, but no sport climbs.</p>",
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
                      "<strong>Ragged Mountain</strong><p>Ragged Mountain, est. 761 feet (232 m), is a traprock mountain ridge located 3 miles (5 km) west of New Britain, Connecticut in the town of Southington and Berlin, Connecticut. It is part of the narrow, linear Metacomet Ridge that extends from Long Island Sound near New Haven, Connecticut, north through the Connecticut River Valley of Massachusetts to the Vermont border. </p>",
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
                      "<strong>Chatfield Hollow</strong><p>Chatfield Hollow's Main Wall is the crown jewel of all the rope climbing in and around Chatfield State Park. People have been climbing here at the Main Wall since the early 1970's and new routes are still going up here today. The Main Wall at Chatfield has a good diversity routes in a beautiful hardwood forest setting. Chatfield's metamorphic gneiss rock is distinctively different from Central CT's trap rock.</p>",
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
