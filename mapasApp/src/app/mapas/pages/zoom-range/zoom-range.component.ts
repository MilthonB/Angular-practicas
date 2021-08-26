import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
   `
    .mapa-container{
      height: 100%;
      width: 100%;
    }

    .row{
      background-color: white;
      border-radius:5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width:400px

    }
   `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoom: number = 10;

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-109.96623886704991, 27.495515666607286],
      zoom: this.zoom
    });

    this.mapa.on('zoom', ( evnt ) => this.zoom = this.mapa.getZoom())

    this.mapa.on('zoomend', ( evnt ) => {
      if( this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo(18)
      }
    });


  }


  zoomOut(){
    this.mapa.zoomOut();
  }
  
  
  zoomIn(){
    this.mapa.zoomIn();
  }

  rangeZoom( zoom: string ){
    this.mapa.zoomTo( Number(zoom) );
  }


}
