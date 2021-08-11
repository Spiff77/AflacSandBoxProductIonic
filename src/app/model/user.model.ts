export class User{
  constructor(public id?: number,
              public name?: string,
              public username?: string,
              public firstName?: string,
              public lastName?: string,
              public token?: string ) {
  }

  assignData(values: Partial<User>): void {
    Object.assign(this, values);
  }

}
