import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Goddess Symphony";
  competitions = new Array();
  teams = new Array();
  players = new Array();
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

    this.http // get um time
      .get(this.apiURL + "teams/66", {
        headers: new HttpHeaders({
          "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
        })
      })
      .subscribe( team => {
        console.log( team )
      });

    this.http // get todos os times de uma campeonato
      .get(this.apiURL + "competitions/444/teams", {
        headers: new HttpHeaders({
          "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
        })
      })
      .subscribe(allteams => {
        console.log(allteams);
      });

      this.http // get todos os jogadores de uma time
      .get(this.apiURL + "teams/66/players", {
        headers: new HttpHeaders({
          "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
        })
      })
      .subscribe(allplayers => {
        console.log(allplayers);
      })

      //get tabela de uma liga

      this.http // get todos os jogadores de uma time
      .get(this.apiURL + "competitions/444/leagueTable", {
        headers: new HttpHeaders({
          "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
        })
      })
      .subscribe(leaguetable => {
        console.log(leaguetable);
      })


  }
}
