import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from '@eps/constants';
import { createRequestOption } from '@eps/utils';
import { IProductCategory } from '@eps/models';

type EntityResponseType = HttpResponse<IProductCategory>;
type EntityArrayResponseType = HttpResponse<IProductCategory[]>;

@Injectable({ providedIn: 'root' })
export class ProductCategoryService {
    public resourceUrl = SERVER_API_URL + 'services/zezawar/api/product-categories';
    public extendUrl = SERVER_API_URL + 'services/zezawar/api/product-categories-extend';

    constructor(protected http: HttpClient) { }

    create(productCategory: IProductCategory): Observable<EntityResponseType> {
        return this.http.post<IProductCategory>(this.resourceUrl, productCategory, { observe: 'response' });
    }

    update(productCategory: IProductCategory): Observable<EntityResponseType> {
        return this.http.put<IProductCategory>(this.resourceUrl, productCategory, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IProductCategory>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IProductCategory[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    fetch(): Observable<EntityArrayResponseType> {
        console.log('fetch')
        return this.http.get<IProductCategory[]>(this.extendUrl, { observe: 'response' });
    }    
}
