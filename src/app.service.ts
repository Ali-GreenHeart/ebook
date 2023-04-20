import { Injectable } from '@nestjs/common';

export interface Human {
  id: number;
  name: string;
}

const users: Human[] = [
  { id: 0, name: 'namiq' },
  { id: 1, name: 'alican' },
  { id: 2, name: 'revan' },
  { id: 3, name: 'nicat' },
]

@Injectable()
export class AppService {
  getHello(ad: string): string {
    return 'Hello World! from ' + ad;
  }
  getUsers(): Human[] {
    return users;
  }
}
