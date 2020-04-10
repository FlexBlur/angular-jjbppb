import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "blogApp";

  publis = [
    {
      titrePubli: "Ma première publi",
      contenuPubli: "C'est le bla bla bla",
      datePubli: Date(),
      jadorePubli: 0,
      jeDetestePubli: 0
    },
    {
      titrePubli: "Ma seconde publi",
      contenuPubli: "Un autre blablabla",
      datePubli: Date(),
      jadorePubli: 0,
      jeDetestePubli: 0
    },
    {
      titrePubli: "Ma troisième publi",
      contenuPubli: "Ohlàlà",
      datePubli: Date(),
      jadorePubli: 0,
      jeDetestePubli: 0
    }
  ];

  ngOnInit(): void {}
}
