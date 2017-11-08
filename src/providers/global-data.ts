import { Injectable } from '@angular/core';

@Injectable()
export class GlobalData {

  private _userId: string;
  private _username: string;
  private _token: string;
  private _role: number;

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get role(): number {
    return this._role;
  }
  set role(value: number) {
    this._role = value;
  }
}
