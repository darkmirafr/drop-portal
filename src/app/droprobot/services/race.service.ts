import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RaceService {
  constructor(private http: HttpClient) {
   }
   getRace(){
        return this.http.get('http://alcalyn.nsupdate.info:15000/index-dev.php/api/race');
   }
}