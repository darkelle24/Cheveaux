import { Component, OnInit } from '@angular/core';

import { Contact } from '../../../contact'

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.scss']
})
export class ContactEmailComponent implements OnInit {

  model = new Contact('', '', '', '')

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
