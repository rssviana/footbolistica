import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Goddess Symphony";
  competitions: any;
  apiURL = "http://api.football-data.org/v1/";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.competitions = this.http
      .get(this.apiURL + "competitions/", {
        headers: new HttpHeaders({
          "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
        })
      })
      .subscribe(data => {
        for (var i = 0; i <= 16; i++) {
          console.log(data[i].id + " - " + data[i].caption);
        }
      });
  }
}
