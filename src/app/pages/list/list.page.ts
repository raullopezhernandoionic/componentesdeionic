import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../../assets/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>

  constructor(private dataService : DataService) { }

  ngOnInit() {

    // Sin el Observable
    // this.dataService.getUsuarios().subscribe(console.log)

    //Con el Observable

    this.usuarios = this.dataService.getUsuarios();
  }


  favourite(user:any){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();

  }

  share(user:any){
    console.log('user',user);
    this.ionList.closeSlidingItems();
  }

  delete(user:any){
    console.log('delete',user);
    this.ionList.closeSlidingItems();
  }

}
