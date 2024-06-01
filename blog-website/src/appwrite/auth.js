//Authentication Service class
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{ 
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
         try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                //call another method, if account created then login the user
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
         } catch (error) {
            throw error;
         }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);

        } catch (error) {
            throw error;
        }
        //in case we don't get an account
        return null;
    }

    //to get the currently loggedin user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error",error);
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

//export the object so that using this class methods etc can be used using .
export default authService