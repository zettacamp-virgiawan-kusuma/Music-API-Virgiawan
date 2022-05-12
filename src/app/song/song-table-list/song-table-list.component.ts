import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddSongDialogComponent } from '../add-song-dialog/add-song-dialog.component';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-table-list',
  templateUrl: './song-table-list.component.html',
  styleUrls: ['./song-table-list.component.css']
})
export class SongTableListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'genre', 'duration', 'created_by', 'action'];
  filteredColumns: string[] = ['filter-name', 'filter-genre', 'filter-created_by'];

  songs: any = new MatTableDataSource([]);

  loading = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private songService: SongService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data => {
      this.songs.data = data;
      this.songs.paginator = this.paginator;
      this.loading = false;
      console.log(data);
    });
  }

  openAddDialog() {
    this.dialog.open(AddSongDialogComponent);
  }

  openEditDialog(id: number) {
    this.dialog.open(AddSongDialogComponent, {
      data: {
        _id: id
      }
    });
    console.log(id);
  }

  detailSong(id: number) {
    this.router.navigate(['detail', id]);
  }

  deleteSong(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Song has been deleted.',
          'success'
        )
      }
    });
  }

  ngAfterViewInit() {
    this.songs.paginator = this.paginator;
  }

}
