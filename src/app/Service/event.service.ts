import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class EventService {
    // private Base_url: string;
    private Api_url: string;
    private controller: string = "Test";
    constructor(private http: HttpClient) {
        this.Api_url = environment.ApiUrl;
        console.log(this.Api_url);
    }

    getAll() {
        let url = `${this.Api_url}/api/${this.controller}`;
        return this.http.get(url)
    }
}