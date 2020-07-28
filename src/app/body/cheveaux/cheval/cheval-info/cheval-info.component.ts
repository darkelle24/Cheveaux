import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../../../services/service-all.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './cheval-info.component.html',
  styleUrls: ['./cheval-info.component.scss']
})

export class ChevalInfoComponent implements OnInit {

  genealogie: any = null

  constructor(private projetService: ServiceAllService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    console.log(name);
    this.projetService.getOneCheval(name)
      .subscribe(
        (data: any) => {
          this.genealogie = data.généalogie;
          console.log(data);
        },
        (err: any) => console.log('error :' + err)
      );
  }

}
