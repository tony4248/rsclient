// TypeScript file

class EventList<T extends BaseData> {

    dic = new Array<T>();

    public Add(key: string, value: T) {
        this.dic[key] = value;
    }


    public Get(key: string): T {
        let t: T = this.dic[key]
        return t;
    }


}