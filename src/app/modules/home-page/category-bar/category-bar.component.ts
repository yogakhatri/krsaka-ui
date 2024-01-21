import { Component } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss'],
})
export class CategoryBarComponent {
  categories: Array<{ name: string; url: string }> = [
    { name: 'Grains', url: '../../../assets/images/corn.jpg' },
    { name: 'Pulses', url: '../../../assets/images/corn.jpg' },
    { name: 'Ghee', url: '../../../assets/images/corn.jpg' },
    { name: 'Vegetables', url: '../../../assets/images/corn.jpg' },
    { name: 'Honey', url: '../../../assets/images/corn.jpg' },
    { name: 'Others', url: '../../../assets/images/corn.jpg' },
  ];
}
