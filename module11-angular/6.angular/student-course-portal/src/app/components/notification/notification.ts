import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  providers: [NotificationService]

  // Component-level provider:
  // A new NotificationService instance is created
  // for every NotificationComponent.
  // Its state is isolated and not shared with
  // the rest of the application.
})
export class Notification {

  constructor(public notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.show('Enrollment Successful!');
  }

}