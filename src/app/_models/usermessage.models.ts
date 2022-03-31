export interface Usermessage{
    id:number;
    name:string;
    message:string;
    image:string;
    user_id:number;
    admin_id:number;
    email:string;
    }

export interface UsermessageData{
    data: Usermessage[];

}