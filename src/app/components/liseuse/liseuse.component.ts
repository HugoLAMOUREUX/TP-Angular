import { Component, OnInit } from '@angular/core';
import { Planche } from 'src/app/models/planche';
import { XkcdService } from 'src/app/services/xkcd.service';

@Component({
  selector: 'app-liseuse',
  templateUrl: './liseuse.component.html',
  styleUrls: ['./liseuse.component.css'],
})
export class LiseuseComponent implements OnInit {
  title: string = 'xkcd';
  numeroEnCours: number = 2677;
  plancheEnCours: Planche = new Planche(
    this.numeroEnCours,
    'https://imgs.xkcd.com/comics/two_key_system.png',
    new Date(2022, 9, 26),
    'Two Key System'
  );
  constructor(private xkcdService: XkcdService) {}

  ngOnInit(): void {}

  getPlancheNumero(num: number) {
    this.xkcdService.getPlancheNumero(num).subscribe((planche: Planche) => {
      this.plancheEnCours = planche;
    });
    //this.plancheEnCours = new Planche(num);
  }

  first() {
    this.numeroEnCours = 1;
    this.getPlancheNumero(this.numeroEnCours);
  } // La fonction réinitialise la propriété "numeroEnCours" à 1.
  back() {
    if (this.numeroEnCours > 1) {
      this.numeroEnCours--;
      this.getPlancheNumero(this.numeroEnCours);
    }
  } // La fonction décrémente de 1 de la propriété "numeroEnCours" seulement si cette dernière est supérieure à 1.
  random() {
    this.numeroEnCours = Math.floor(Math.random() * 2678);
    this.getPlancheNumero(this.numeroEnCours);
  } // La fonction associe une valeur aléatoire comprise entre [1;2677] à la propriété "numeroEnCours".
  next() {
    if (this.numeroEnCours < 2677) {
      this.numeroEnCours++;
      this.getPlancheNumero(this.numeroEnCours);
    }
  } // La fonction incrémente de 1 la propriété "numeroEnCours" seulement si cette dernière est inférieure à 2677.
  last() {
    this.numeroEnCours = 2677;
    this.getPlancheNumero(this.numeroEnCours);
  } // La fonction réinitialise la propriété "numeroEnCours" à 2677.
}
