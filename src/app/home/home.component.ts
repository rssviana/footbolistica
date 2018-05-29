import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  competitions = new Array();
  apiURL = "http://api.football-data.org/v1/";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http // get todas os campeonatos
      .get(this.apiURL + "competitions/", {
        headers: new HttpHeaders({
          "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
        })
      })
      .subscribe(data => {
        for (var i = 0; i <= 16; i++) {
          this.competitions.push(data[i]);
        }
        console.log(this.competitions);
      });
  }
}
