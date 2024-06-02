// template pattern is use for setting step u want that child class should follow 

// abstract class either have abstract method either they have implementation


abstract class PaymentFlow {
  public abstract validRequest(): void
  public abstract calculateFees(): void
  public abstract debitAmount(): void
  public abstract creditAmount(): void

   sendMoney(): void {
    this.validRequest()
    this.calculateFees()
    this.debitAmount()
    this.creditAmount()
  }
}

class Upi extends PaymentFlow {

  public validRequest(): void {
    console.log('validRequest')
  }
  public calculateFees(): void {
    console.log('calculateFees')
  }
  public debitAmount(): void {
    console.log('debitAmount')
  }
  public creditAmount(): void {
    console.log('creditAmount')
  }

}



const obj=new Upi()

obj.sendMoney();