import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IPersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit, OnDestroy {
  myObservable: Observable<number>;
  suscription!: Subscription;
  constructor(private router: Router, private personService: PersonService) {
    //Servidor que busca info y la envia
    this.myObservable = new Observable((observer) => {
      setInterval(() => {
        observer.next(1);
      }, 1000);
    });
    this.getData();
  }
  ngOnDestroy(): void {
    this.unsubscribe();
    
  }

  people!: IPersonModel[];

  ngOnInit(): void {
    this.suscription = this.myObservable.subscribe((data) => {
      console.log(data);
    });
  }

  unsubscribe() {
    this.suscription.unsubscribe();
  }

  navigate(person: any) {
    this.router.navigate(['person/' + person.id.name]);
  }
  getData() {
    this.personService.getPeople().subscribe({
      next: async (data: any) => {
        this.people = data['results'];
      },
      error: (err) => {
        console.log(err);
        console.log(typeof err);

        console.log('Soy del error daado', err.error);
        if (err instanceof TypeError) {
          console.log('Soy del error daado', err.message);
          console.log('La url del servico esta corrupta');
        }
      },
      complete: () => {
        console.log('Finally');
      },
    });
    // .catch((err) => {
    //   console.log(err);
    //   console.log(typeof err);

    //   console.log('Soy del error daado', err.error);
    //   if (err instanceof TypeError) {
    //     console.log('Soy del error daado', err.message);
    //     console.log('La url del servico esta corrupta');
    //   }
    // })
    // .finally(() => {
    //   console.log('Finally');
    // });
  }
}
