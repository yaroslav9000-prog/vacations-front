export class User{
    public firstName: string;
    public lastName: string;
    public email: string;
    public pwd: string;
    public role: "user" | "admin";

    constructor(firstName: string, lastName: string, email: string, pwd: string, role: "user"|"admin", public id?: string, public token?: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwd = pwd;
        this.role = role;
    }
}