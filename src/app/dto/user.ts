export class User{
  id: number;
  name: string;
  surname: string;
  email: string;
  username: string;
}

export class Session {
  token: string;
  user: User;
}

export class LogginObject {
  username: string;
  password: string;
}
