/**
 * !Pattern Adapter
 * 
 * Homework;
 * Implement a PaymentProcessor that follows the Adapter Pattern and allows executing different payment processes for varios types of services payment
 */
import { COLORS } from "../helpers/colors.ts";

// 1. Interfaz PaymentProcessor
interface PaymentProcessor {
    processPayment(amount: number): void;
}

//2. Class of Services of External Payment Services

//These classes simulate the external services of Paypal, Stripe and Mercado Pago.

class PayPalService {
    sendPayment(amount: number): void {
      console.log(`Procesando pago de $${amount} con %cPayPal`, COLORS.blue);
    }
}
  
class StripeService {
    makeCharge(amount: number): void {
      console.log(`Procesando pago de $${amount} con %cStripe`, COLORS.purple);
    }
}
  
class MercadoPagoService {
    pay(amount: number): void {
      console.log(
        `Procesando pago de $${amount} con %cMercadoPago`,
        COLORS.yellow
      );
    }
}

//3 . Adapter Class

class PayPalAdapter implements PaymentProcessor {
    private paypalService : PayPalService;

    constructor( service: PayPalService) {
      this.paypalService = service
    }

    processPayment(amount: number): void {
      this.paypalService.sendPayment(amount);
    }
}

class StripeAdapter implements PaymentProcessor {
    private stripeService : StripeService;

    constructor( service: StripeService ){
      this.stripeService = service
    }

    processPayment(amount: number): void {
      this.stripeService.makeCharge(amount);
    }
}

class MercadoPagoAdapter implements PaymentProcessor {
    
    private mercadoPagoService : MercadoPagoService;

    constructor(service: MercadoPagoService){
      this.mercadoPagoService = service
    }

    processPayment(amount: number): void {
      this.mercadoPagoService.pay(amount);
    }
}


function main(){
  const paymentAmount = 100;

  const paypalProcessor: PaymentProcessor = new PayPalAdapter(new PayPalService());
  const stripeProcessor: PaymentProcessor = new StripeAdapter( new StripeService() );
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter( new MercadoPagoService() );

  // Procesar pagos con los diferentes servicios
  // Los 3 procesadores de pago trabajan exactamente igual después de adaptaros
  console.log('Usando PayPal:');
  paypalProcessor.processPayment(paymentAmount);

  console.log('\nUsando Stripe:');
  stripeProcessor.processPayment(paymentAmount);

  console.log('\nUsando MercadoPago:');
  mercadoPagoProcessor.processPayment(paymentAmount);
}

main()