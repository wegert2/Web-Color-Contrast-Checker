// This is my first Angular app
// I created this file through a combination of following the Youtube Angular tutorial by 
// Code with Sloba and the Angular docs at https://angular.io/guide/architecture-components

// Import statement
import { Component } from '@angular/core';

// Component Decorator
// Marks a class as an angular component and provides metadata that
//  decides how the component is used at runtime 
@Component ({
    // Selector Tag is used to add the CSS Selector
    // This is used in the template files to render the component
    selector: 'app-contrast-checker-greeting',
    // Template Tag is used to define the HTML template/what renders on the page
    // The component uses this to display information 
    templateUrl: './contrast-checker-greeting.component.html',
    // Styles Tag is used to select the styles for the component's template 
    styleUrls: ['./contrast-checker-greeting.component.css']
})

// A class statement that includes the code for the component
// Here you can define properties and methods, catch component lifecycle
// events, and do dependency injection 
export class ContrastCheckerGreetingComponent {
    // All public properties defined in the class are accessible in the HTML template above
    title = 'Welcome to my Web Contrast Checker!';
    description1 = 'Check your website color palette for background and text';
    description2 = 'color combinations that meet WCAG standards.';
}