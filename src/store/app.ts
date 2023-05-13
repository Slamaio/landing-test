// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    highlights: [
      {
        img: 'https://picsum.photos/56',
        title: '1K+ People',
        text: 'Successfully Getting Home',
      },
      {
        img: 'https://picsum.photos/56',
        title: '56 Houses',
        text: 'Sold Monthly',
      },
      {
        img: 'https://picsum.photos/56',
        title: '4K+',
        text: 'People Looking for New Homes',
      },
      {
        img: 'https://picsum.photos/56',
        title: 'Highlight 4',
        text: 'Successfully Getting Home',
      },
      {
        img: 'https://picsum.photos/56',
        title: 'Highlight 5',
        text: 'Sold Monthly',
      },
      {
        img: 'https://picsum.photos/56',
        title: 'Highlight 6',
        text: 'People Looking for New Homes',
      },
    ],

    recommendations: [
      {
        category: 'house',
        img: 'https://picsum.photos/id/237/340/382',
        title: 'House 1',
        price: 'price',
        tag: 'popular',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
      {
        category: 'house',
        img: 'https://picsum.photos/id/236/340/382',
        title: 'House 2',
        price: 'price',
        tag: 'new-house',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
      {
        category: 'house',
        img: 'https://picsum.photos/id/235/340/382',
        title: 'House 3',
        price: 'price',
        tag: 'best-deals',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
      {
        category: 'house',
        img: 'https://picsum.photos/id/234/340/382',
        title: 'House 4',
        price: 'price',
        tag: 'popular',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
      {
        category: 'house',
        img: 'https://picsum.photos/id/233/340/382',
        title: 'House 5',
        price: 'price',
        tag: 'popular',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
      {
        category: 'villa',
        img: 'https://picsum.photos/id/237/340/382',
        title: 'Villa 1',
        price: 'price',
        tag: 'popular',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
      {
        category: 'apartment',
        img: 'https://picsum.photos/id/236/340/382',
        title: 'Apartment 2',
        price: 'price',
        tag: 'popular',
        seller: {
          avatar: 'https://picsum.photos/40',
          name: 'name',
          location: 'location',
        },
      },
    ],

    gallery: [
      {
        id: '0',
        url: 'https://picsum.photos/id/100/528/459',
      },
      {
        id: '1',
        url: 'https://picsum.photos/id/101/528/459',
      },
      {
        id: '2',
        url: 'https://picsum.photos/id/102/528/459',
      },
      {
        id: '3',
        url: 'https://picsum.photos/id/103/528/459',
      },
      {
        id: '4',
        url: 'https://picsum.photos/id/104/528/459',
      },
      {
        id: '5',
        url: 'https://picsum.photos/id/111/528/459',
      },
      {
        id: '6',
        url: 'https://picsum.photos/id/106/528/459',
      },
      {
        id: '7',
        url: 'https://picsum.photos/id/107/528/459',
      },
      {
        id: '8',
        url: 'https://picsum.photos/id/108/528/459',
      },
      {
        id: '9',
        url: 'https://picsum.photos/id/109/528/459',
      },
      {
        id: '10',
        url: 'https://picsum.photos/id/110/528/459',
      },
    ],

    reviews: [
      {
        image: 'https://picsum.photos/740/400',
        title: 'My house sold out fast!',
        text: 'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
        user: {
          avatar: 'https://picsum.photos/40',
          name: 'Courtney Henry',
          details: 'CEO Andarafish',
        },
        stars: 4.3,
      },
      {
        image: 'https://picsum.photos/740/400',
        title: 'Best! I got the house I wanted through Hounter',
        text: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
        user: {
          avatar: 'https://picsum.photos/40',
          name: 'Dianne Russell',
          details: 'Manager Director',
        },
        stars: 4.6,
      },
      {
        image: 'https://picsum.photos/740/400',
        title: 'Through the Hounter, I can get a house for my self',
        text: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
        user: {
          avatar: 'https://picsum.photos/40',
          name: 'Esther Howard',
          details: 'Head of Marketing',
        },
        stars: 4.6,
      },
      {
        image: 'https://picsum.photos/740/400',
        title: 'Test Review',
        text: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
        user: {
          avatar: 'https://picsum.photos/40',
          name: 'Esther Howard',
          details: 'Head of Marketing',
        },
        stars: 4.6,
      },
    ],

    articles: [
      {
        data: {
          cover: 'https://picsum.photos/560/280',
          title: '12 Things to know before buying a house',
          summary:
            'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
          timeToRead: 8,
          date: new Date('2021-4-25'),
        },
        author: {
          avatar: 'https://picsum.photos/32',
          name: 'Cameron Williamson',
        },
      },
      {
        data: {
          cover: 'https://picsum.photos/200/144',
          title: 'The things we need to check when we want to buy a house',
          summary: '',
          timeToRead: 4,
          date: new Date('2021-04-25'),
        },
        author: {
          avatar: 'https://picsum.photos/32',
          name: 'Dianne Russell',
        },
      },
      {
        data: {
          cover: 'https://picsum.photos/200/144',
          title: '7 Ways to distinguish the quality of the house we want to buy',
          summary: '',
          timeToRead: 6,
          date: new Date('2021-04-24'),
        },
        author: {
          avatar: 'https://picsum.photos/32',
          name: 'Courtney Henry',
        },
      },
      {
        data: {
          cover: 'https://picsum.photos/200/144',
          title: 'The best way to know the quality of the house we want to buy',
          summary: '',
          timeToRead: 2,
          date: new Date('2021-04-24'),
        },
        author: {
          avatar: 'https://picsum.photos/32',
          name: 'Darlene Robertson',
        },
      },
    ],
  }),
})
