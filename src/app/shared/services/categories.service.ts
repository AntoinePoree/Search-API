import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  //   GET /categories
  // List all categories
  getAll() {
    return this.http.get('categories');
  }
}
