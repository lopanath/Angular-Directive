import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualrdirective';
  flag=true;
  msg=true;

  superHero="batman";

  //Array of object

  employees=[
    {
    'empId':123,
    "empName":"Lopa",
    "empCity":"Kolkata"
    },
    {
      'empId':111,
      "empName":"kanika",
      "empCity":"Kolkata"
      },
      {
        'empId':121,
        "empName":"Mukti",
        "empCity":"Kolkata"
        }
  ]

  textColor="purple";
  classProp="c3";
}
