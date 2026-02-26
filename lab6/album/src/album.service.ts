import { Injectable,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from './models';
import {Photo} from './models';


@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private client = inject(HttpClient);

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getAlbum(id:number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/:${{id}}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos`);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }

  deleteAlbum(id:number):Observable<void>{
    return this.client.delete<void>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
