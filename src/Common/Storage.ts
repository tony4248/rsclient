module LocalStorage {
	export class Storage {

		public constructor() {
		}
		public Set(key: string, value: string): void {

			egret.localStorage.setItem(key, value)
		}
		public Set1<T>(key: string, value: T): void {
			let str: string = JSON.stringify(value);
			egret.localStorage.setItem(key, str)

		}

		public Get(key: string): string {
			return egret.localStorage.getItem(key);
		}

		public Get1<T>(key: string): T {
			let str = egret.localStorage.getItem(key);
			let t: T = JSON.parse(str)
			return t;
		}





	}
}