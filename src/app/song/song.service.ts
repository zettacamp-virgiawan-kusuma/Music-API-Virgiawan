import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs = [
    {
      "_id": "1",
      "name": "Song 1",
      "genre": "Rock",
      "duration": "3:00",
      "created_by": "1",
    },
    {
      "_id": "2",
      "name": "Song 2",
      "genre": "Pop",
      "duration": "3:00",
      "created_by": "2",
    }
  ]

  songsNew = new BehaviorSubject<any>(this.songs);
  songsNew$ = this.songsNew.asObservable();

  constructor() { }

  getSongs() {
    return this.songsNew$;
  }
}
