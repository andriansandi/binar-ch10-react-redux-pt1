export default {
    all: () => Promise.resolve([
        {
            id: 1,
            name: 'Spiderman',
            address: 'Jakarta',
            phoneNumber: '+12345678',
            photo: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png'
        },
        {
            id: 2,
            name: 'Thor',
            address: 'Jakarta',
            phoneNumber: '+12345678',
            photo: 'https://imgix.bustle.com/uploads/image/2020/6/3/49ba04c2-3c4f-487e-9d2c-2bbd73cf2c2b-thor-endgame.jpg'
        },
        {
            id: 3,
            name: 'Captain America',
            address: 'Jakarta',
            phoneNumber: '+12345678',
            photo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Chris_Evans_as_Steve_Rogers_Captain_America.jpg'
        }
    ]),
}