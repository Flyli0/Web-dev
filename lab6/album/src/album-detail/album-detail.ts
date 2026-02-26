import { Component, inject, signal } from '@angular/core';
import {AlbumService} from '../album.service';
import {Album} from '../models';

@Component({
  selector: 'app-album-detail',
  imports: [],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {
albumService = inject(AlbumService);
album = signal<Album>(new Album(0,0,""));

ngOnInit(albumId: number) {
  this.albumService.getAlbum(albumId).subscribe(a => {
    this.album.set(a);
    console.log(this.album);
  });
}
}
