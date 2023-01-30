import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '08_Angular';

  onomatopoeiaList: string[] = []

  onReceiveNewOnomatopia(newOnomatopia: string) {

    this.onomatopoeiaList.push(newOnomatopia)
  }

}
