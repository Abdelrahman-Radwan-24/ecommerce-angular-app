import {ILocalStorageData} from '../interfaces/icommon'

export class LocalStorageHandler {

    setItem(key: string, value: object) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string) {
        let value = localStorage.getItem(key);
        if (value == null) {
            return null;
        }
        return JSON.parse(value) as ILocalStorageData;
    }

    pushItem(key: string, value: string) {
        let items = this.getItem(key) ?? {localData: []};
        items.localData.push(value);
        this.setItem(key, items);
    }

    removeItem(key: string, value: string) {
        let items = this.getItem(key) ?? {localData: []};
        items.localData = items.localData.filter((item) => item !== value);
        this.setItem(key, items);
    }

    checkItem(key: string, value: string) {
        let items = this.getItem(key) ?? {localData: []};
        return items.localData.includes(value);
    }

}
