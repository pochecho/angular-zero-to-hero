import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  constructor(private router: Router) {
    this.getData();
  }

  people!: any[];

  ngOnInit(): void {}

  navigate(person: any) {
    this.router.navigate(['person/' + person.id]);
  }
  getData() {
    this.people = [
      {
        id: 1,
        name: 'Felipe',
      },

      {
        id: 2,
        name: 'Darwin',
      },

      {
        id: 3,
        name: 'Alejandro',
      },
    ];
  }
}
