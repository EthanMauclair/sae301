import './stimulus_bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/css/app.css';// assets/app.js

import './bootstrap.js';

// C'est LA ligne vitale qui connecte ton SCSS à Symfony
import './styles/scss/app.scss';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
