import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Murat';

  items = [
    { description: "Kahvaltı", action: "No", },
    { description: "Spor", action: "No", },
    { description: "Kitap", action: "No", },
    { description: "Fatura", action: "No", }
  ];

}
