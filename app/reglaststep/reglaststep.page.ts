import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reglaststep',
  templateUrl: './reglaststep.page.html',
  styleUrls: ['./reglaststep.page.scss'],
})
export class ReglaststepPage implements OnInit {

  regMethod = 'Google Plus';

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
