export class placetype {
  placekey: string;
  fontclass: string;
  placetype: string;
}

export class locationTy {
  latitude: number;
  longitude: number;
  placetype: string;
}

export const PLACETYPES: placetype[] = [{
            placekey: "bank",
            fontclass: "fa fa-university fa-2x",
            placetype: "Bank"
        },
        {
            placekey: "atm",
            fontclass: "fa fa fa-credit-card-alt fa-2x",
            placetype: "ATM"
        }, 
        {
            placekey: "hospital",
            fontclass: "fa fa-hospital-o fa-2x",
            placetype: "Hospital"
        },
        {
            placekey: "school",
            fontclass: "fa fa-graduation-cap fa-2x",
            placetype: "School"
        }, {
            placekey: "movie_theater",
            fontclass: "fa fa fa-film fa-2x",
            placetype: "Movie\nTheater"
        },
        {
            placekey: "department_store",
            fontclass: "fa fa-shopping-cart fa-2x",
            placetype: "Deptartment\nStore"
        },
        
        {
            placekey: "amusement_park",
            fontclass: "fa fa-fort-awesome fa-2x",
            placetype: "Amusement\nPark"
        },
         {
            placekey: "shopping_mall",
            fontclass: "fa fa-shopping-bag fa-2x",
            placetype: "Shopping\nMall"
        },
        {
            placekey: "restaurant",
            fontclass: "fa fa-cutlery fa-2x",
            placetype: "Restaurant"
        },  
        {
            placekey: "park",
            fontclass: "fa fa-tree fa-2x",
            placetype: "Park"
        }, {
            placekey: "cafe",
            fontclass: "fa fa-coffee fa-2x",
            placetype: "Cafe"
        },
        {
            placekey: "stadium",
            fontclass: "fa fa-futbol-o fa-2x",
            placetype: "Stadium"
        }, {
            placekey: "police",
            fontclass: "fa fa-gavel  fa-2x",
            placetype: "Police"
        },
        {
            placekey: "parking",
            fontclass: "fa fa-road fa-2x",
            placetype: "Parking"
        },
        {
            placekey: "taxi_stand",
            fontclass: "fa fa-taxi fa-2x",
            placetype: "Taxi Stand"
        },
        {
            placekey: "night_club",
            fontclass: "fa fa-glass fa-2x",
            placetype: "Night Club"
        },
        {
            placekey: "bar",
            fontclass: "fa fa-beer fa-2x",
            placetype: "Bar"
        },
        {
            placekey: "lodging",
            fontclass: "fa fa-barcode fa-2x",
            placetype: "Lodging"
        },
        {
            placekey: "airport",
            fontclass: "fa fa-plane fa-2x",
            placetype: "Airport"
        },
        {
            placekey: "gym",
            fontclass: "fa fa-heartbeat fa-2x",
            placetype: "GYM"
        }, 
        {
            placekey: "library",
            fontclass: "fa fa-book fa-2x",
            placetype: "Library"
        },
        {
            placekey: "pharmacy",
            fontclass: "fa fa-medkit fa-2x",
            placetype: "Pharmacy"
        },{
            placekey: "gas_station",
            fontclass: "fa fa-free-code-camp fa-2x",
            placetype: "Gas Station"
        },
        
       
        {
            placekey: "post_office",
            fontclass: "fa fa-envelope fa-2x",
            placetype: "Post Office"
        }
    ];