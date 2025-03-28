class ApiResponse{
    statusCode:number
    data?:any
    message:string = "Success"
    success?:boolean
    constructor(statusCode:number, message:string = "Success", data?:any, success?:boolean){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;

    }
}