import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class InteroperabilityService {
  image;
  constructor(private http: HttpClient) {}

  getData(url): Observable<any> {
    return this.http.get(url, { responseType: "text" });
  }
  getImageFromServer(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: "blob" });
  }

  getImage() {
    return this.image;
  }
  setImage(imageUrl) {
    this.image = imageUrl;
  }
}
