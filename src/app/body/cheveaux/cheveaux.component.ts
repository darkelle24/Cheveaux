import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../services/service-all.service';
import { TranslateService } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-cheveaux',
  templateUrl: './cheveaux.component.html',
  styleUrls: ['./cheveaux.component.scss'],
  animations: [
    trigger('myInsertTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: '0' }),
        animate('0.3s ease-out', style ({
          transform: 'translateY(0%)',
          opacity: '1'
        }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: '1' }),
        animate('0.3s ease-out', style ({
          transform: 'translateY(100%)',
          opacity: '0'
        }))
      ])
    ])
  ]
})


export class CheveauxComponent implements OnInit {

  save: any[] = null;
  chevaux: any[] = null;
  loading = true

  constructor(private projetService: ServiceAllService, private translate: TranslateService) { }

  ngOnInit() {
    this.loading = true
    this.getData();
    this.translate.onLangChange.subscribe((event: any) => {
      this.getData()
    });
  }

  onEnter(search: any) {
    search.blur();
  }

  onKey(event: any) {
    // this.projet = this.save.filter(project => project.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
  }

  getData() {
    this.projetService.getAllChevaux(this.translate.currentLang)
      .subscribe(
        (data: any) => {
          this.chevaux = data;
          this.loading = false;
        },
        (err: any) => console.log('error :' + err)
    );
  }

}
