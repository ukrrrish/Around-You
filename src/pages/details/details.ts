import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,ActionSheetController, AlertController, App, LoadingController, NavController, NavParams,Platform, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Observable } from 'rxjs/Observable';
import { DirectionPage } from '../direction/direction';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage  implements OnInit  {
  public latitude: number;
public longitude: number;
public placeTypeKey: string;
public placeType: string;
public zoom: number;
public locationresponse:any;
public randomItems: any[] = [];
loading: any;
public Details:string;
public distanceCalculated:number;
 @ViewChild('map') mapElement: ElementRef;


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public navParams: NavParams,public geolocation: Geolocation) {
    this.latitude = navParams.get('latitude'); 
   this.longitude = navParams.get('longitude');
   this.placeType=navParams.get('placeType');
   this.placeTypeKey=navParams.get('placeTypeKey');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  
  }

  ngOnInit() {
    this.Details=this.placeType+" Details"
    
    this.loading = this.loadingCtrl.create({
      content: 'Fetching '+this.placeType+' Details'
    });
    this.loading.present();
  this.zoom = 9;
 
    console.log("---in onint-"+this.latitude+this.longitude+this.placeType);

    var service = new google.maps.places.PlacesService(this.mapElement.nativeElement);
var pyrmont = new google.maps.LatLng(this.latitude,this.longitude);
  let request = {
      location : pyrmont,
      radius : 5000 ,
      types: [this.placeTypeKey]
  };
  return new Promise((resolve,reject)=>{
      service.nearbySearch(request,function(results,status){
          if(status === google.maps.places.PlacesServiceStatus.OK)
          {
            
              resolve(results);
          }else
          {
              reject(status);
          }

      }); 
    }).then(value => {
              this.locationresponse = value;
             for(let itemselecct of this.locationresponse){
             if ((typeof itemselecct.opening_hours != 'undefined' && typeof itemselecct.opening_hours.open_now != 'undefined') && itemselecct.opening_hours.open_now)
             {
               itemselecct.openStatus="Opened";
             }else{
               itemselecct.openStatus="Closed";
             }
             }
              this.loading.dismiss();
  });
  
}

navigateToDirection(ind){
   this.navCtrl.push(DirectionPage, {
      orgLatitude: this.latitude, orgLongitude: this.longitude,destLatitude: this.locationresponse[ind].geometry.location.lat(), destLongitude: this.locationresponse[ind].geometry.location.lng()
    });
 }

}
