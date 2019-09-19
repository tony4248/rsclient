//存放和管理当前用户的服务
class UserService{
    static userSvc: UserService;
    private user: User;
    //单例
    public static getInstance(): UserService {
        if (this.userSvc == null) {
            this.userSvc = new UserService();

        }
        return this.userSvc;
    }

    //设置用户
    public setUser(user: User):void{
        this.user = user;
    }

    //取得用户
    public getUser():User{
        return this.user;
    }

    //设置用户的额外属性
    public getUserExtraAttribute():any{
        return this.user.extraAttribute;
    }

    //取得用户的额外属性
    public setUserExtraAttribute(obj:any){
        this.user.extraAttribute = obj
    }
}