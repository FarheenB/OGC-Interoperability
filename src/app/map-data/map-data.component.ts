import { Component, OnInit, AfterViewInit } from "@angular/core";
import { defaults as defaultControls } from "ol/control";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import ZoomToExtent from "ol/control/ZoomToExtent";
import { InteroperabilityService } from "../interoperability.service";

@Component({
  selector: "app-map-data",
  templateUrl: "./map-data.component.html",
  styleUrls: ["./map-data.component.css"]
})
export class MapDataComponent implements OnInit, AfterViewInit {
  map: Map;
  imageToShow;
  ngAfterViewInit() {
    this.map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          })
        })
      ],
      view: new View({
        center: [813079.7791264898, 5929220.284081122],
        zoom: 7
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898,
            5929220.284081122,
            848966.9639063801,
            5936863.986909639
          ]
        })
      ])
    });
    this.map.setTarget("map");
  }
  constructor(private interoperabilityService: InteroperabilityService) {}

  ngOnInit() {
    // this.getImageFromService();
  }

  // getImageFromService() {
  //   const yourImageUrl = this.interoperabilityService.getImage();
  //   this.interoperabilityService.getImageFromServer(yourImageUrl).subscribe(
  //     data => {
  //       this.createImageFromBlob(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  // createImageFromBlob(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener(
  //     "load",
  //     () => {
  //       this.imageToShow = reader.result;
  //     },
  //     false
  //   );
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }
}
