import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
submit() {
alert("Submited");
console.log("HI");
}
  title = 'InternApp';

}

