import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TabularDataComponent } from "./tabular-data/tabular-data.component";
import { MapDataComponent } from "./map-data/map-data.component";
import { NavComponent } from "./nav/nav.component";
import { WmsformComponent } from "./nav/wmsform/wmsform.component";
import { WfsformComponent } from "./nav/wfsform/wfsform.component";
import { WcsformComponent } from "./nav/wcsform/wcsform.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { InteroperabilityService } from "./interoperability.service";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    TabularDataComponent,
    MapDataComponent,
    NavComponent,
    WmsformComponent,
    WfsformComponent,
    WcsformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [InteroperabilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
