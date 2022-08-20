import { Component, OnInit } from '@angular/core';
import {PathService} from "../../../services/path/path.service";
import {TEXTS, TITLES} from "../../../constants/constants";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  bl_startComp: string = TITLES.dashboard.admin.compStart;
  bt_startComp: string = TEXTS.dashboard.admin.compStart;
  startCompPath: string = this.path.getAdminDashBoardPath;

  bl_register: string = TITLES.dashboard.admin.createUser;
  bt_register: string = TEXTS.dashboard.admin.createUser;
  registerPath: string = this.path.getRegisterPath;

  bl_delete: string = TITLES.dashboard.admin.deleteUser;
  bt_delete: string = TEXTS.dashboard.admin.deleteUser;
  deletePath: string = this.path.getDeletePath;

  constructor(private path: PathService) { }

  ngOnInit(): void {
  }

}
