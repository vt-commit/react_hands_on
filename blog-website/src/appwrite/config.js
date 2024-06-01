//Database service and bucket service
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //create posts and store in db
    async createPost({title, slug, content, featuredImage, status,userId}){
        try {
            //slug is documentId here
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status, userId}
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error",error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status}
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error",error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error",error)
            return false;
        }
    }

   //as we don't want staus inactive docs, we will query the db and not get all docs.
   //for active status posts
   //in case of multiple values give array in place of "active"

   async getAllPost(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
    } catch (error) {
        console.log("Appwrite Service :: getAllPost :: error",error)
        return false;
    }
   }

   //storage service

   async uploadFile(file){
    try {
        //appwrite returns a public path for the file
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )

    } catch (error) {
        console.log("Appwrite Service :: uploadFile :: error",error)
        return false;
    }
   }

   async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )

    } catch (error) {
        console.log("Appwrite Service :: deleteFile :: error",error)
        return false;
    }
   }

   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    ).href
   }

}

const service =new Service();

export default service;