import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs = [
    {
      "_id": "1",
      "name": "Elora",
      "genre": "Rock",
      "duration": "5:00",
      "created_by": "Pure Saturday",
    },
    {
      "_id": "2",
      "name": "Pathetic Waltz",
      "genre": "Pop",
      "duration": "4:00",
      "created_by": "Pure Saturday",
    },
    {
      "_id": "3",
      "name": "Kuning",
      "genre": "Indie Rock",
      "duration": "11:52",
      "created_by": "Efek Rumah Kaca",
    },
  ]

  songsNew = new BehaviorSubject<any>(this.songs);
  songsNew$ = this.songsNew.asObservable();

  constructor() { }

  getSongs() {
    return this.songsNew$;
  }
}
