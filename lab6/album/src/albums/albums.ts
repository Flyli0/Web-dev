import { Component, inject, signal} from '@angular/core';
import { Observable } from 'rxjs';
import {AlbumService} from '../album.service';
import {Album} from '../models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  albumList = signal<Album[]>([]);
  albumService = inject(AlbumService);

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums: Album[]) => {
      this.albumList.set(albums)
      console.log(albums[0]);
      }
    )
  }
}
