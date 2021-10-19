import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },

    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alerts'
    },

    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },

    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'
    },

    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },

    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },

    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },

    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/ion-fab'
    },

    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },

    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite'
    }


  ];
  constructor() { }

  ngOnInit() {
  }

}
