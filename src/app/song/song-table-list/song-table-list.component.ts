import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddSongDialogComponent } from '../add-song-dialog/add-song-dialog.component';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-table-list',
  templateUrl: './song-table-list.component.html',
  styleUrls: ['./song-table-list.component.css']
})
export class SongTableListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'genre', 'duration', 'created_by', 'action'];

  songs:any = new MatTableDataSource([]);

  loading = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private songService: SongService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data => {
      this.songs.data = data;
      this.songs.paginator = this.paginator;
      this.loading = false;
      console.log(data);
    });
  }

  openAddDialog(){
    this.dialog.open(AddSongDialogComponent);
  }

  ngAfterViewInit() {
    this.songs.paginator = this.paginator;
  }

}
