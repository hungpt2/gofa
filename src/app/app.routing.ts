import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { FullLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gofa',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'nap-the',
        loadChildren: './napthe/napthe.module#NaptheModule'
      },
      {
        path: 'doi-thuong',
        loadChildren: './nhanthuong/nhanthuong.module#NhanthuongModule'
      },
      {
        path: 'chuyen-khoan',
        loadChildren: './chuyenkhoan/chuyenkhoan.module#ChuyenkhoanModule'
      },
      {
        path: 'lich-su-nap-tien',
        loadChildren: './lichsunaptien/lichsunaptien.module#LichsuNaptienModule'
      },
      {
        path: 'lich-su-tieu',
        loadChildren: './lichsutieu/lichsutieu.module#LichsuTieuModule'
      },
      {
        path: 'lich-su-nhan-thuong',
        loadChildren: './lichsunhanthuong/lichsunhanthuong.module#LichsuNhanthuongModule'
      },
      {
        path: 'gift-code',
        loadChildren: './giftcode/giftcode.module#GiftCodeModule'
      }
    ]
  },
  {
    path: 'gofa',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'nap-the-nhanh',
    loadChildren: './napthenhanh/napthenhanh.module#NaptheNhanhModule'
  },
  {
    path: 'dang-nhap',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
