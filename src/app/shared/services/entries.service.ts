import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  constructor(private http: HttpClient) {}

  /**
   * Gets all entries
   * @returns  res
   * Accept parametres
   * title	      query	string	name of entry (matches via substring - i.e. "at" would return "cat" and "atlas")	No
   * description	query	string	description of entry (matches via substring)	No
   * auth	        query	string	auth type of entry (can only be values matching in project or null)	No
   * https	      query	bool	return entries that support HTTPS or not	No
   * cors	        query	string	CORS support for entry ("yes", "no", or "unknown")	No
   * category	    query	string	return entries of a specific category	No
   */
  getAll() {
    return this.http.get('entries');
  }

  getByCategory(category: string) {
    return this.http.get('entries?category=' + category);
  }
}
