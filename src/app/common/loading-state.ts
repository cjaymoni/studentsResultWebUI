import { BehaviorSubject } from 'rxjs';

export class LoadingState {
  private loading$ = new BehaviorSubject(false);

  startLoading() {
    this.loading$.next(true);
  }

  stopLoading() {
    this.loading$.next(false);
  }

  get loader$() {
    return this.loading$.asObservable();
  }
}

