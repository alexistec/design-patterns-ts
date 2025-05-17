import { COLORS } from '../helpers/colors.ts';

// 1. Interfaz NotificationChannel
// Defines the `send` method that each communication channel must implement.
interface NotificationChannel {
  send(message: string): void;
}

// 2. Communication Channel Implementations

class EmailChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando correo electrónico: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

class PushNotificationChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando Push: ${message}`);
  }
}

// 3. Abstract Notification Class
// Defines the `channel` property an the `notify` method

abstract class Notification {
  protected channel:NotificationChannel;
 
  constructor(channel:NotificationChannel) {
    this.channel = channel;
  } 
 
  abstract notify(message:string): void
  abstract setChannel(channel:NotificationChannel): void
}

// 4. Concrete Notification Classes

class AlertNotification extends Notification {
  override notify(message: string): void {
    this.channel.send(message);
    
  }

  override setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

class ReminderNotification extends Notification {
  notify(message: string): void {
    console.log('\n%cNotificación de Recordatorio:', COLORS.blue);
    this.channel.send(message);
  }

  setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

class PushNotification extends Notification {
  override notify(message: string): void {
    this.channel.send(message);
  }

  override setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

// 5. Client Code to Test the Bridge

function main() {
  // Create an alert notification using the email channel
  const alert = new AlertNotification(new EmailChannel());
  alert.notify('Security Alert: Unauthorized access detected.');

  // Switch the channel to SMS and resend the alert
  alert.setChannel(new SMSChannel());
  alert.notify('Security Alert: Unauthorized access detected.');

  // Crear una notificación de recordatorio usando el canal de SMS
  const reminder = new ReminderNotification(new SMSChannel());
  reminder.notify(
    'Reminder: Your doctor appoinment is tomorrow at 10:00 a.m.'
  );

  // Switch the reminder channel to push and resend the notification
  reminder.setChannel(new PushNotificationChannel());
  reminder.notify(
    'Reminder: Your doctor appoinment is tomorrow at 10:00 a.m.'
  );

  // Crear una notificación de push usando el canal de notificación push
  const push = new PushNotification(new PushNotificationChannel());
  push.notify('New update available. Tap to install.');
}

main();