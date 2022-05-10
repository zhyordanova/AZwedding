import { AfterViewInit, Component, OnInit } from '@angular/core';


declare const google: any;
declare const initMap: any;

@Component({
  selector: 'app-wedding-itinerary',
  templateUrl: './wedding-itinerary.component.html',
  styleUrls: ['./wedding-itinerary.component.scss']
})
export class WeddingItineraryComponent implements OnInit {

  // locations = [
  //   { "title": "St. Sophia Church", "address1": "ul. \"Paris\" 2", "address2": "1000 Sofia Center, Sofia, Bulgaria", "coords": { "lat": 42.69676678830376, "lng": 23.33144655277864 }, "placeId": "ChIJW-aQ_XCFqkAR-Jp0kkiUOPQ" },
  //   { "title": "Grand Hotel Millennium Sofia", "address1": "Милениум център", "address2": "bul. \"Vitosha\" 89B, 1463 Ivan Vazov, Sofia, Bulgaria", "coords": { "lat": 42.68230811791999, "lng": 23.314710298811345 }, "placeId": "ChIJdXtu_6OFqkAR1JmitDfJZlE" }
  // ]

  infos = [
    {
      location: 'https://www.google.com/maps/place/%D0%A5%D1%80%D0%B0%D0%BC+%E2%80%9E%D0%A1%D0%B2%D0%B5%D1%82%D0%B0+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F%E2%80%9C/@42.6965874,23.3291452,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa8570fd90e65b:0xf438944892749af8!8m2!3d42.6965874!4d23.3313339',
      name: 'Храм „Света София”',
      address: 'гр. София, ул. „Париж” 2',
      transport: `Следните линии имат маршрути, които минават близо до Света София:\nАвтобус: 204, 280, 304, 309, 604, 94\n Метро: М1, М3, М4\nТрамвай: 22\nTролейбус: 3, 4, 9`,
      parking: 'Около храм-паметника „Св. Ал. Невски“ и базиликата „Св. София“ местата за паркиране са в Синя зона, която е с работно време до 20:30. За да заплатите паркирането, може да изпратите SMS на телефон 1302',
      goodToKnow: ''
    },
    {
      location: 'https://www.google.com/maps/place/%D0%93%D1%80%D0%B0%D0%BD%D0%B4+%D1%85%D0%BE%D1%82%D0%B5%D0%BB+%D0%9C%D0%B8%D0%BB%D0%B5%D0%BD%D0%B8%D1%83%D0%BC+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6823373,23.3122802,17z/data=!3m1!4b1!4m8!3m7!1s0x40aa85a3ff6e7b75:0x5166c937b4a299d4!5m2!4m1!1i2!8m2!3d42.6823373!4d23.3144689',
      name: 'Гранд Хотел Милениум София',
      address: 'гр. София, 1463, бул. Витоша 89В',
      transport: `Следните линии имат маршрути, които минават близо до Grand Hotel Millennium Sofia:\nАвтобус: 204, 260, 604, 72, 76, 94\nМетро: М2, М3\nТрамвай: 27, 7`,
      parking: `Хотелът разполага със собсвен паркинг, който се заплаща по 4лв. на час. Може да намерите места за паркиране в уличката около Майчин дом, където също е Синя зона, която ще работи до 20:30. За да заплатите паркирането, може да изпратите SMS на телефон 1302.\nМоля Ви консумирайте алкохол с мярка ако ще шофирате, но ако изгубите мярката, може да оставите колата, зоната не работи в неделя и може да я приберете на следващият ден.`,
      goodToKnow: 'В залата не е разрешено тютюно пушенето. За да може да пушите ще се наложи да слезете на централният вход, които е два етажа по на долу. Нашият съвет е да се заредите с предпочитан от вас електронене заместител като например IQOS или електронно наргиле, които са позволени за употреба в целият хотел.'
    }
  ]

  ngOnInit() {
  }
}



