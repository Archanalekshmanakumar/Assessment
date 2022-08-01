import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  elements=[
    {
          sno:1,
          name:'Archana',
          section:'A',
          gender:'Female',
          DOB:'15-10-2000',
    },
    {
          sno:2,
          name:'jemi',
          section:'C',
          gender:'Female',
          DOB:'15-1-2001',

    },
         
    {     
          sno:3,
          name:'Ammu',
          section:'B',
          gender:'Female',
          DOB:'16-1-2001',
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
