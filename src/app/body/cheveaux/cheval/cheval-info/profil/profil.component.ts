import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() profil: any;
  dateFormatted: string;


  constructor() {
  }

  ngOnInit(): void {
    this.dateFormatted = this.profil.naissance.toString()
  }

}
