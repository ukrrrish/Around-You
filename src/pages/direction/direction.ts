import { Component ,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the DirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-direction',
  templateUrl: 'direction.html',
})
export class DirectionPage {
 public orgLatitude: number;
public orgLongitude: number;
 public destLatitude: number;
public destLongitude: number;
   @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    
    map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
      this.orgLatitude = navParams.get('orgLatitude'); 
      this.orgLongitude = navParams.get('orgLongitude');
      this.destLatitude = navParams.get('destLatitude'); 
      this.destLongitude = navParams.get('destLongitude');

  }

  ionViewDidLoad() {
    if (!!google) {
    this.loadMap();
        this.startNavigating();
        } else {
     
    }
  }

   loadMap(){
 
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }

    startNavigating(){
 
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
 
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
 
        directionsService.route({
            
            
           origin: {lat: this.orgLatitude, lng: this.orgLongitude},
           destination: {lat: this.destLatitude, lng: this.destLongitude},
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        });
 
    }

}
