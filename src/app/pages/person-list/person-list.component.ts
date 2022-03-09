import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  constructor(private router: Router, private personService: PersonService) {
    this.getData();
  }

  people!: IPersonModel[];

  ngOnInit(): void {}

  navigate(person: any) {
    this.router.navigate(['person/' + person.id.name]);
  }
  getData() {
    this.personService.getPeople().then(async (response: Response) => {
      console.log(response);
      const data = await response.json();
      this.people = data['results'];
    });
  }
}
