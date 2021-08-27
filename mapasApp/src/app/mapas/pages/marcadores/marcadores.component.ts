import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from "mapbox-gl";

interface MarcadorColor {
  color: string;
  market: mapboxgl.Marker
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
      height: 100%;
      width: 100%;
    }
    .list-group{
        position: fixed;
        top:20px;
        right: 20px;
        z-index: 99;
    }

    li{
      cursor: pointer;
    }

    `

  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoom: number = 15;
  center: [number, number] = [-109.96623886704991, 27.495515666607286];

  listMarket: MarcadorColor[] = []



  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoom
    });


    // const marketHatml: HTMLElement = document.createElement('div');
    // marketHatml.innerHTML = 'hola mundo';

    // const market = new mapboxgl.Marker( {
    //   element: marketHatml
    // });

    // const market = new mapboxgl.Marker();

    // market.setLngLat( this.center )
    //       .addTo(this.mapa)


  }

  agregarMarket() {

    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));


    const nuevoMarket = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa)


    this.listMarket.push({
      color,
      market: nuevoMarket
    })

  }


  irMarcador( market: mapboxgl.Marker ) {

    this.mapa.flyTo({
      center: market.getLngLat()
    })

  }

}
