import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [FooterComponent, MenuComponent, MenuItemComponent],
  imports: [CommonModule],
  exports: [FooterComponent, MenuComponent, MenuItemComponent],
})
export class ComponentsModule {}
