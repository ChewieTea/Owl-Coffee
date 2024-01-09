# Owl Coffee
> By far my biggest project so far.
> An E-Commerce store for a colleagues side business (a coffee shop).
>
*This was a difficult one for me and by far gave me the most experiences in learning how to code. This website took me from the basics of `HTML`/`CSS` and improved my skills so much.*
![Coffee Logo; created by graphic designer, and my friend, JoeyMochii](/media/logo.jpg)

*The Header and Homepage took me the longest time to create, and the rest of the homepages followed suit. I will go through my thoughts and progressions through this `README` to showcase my personal achievements!*

## The Journey of The Pages

### Homepage
> *Index.html*
> This Homepage consists of:
>  1. Header & Slogan
>  2. Promotional Content
>  3. Merchandise Teaser (includes a slider)
>  4. Footer

#### Header
  *The `header` consists simply of a `logo`, `title` and `nav bar` (which, in it's `media query`, will turn into a `nav menu`)*
  
  *These are all wrapped into a `flexbox`, however when the `media query` is active, the `title` stops being `visible` and a `"dummy title"`, outside of the box, appears and dynamically appears above the `slogan`. This allowed me to keep a sleek design without going through the hastle of breaking it out of `flex` and meddling with `position: absolute;  top: x; left: x;`.*

  ![Image of the title, logo and nav bar; Desktop version.](/media/readme_media/header.png)
  
  - [Tablet View](/media/readme_media/header_mobile.png)
  - [Mobile View](/media/readme_media/header_tablet.png)

  
  *The `Nav Bar` is sleekly designed to be interactive with some simple transitions and change into `Nav Menu` upon `Media` activation (of course based on the screen size). I used a nice `cubic bezier` transition*
  
  *The `Nav Menu` was quite tricky to get right. From the `position`, `overflow` to even the `z-index` and `transition`. Even to the end it was by far the **most annoying problem** I dealt with throughout the problem.*

#### Slogan
 *The `Slogan` is very simple. It's simply positioned into the sub-center part of the `header`. However I've managed to jazz it up with a small line which changes position when hovered. No, it serves no real purpose, but it makes things a little more fun and hints to the possibility of there being some more easter eggs across the website if you hovered over them. **It's a fun addition**!*

 *Lastly in this section is an `SVG` which nicely spills over into the body content. This creates a great `'coffee' effect` and completes the look for the `hero`.*
