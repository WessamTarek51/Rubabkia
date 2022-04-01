export interface Adminmessage{
    id:number;
    name:string;
    message:string;
    user_id:number;
    admin_id:number;
    
    }

export interface AdminmessageData{
    data: Adminmessage[];

}