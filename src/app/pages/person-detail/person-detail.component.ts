import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {
  person!: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.person = this.getPersonById(value.id - 1);
    });
  }

  getPersonById(id: number) {
    const people = [
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

    return people[id];
  }
}
