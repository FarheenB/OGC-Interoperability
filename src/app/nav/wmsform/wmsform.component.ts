import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { InteroperabilityService } from "../../interoperability.service";
import { NgxXml2jsonService } from "ngx-xml2json";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-wmsform",
  templateUrl: "./wmsform.component.html",
  styleUrls: ["./wmsform.component.css"]
})
export class WmsformComponent implements OnInit {
  // obj = null;
  getCapabilities = "notHit";
  imageToShow;
  getLayers = false;
  obj = null;
  layers: [];
  format: [];
  styles: [];
  versions: [];
  selectVersion = null;
  selectReq = null;
  selectLayer = null;
  selectSRS = null;
  selectFormat = null;
  selectBbox = null;
  selectStyles = null;
  wmsRequests = [];
  selectMinx = null;
  selectMiny = null;
  selectMaxx = null;
  selectMaxy = null;
  selectWidth = null;
  selectHeight = null;
  form = new FormGroup({
    URL: new FormControl(
      "/geoserver/wms?service=wms&version=1.1.1&request=GetCapabilities",
      Validators.required
    ),
    Version: new FormControl(null),
    WMSRequest: new FormControl(null),
    Layer: new FormControl(null),
    Styles: new FormControl(null),
    SRS: new FormControl(null),
    Width: new FormControl(null),
    Height: new FormControl(null),
    Minx: new FormControl(null),
    Miny: new FormControl(null),
    Maxx: new FormControl(null),
    Maxy: new FormControl(null),
    Format: new FormControl(null)
  });

  constructor(
    private interoperabilityService: InteroperabilityService,
    private ngxXml2jsonService: NgxXml2jsonService,
    // private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      console.log(data);
      if (data) {
        this.selectVersion = data.Version;
        this.selectReq = data.WMSRequest;
        this.selectLayer = data.Layer;
        this.selectStyles = data.Styles;
        this.selectSRS = data.SRS;
        this.selectWidth = data.Width;
        this.selectHeight = data.Height;
        this.selectMinx = data.Minx;
        this.selectMiny = data.Miny;
        this.selectMaxx = data.Maxx;
        this.selectMaxy = data.Maxy;
        this.selectFormat = data.Format;
      }
      if (this.selectReq && this.selectVersion) this.getLayers = true;
      if (this.selectLayer) {
        for (var item in this.layers) {
          if (this.layers[item]["Name"] == this.selectLayer) {
            // console.log(item);

            this.selectSRS = this.layers[item]["SRS"];
            // this.form.controls["SRS"].setValue(this.selectSRS);
            this.format = this.obj["WMT_MS_Capabilities"][1].Capability.Request[
              this.selectReq
            ].Format;
            this.styles = this.layers[item]["Style"]["Name"];

            this.selectWidth = 1200;
            // this.form.controls["Width"].setValue(this.selectWidth);
            this.selectHeight = 900;

            // this.form.controls["Height"].setValue(this.selectHeight);
            this.selectBbox = this.layers[item]["BoundingBox"];
            this.selectMinx = this.selectBbox["@attributes"]["minx"];

            // this.form.controls["Minx"].setValue(this.selectMinx);
            this.selectMiny = this.selectBbox["@attributes"]["miny"];
            // this.form.controls["Miny"].setValue(this.selectMiny);
            this.selectMaxx = this.selectBbox["@attributes"]["maxx"];
            // this.form.controls["Maxx"].setValue(this.selectMaxx);
            this.selectMaxy = this.selectBbox["@attributes"]["maxy"];
            // this.form.controls["Maxy"].setValue(this.selectMaxy);
            
          }
        }
      }
    });
  }

  onSubmit() {
    if (this.getCapabilities == "notHit") {
      const urlLoc = this.form.controls["URL"].value;
      console.log(urlLoc);
      // this.spinner.show();
      this.interoperabilityService.getData(urlLoc).subscribe(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");
        this.obj = this.ngxXml2jsonService.xmlToJson(xml);
        // this.spinner.hide();
        this.getCapabilities = "hit";

        if (this.getCapabilities == "hit") {
          this.layers = this.obj[
            "WMT_MS_Capabilities"
          ][1].Capability.Layer.Layer;
          this.wmsRequests = Object.keys(
            this.obj["WMT_MS_Capabilities"][1].Capability.Request
          );
          this.versions = this.obj["WMT_MS_Capabilities"][1][
            "@attributes"
          ].version;

          console.log(this.obj);
        }
      });
    }
  }

  SubmitWMSForm() {
    alert("done!!");
    const Requrl = `/geoserver/topp/wms?service=WMS&version=1.1.0&request=GetMap&layers=topp%3Astates&bbox=-124.73142200000001%2C24.955967%2C-66.969849%2C49.371735&width=768&height=330&srs=EPSG%3A4326&format=image%2Fpng`;
    this.interoperabilityService.setImage(Requrl);
  }
}
