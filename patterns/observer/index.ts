interface Observer{
     obj:Observable,
     update():void,
}


interface Observable{
    add(obj:Observer):void,
    remove(obj:Observer):void,
    notify():void,
    setData():void,
    getData():void,
}

class ObservableClass implements Observable{
      public list:Array<Observer>;
      private data:number;
      constructor(){
          this.list=[]
          this.data=0;
      }
      add(obj:Observer){
         this.list.push(obj);
      }
      remove(obj:Observer): void {
        this.list.filter(curr=>curr!==obj);
      }
      notify(): void {
         this.list.forEach((item)=>item.update());
      }
      setData(): void {
         this.data+=1;
         this.notify();
      }
      getData(): number {
        return this.data;
      }
}

class ObserverClass implements Observer{
    obj:Observable
    constructor(obj:Observable){
      this.obj=obj
    }
    update(): void {
       this.obj.getData()
       // now do whatever u want with data
    }
}

const Observable1=new ObservableClass();

const Observer1=new ObserverClass(Observable1)
const Observer2=new ObserverClass(Observable1)
const Observer3=new ObserverClass(Observable1)

Observable1.add(Observer1)
Observable1.add(Observer2)
Observable1.add(Observer3)


// now when we call setData it will notify all the component 







export {}