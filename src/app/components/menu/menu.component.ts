import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('#ul') ulComponent!: ElementRef;

  @ContentChildren(MenuItemComponent, {
    read: ElementRef,
  })
  liList!: QueryList<ElementRef>;

  @Input() theme: string;
  @Input() data:number ;

  constructor(private el: ElementRef) {
    this.theme = 'dark';
    this.data = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ....');
    console.log(changes.theme.currentValue);
    console.log(changes.data.previousValue);
    console.log('----\n');
  }

  ngOnInit(): void {
    console.log('ngOnInit ....');

    console.log(this.el.nativeElement);
    console.log(this.liList);
    console.log('----\n');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ....');
    console.log('----\n');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ....');
    console.log('----\n');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ....');
    console.log('----\n');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ....');
    console.log(this.ulComponent);
    for (const li of this.liList) {
      console.log(li.nativeElement);
    }
    console.log('----\n');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ....');
    console.log(this.ulComponent);
    console.log('----\n');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy ....');
    console.log('----\n');
  }

 
}
