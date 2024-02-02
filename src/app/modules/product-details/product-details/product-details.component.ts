import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  currentImageIndex: number = 0;
  selectedProductType: string = '';
  productDetails = {
    _id: { $oid: '64ef0b3607e2df7b35c16288' },
    sellerId: 'seller1',
    name: 'seller one',
    category: 'food',
    subCategory: 'grains',
    description:
      'organic food grains, growns in desert. No fertilizer or any cemicales used for production.',
    totalQuantity: { $numberInt: '1000' },
    unitQuantity: { $numberInt: '5' },
    unitQuantityPrice: { $numberInt: '40' },
    discount: { $numberInt: '10' },
    isOnSale: false,
    detailsOfProduct: [
      'Fine grains of bajara.',
      'No chemeicales and fertilizers are used while cultivation of this product.',
    ],
    addresses: [
      {
        street: '21 baking street',
        city: 'barmer',
        state: 'rajasthan',
        zip: '344001',
        _id: { $oid: '64ef0b3607e2df7b35c16289' },
      },
    ],
    comments: [],
    certifications: [],
    images: [
      '../../../assets/images/corn.jpg',
      '../../../assets/images/barley.jpg',
      '../../../assets/images/green-grain.jpg',
      '../../../assets/images/black-grain.jpg',
    ],
    __v: { $numberInt: '0' },
  };

  toggleSideNav() {
    // this.toggleSidenav.emit();
  }

  askForLocation() {
    // Implement location functionality
  }

  signIn() {
    // Implement sign-in functionality
  }

  openCart() {
    // Implement cart functionality
  }
}
