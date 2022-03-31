export interface Adminmessage{
    id:number;
    name:string;
    message:string;
    image:string;
    user_id:number;
    admin_id:number;
    email:string;
    }

export interface AdminmessageData{
    data: Adminmessage[];

}