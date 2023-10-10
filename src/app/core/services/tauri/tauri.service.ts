import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TauriService {

  constructor() {
  }

  get isTauri(): boolean {
    return !!(window && window.__TAURI__);
  }
}
