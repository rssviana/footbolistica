import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-competition",
  templateUrl: "./competition.component.html",
  styleUrls: ["./competition.component.css"]
})
export class CompetitionComponent implements OnInit {
  public competitionID;
  apiURL = "http://api.football-data.org/v1/";
  league = new Object();
  leagueTeams = new Array();

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.competitionID = id;

    this.http // get todos os jogadores de uma time
      .get(
        this.apiURL + "competitions/" + this.competitionID + "/leagueTable",
        {
          headers: new HttpHeaders({
            "X-Auth-Token": "cd32d0d4baff468894ef60423ca0a292"
          })
        }
      )
      .subscribe(leaguetable => {
        this.league = leaguetable;
        console.log(this.league);
        this.leagueTeams = leaguetable.standing;
      });
  }
}
