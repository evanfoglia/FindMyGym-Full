import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


getAllReviews(): Observable<any> {
  return this.http.get(this.baseurl + '/reviews/',
  {headers: this.httpHeaders});
}

getOneReview(id): Observable<any> {
  return this.http.get(this.baseurl + '/reviews/' + id + '/',
  {headers: this.httpHeaders});
}

updateReview(review): Observable<any> {
  const body = {name: review.name, rev: review.rev, reviewID: review.reviewID};
  return this.http.put(this.baseurl + '/reviews/' + review.id + '/', body,
  {headers: this.httpHeaders});
}

createReview(review): Observable<any> {
  const body = {name: review.name, rev: review.rev, reviewID: review.reviewID};
  return this.http.post(this.baseurl + '/reviews/', body,
  {headers: this.httpHeaders});
}

deleteReview(id): Observable<any> {
  return this.http.delete(this.baseurl + '/reviews/' + id + '/',
  {headers: this.httpHeaders});
}




}
