import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ShoppingCartService } from 'src/service/shopping-cart.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit{
  newCheckoutList: any;

  userDetail: any;
  userRole: any;
  userRoleIdentificationAdmin: any;
  userRoleIdentificationUser: any;
  detailsPage: boolean = true;
  detailsPageData: string='';
  userInitialLetter: string = ''


  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService
  ) {
    router.events.subscribe((val) => {
      if (this.router.url === "/checkout") {
                this.detailsPage = false;
              } else {
                this.detailsPage = true;
              }
  });
  }

  ngOnInit() {
    this.userDetail = localStorage.getItem('session');
    this.userRole = JSON.parse(this.userDetail).role;
    if (this.userRole === 'admin' || this.router.url == "/checkout") {
      this.userRoleIdentificationAdmin = true;
    } else {
      this.userRoleIdentificationUser = true;
    }
    let userData = JSON.parse(this.userDetail);
    if(userData.role == "user"){
      this.userInitialLetter = userData.username.charAt(0);
    }else{
      this.userInitialLetter = '';
    }
  }


  logout() {
    localStorage.removeItem('checkoutList');
    localStorage.removeItem('totalNumberOfItem');
    this.newCheckoutList = localStorage.getItem('checkoutList');
    this.shoppingCartService.setTotalNumberOfItems(
      this.newCheckoutList?.length
    );
    this.authService.logout();
  }

  userDetails() {
    
   
    
    this.router.navigate(['/userDetails']);

  }

  reset() {
    localStorage.removeItem('checkoutList');
    localStorage.removeItem('totalNumberOfItem');
    this.newCheckoutList = localStorage.getItem('checkoutList');
    this.shoppingCartService.setTotalNumberOfItems(
      this.newCheckoutList?.length
    );
    this.router.navigate(['/home']);
  }

  
}
