//4.calculate the uber price

class UberCalculator {
    constructor(ratePerKm, ratePerMinute) {
      this.ratePerKm = ratePerKm; 
      this.ratePerMinute = ratePerMinute;
    }
  
    calculatePrice(distance, time) {
      const fare = distance * this.ratePerKm + time * this.ratePerMinute;
      return `₹${fare.toFixed(2)}`;
    }
  }
  const uberCalculator = new UberCalculator(6,2);
  
  const distanceTraveled = 20;
  const timeTaken = 6;
  
  const totalPrice = uberCalculator.calculatePrice(distanceTraveled, timeTaken);
  console.log(`Uber Price: ${totalPrice}`);
  