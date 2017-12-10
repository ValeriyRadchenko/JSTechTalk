import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(BASE_URL);
  }

  addNewItem(itemName: string) {
    return this.http.post(BASE_URL, { name: itemName });
  }
}
