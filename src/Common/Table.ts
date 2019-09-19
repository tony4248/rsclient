class Table{
    //设置座位
    public seats:Array<Seat>
    //座位数量
    public seatsNum:number;
    //当前用户的座位,从1开始, 0位弃用,也即我的座位
    public mySeatNo = -1;
    //额外的属性
    private extraAttribute:any; 

    public constructor(seatsNum:number) {
        this.seats = [];
        this.seatsNum = seatsNum;
        this.buildSeats(this.seatsNum)
    }
    //根据座位数初始化Seat,全部为空,席位从1开始,0位不用
    private buildSeats(seatsNum:number):void{
		for (let i = 0; i < seatsNum + 1 ; i++){
			//使用add方法，增加相应个数的位置
			this.seats.push(null);
		}
    }

    //加入用户
    public addUser(seatNo:number, user:User, isMe:boolean):void{
        let seat = new Seat(user);
        if(isMe){this.mySeatNo = seatNo;}
        this.seats.splice(seatNo, 1, seat);
     }

    //根据座位号删除用户
    public removeUser(seatNo:number):void{
        this.seats.splice(seatNo, 1, null);
    }

    //根据用户Id删除用户
    public removeUserById(userID:String):void{
        let seatNo:number = this.getSeatNoByUserId(userID);
        if (seatNo > 0){ this.removeUser(seatNo);}
    }

    //根据座位号取得用户
    public getUserBySeatNo(seatNo:number):User{
        let seat = this.seats[seatNo];
        if(null == seat){return null;}
        return seat.user;
    }

    //返回桌面上当前的用户
    public getAllUsers():Array<User>{
        let users = [];
        for (let i = 1; i < this.seats.length; i++) {
            let seat = this.seats[i];
            if(null != seat && null != seat.user){ 
                users.push(seat.user);
            }
		}
        return users;
    }

    //根据User Id取得座位号
    public getSeatNoByUserId(userId:String):number{
        for (let i = 1; i < this.seats.length; i++) {
            let seat = this.seats[i];
            if(null != seat && userId == seat.user.id){ return i;}
		}
        return -1;
    }

    //根据ID取得用户
    public getUserByUserId(userId:string):User{
        for (let i = 1; i < this.seats.length; i++) {
            let seat = this.seats[i];
            if(null != seat){ 
                if(seat.user.id == userId){
                    return seat.user;
                }
            }
		}
        return null
    }
    
    //取得当前用户
    public getMe():User{
        if(this.mySeatNo && null != this.seats[this.mySeatNo]){
            return this.seats[this.mySeatNo].user;
        }
        return null;
    }
    
    //取得上一个席位
    public peekPreviousSeatNo(currtSeatNo:number):number{
        if(this.seatsNum == 1) { return -1;}
        let seatNo = (currtSeatNo - 1) >= 1 ? currtSeatNo - 1 : this.seats.length -1;
        return seatNo;

    }

    //更加目标座位号与当前座位号的gap取得的目标座位号
    public peekSeatNoRecursively(currtSeatNo:number, seatNoGap:number){
        let seatNo = -1;
        if(seatNoGap > 0){seatNo = this.peekNextSeatNoRecursively(currtSeatNo, seatNoGap);}
        else if (seatNoGap == 0){seatNo = currtSeatNo;}
        else{seatNo = this.peekPreviousSeatNoRecursively(currtSeatNo, Math.abs(seatNoGap));}
        return seatNo;
    }

    //循环的取得下家的座位号
    public peekPreviousSeatNoRecursively(currtSeatNo:number, seatNoGap:number){
        let seatNo = currtSeatNo;
        for (let i = 0; i <seatNoGap ; i++) {
            seatNo = this.peekPreviousSeatNo(seatNo);
		}
        return seatNo;
    }

    //取得当前用户的上家
    public getPreviousUser():User{
        let seatNo = this.peekPreviousSeatNo(this.mySeatNo);
        if(seatNo == -1){return null;}
        return this.seats[seatNo].user;
    }

    //返回我的座位号
    public getMySeatNo():number{
        return this.mySeatNo;
    }

    //取得下家的座位号
    public peekNextSeatNo(currtSeatNo:number):number{
        if(this.seatsNum == 1) { return -1;}
        let seatNo = (currtSeatNo + 1) >=  this.seats.length ? 1 : currtSeatNo + 1;
        return seatNo;
    }
    
    //循环的取得下家的座位号
    public peekNextSeatNoRecursively(currtSeatNo:number, seatNoGap:number){
        let seatNo = currtSeatNo;
        for (let i = 0; i <seatNoGap ; i++) {
            seatNo = this.peekNextSeatNo(seatNo);
		}
        return seatNo;
    }

    //取得当前用户的下家
    public getNextUser():User{
       let seatNo = this.peekNextSeatNo(this.mySeatNo);
        if(seatNo == -1){return null;}
        return this.seats[seatNo].user;
    }

    //设置的额外属性
    public getExtraAttribute():any{
        return this.extraAttribute;
    }

    //取得的额外属性
    public setExtraAttribute(obj:any){
        this.extraAttribute = obj
    }
}