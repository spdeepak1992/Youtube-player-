import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

/*
  How do I include the plyr.interfaces.ts here ?  
*/

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    /*
    How do I setup it up here ?
    Doesn't work:
    plyr.setup('youtube', {});
  */
  }

  ionViewDidLoad() {
    plyr.setup({});
  }
}
