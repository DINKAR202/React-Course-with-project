const ErrorHandeler {
    constructor(status, msg){
        this.status = status;
        this.message = msg;
    }


    static validationError(message = "All fields are required!"){
        return new ErrorHandeler(422, message);            
    }

    static notFoundError(message = 'Not found!'){
        return new ErrorHandeler(404, message);            
    }
    
}