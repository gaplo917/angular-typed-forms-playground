import { Component, OnInit } from '@angular/core'
import { TypedFormBuilder } from '@gaplo917/angular-typed-forms'
import { UserTable } from './forms/user-table'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  userTable: UserTable

  constructor(private fb: TypedFormBuilder) {
    this.userTable = new UserTable(fb)
    this.userTable.valueChanges.subscribe(console.log)
  }

  ngOnInit(): void {}

  trackByIndex(index: number) {
    return index
  }
}
