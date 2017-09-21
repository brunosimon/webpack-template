import './style.css'
import testImageSrc from './test.jpg';

const testImage = new Image()
testImage.src = testImageSrc
document.body.appendChild(testImage)

console.log('All fine')
