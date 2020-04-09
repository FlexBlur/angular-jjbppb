import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blogApp';

  publis = [
    { titrePubli: "Ma première publi", contenuPubli: "C'est le bla bla bla" },
    { titrePubli: "Ma seconde publi", contenuPubli: "Un autre blablabla" },
    { titrePubli: "Ma troisième publi", contenuPubli: "Ohlàlà" },
  ];

  ngOnInit(): void { }
}