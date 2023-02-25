import image from '../../assets/logo.jpg';
import image1 from '/img/IMG_0264.jpg';
import image2 from '/img/IMG_0263.jpg';
import image3 from '/img/IMG_0260.jpg';
import person from '/img/me.jpg';

export const logo = {img: image, attr:'logo'}

export const textdetails = [
    {id:1, 
        title: 'Dark Choco', 
        subtitle: 'Natural cacao in farm',
    },];

export const aboutTitle = '100% unsweetened tablea';

export const aboutData = [
    {id:1,
        heading:'Rich and warm goodness that inspires good memories',
        paragraph:`cacaodelilio No gifts yet for friends and/or family this holiday season? 
        We are launching just in time for the most wonderful time of the year.
        We are accepting pre-orders for November 22 onwards. LIMITED stocks only. Please send us a DM for orders and inquiries`
    },
    {id:2,
        heading:'No gifts yet for friends and/or family this holiday season?',
        paragraph:`
        We are accepting pre-orders for November 22 onwards.
        LIMITED stocks only. Please send us a DM for orders and inquiries`
    }];
    
export const dataAbout = [
    {id:5, 
        srcImg:image1,
        classImg:'composition__photo composition__photo--p1', 
        photoN:'photo1'},
    {id:6, 
        srcImg:image2,
        classImg:'composition__photo composition__photo--p2', 
        photoN:'photo2'},
    {id:7, 
        srcImg:image3,
        classImg:'composition__photo composition__photo--p3', 
        photoN:'photo3'},
];

export const featurebox = [
    {id:8, 
        classicon:'feature-box__icon icon-ecommerce-bag', 
        title:'Easy to order', 
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ex.'},
    {id:9, 
        classicon:'feature-box__icon icon-ecommerce-gift', 
        title:'All season', 
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ex.'},
    {id:10, 
        classicon:'feature-box__icon icon-ecommerce-creditcard', 
        title:'Online payment', 
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ex.'},
    {id:11, 
        classicon:'feature-box__icon icon-ecommerce-basket-refresh', 
        title:'Fresh', 
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ex.'},
];

export const toursTitle = 'Tours';

export const toudData = [
    {id:1, title:'Harvesting Cleaning', price:800},
    {id:2, title:'cacao Nibs grinding', price:800},
    {id:3, title:'cacao Alkalization', price:800},
]

export const storiesReview = [
    {id: 1, name:'Bruce', img:person,
    highlight:' i had the best dark chocolate in my mug.',
    comment: ` Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore?Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore? Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore?Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore?`,    
},
    {id: 2, name:'Michael', img:person,
    highlight:' Best ever.',
    comment: ` Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore?Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore? Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore?Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aliquam, dolore?`,    
}
]




