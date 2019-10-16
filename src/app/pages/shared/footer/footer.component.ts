import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { CultureEnum } from 'src/app/common/enums/culture.enum';
import { DOCUMENT } from '@angular/common';

export interface Culture {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selected: string;
  cultures: Culture[] = [
    {value: CultureEnum.english, viewValue: 'English'},
    {value: CultureEnum.spanish, viewValue: 'Español'}
  ];

  constructor(@Inject(LOCALE_ID) private locale: string, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.selected = this.locale.substring(0, 2);
  }

  selectionChanged($event) {
    this.document.location.href = `${this.document.location.origin}/${this.selected}/`;
  }
}
