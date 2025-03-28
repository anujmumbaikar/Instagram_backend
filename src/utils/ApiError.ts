class ApiError extends Error {
    statusCode: number;
    data?: any;
    errors?: string[];
    success?: boolean;

    constructor(
        statusCode: number,
        message: string = "Something Went Wrong",
        data?: any,
        errors?: string[],
        success?: boolean
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        this.errors = errors;
        this.success = success;
        Error.captureStackTrace(this, this.constructor);
    }
}

export { ApiError };

