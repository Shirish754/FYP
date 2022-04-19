import { NotificationManager } from "react-notifications";

export const createNotification = (type, message) => {
  console.log("Hello")
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(message);
          break;
        case 'success':
          NotificationManager.success(message);
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error(message, 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };