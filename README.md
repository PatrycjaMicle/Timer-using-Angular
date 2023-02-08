# Timer

This project was created with Angular.

## Instructions:

Click on the START button to start the timer and on the STOP button to stop it. 
You'll see all the even and odd seconds below. 

## Components

The timer is created from four components :
- `app.component`:
    This is a parent component, which holds and manage the others.
- `game-control.component`:
    This component is responsible for starting and stopping the timer. 
    It emits the time (all running seconds) to the app component.
- `even`:
    Even - holds all the seconds - which are even numbers. 
    It gets the current data from his parent `app.component`.
- `odd`:
    The same like above - but it runs for seconds which are odd numbers. 

## Screenshot

<p align="center">
    <img src="https://github.com/PatrycjaMicle/timer-using-Angular/blob/main/src/IMAGES/Screenshot.jpg?raw=true" alt="screenshot" />
</p>
