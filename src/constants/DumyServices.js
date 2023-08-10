import img from '../assets/images/png/cardImg.png';
import img1 from '../assets/images/png/cardImg1.png';
import img3 from '../assets/images/png/cardImg3.png';
import img5 from '../assets/images/png/cardImg5.png';

export const PandingOrdersData = [
  {
    customerName: 'Rose Conwell',
    serviceName: 'Cleaning',
    customerImg: img,
    charges: '10',
  },
  {
    customerName: 'Jane Michelle',
    serviceName: 'Repairing',
    customerImg: img1,
    charges: '8',
  },
  {
    customerName: 'Mike Smith',
    serviceName: 'Painting',
    customerImg: img3,
    charges: '13',
  },
  {
    customerName: 'Aron Jones',
    serviceName: 'Cleaning',
    customerImg: img5,
    charges: '9',
  },
];

export const CancelledOrdesData = [
  {
    customerName: 'Rose Conwell',
    serviceName: 'Cleaning',
    customerImg: img,
    type: 'Cancelled',
  },
  {
    customerName: 'Mike Smith',
    serviceName: 'Painting',
    customerImg: img3,
    type: 'Cancelled',
  },
];

export const CompletedOrdesData = [
  {
    customerName: 'Jane Michelle',
    serviceName: 'Repairing',
    customerImg: img1,
    type: 'Completed',
  },

  {
    customerName: 'Aron Jones',
    serviceName: 'Cleaning',
    customerImg: img5,
    type: 'Completed',
  },
];
