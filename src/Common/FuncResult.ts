class FuncResult{
    
    public success:boolean;
	public data:any
    
    public constructor(success:boolean, data:any){
        this.success = success;
        this.data = data;
    }

    public getSuccess():boolean{
        return this.success;
    }

    public getData():any{
        return this.getData;
    }

}