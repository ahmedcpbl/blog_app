import { IUser } from 'app/core/user/user.model';
import { IEntry } from 'app/shared/model/entry.model';

export interface IBlog {
    id?: number;
    name?: string;
    handle?: string;
    user?: IUser;
    entries?: IEntry[];
}

export class Blog implements IBlog {
    constructor(public id?: number, public name?: string, public handle?: string, public user?: IUser, public entries?: IEntry[]) {}
}
