//This code snippet demonstrates how to create a 3D animation effect using jQuery. 
// alert('Hello');
// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');



/*  Movement Animation:
The card and container elements must be chosen at the first setup. Changing the Animation Event
Based on the mouse position, the code determines the rotation angles and applies them to the card element. Additionally, by
Animation reset, which resets the rotation of the card when the mouse leaves the container, removes animation. Next up is
adding animation, when the mouse enters the container, animation effects are introduced, causing different elements to burst out. Additionally, when 
when it comes to choosing particular card elements for further modifications.
*/