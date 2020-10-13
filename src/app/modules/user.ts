export interface IUserResponse {
    results: Array<IUser>;
}
export interface IUser {
    name: IUserName;
    gender: string;
    profession: string;
    knowFor: string;
    status: number;
}

export interface IUserName {
    first: string;
    last: string;
}