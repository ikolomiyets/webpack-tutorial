import KiwiImage from './components/kiwi-image/kiwi-image';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render('Kiwi');

const kiwiImage = new KiwiImage();
kiwiImage.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}
