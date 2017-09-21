import './style.css'
import testImageSrc from './test.png';

const testImage = new Image()
testImage.src = testImageSrc
document.body.appendChild(testImage)

console.log('All fine')
