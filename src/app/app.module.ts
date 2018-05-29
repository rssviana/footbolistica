import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CompetitionComponent } from "./competition/competition.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "competition/:id", component: CompetitionComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent }
];
@NgModule({
  declarations: [AppComponent, CompetitionComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
