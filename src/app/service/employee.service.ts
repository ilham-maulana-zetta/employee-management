import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    
    constructor(
        private http: HttpClient
    ) { }

    getData(search?: string) {
        let params = new HttpParams()
        if (search) {
            params = params.append('q', search)
        }
        return this.http.get(environment.host + '/data', { params })
    }

    getDataById(data: any) {
        return this.http.get(environment.host + '/data/' + data)
    }

    insert(data: any) {
        return this.http.post(environment.host + '/data', data)
    }
    
    update(id: any, data: any) {
        return this.http.put(environment.host + '/data/' + id, data)
    } 

    delete(id: any) {
        return this.http.delete(environment.host + '/data/' + id)
    }
}