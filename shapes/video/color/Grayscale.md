## Grayscale Converter

Converts any colors in the image to grayscale 
equivalents. 

Since red color has more wavelength of all the three colors, and 
green is the color that has not only less wavelength then red color
but also green is the color that gives more soothing effect to the 
eyes.

It means that we have to decrease the contribution of red color, 
and increase the contribution of the green color, and put blue 
color contribution in between these two.

So the new equation that form is:

```math

average = 0.3*pixels[red] + 0.59*pixels[green] + 0.11*pixels[blue];

pixels[red]  = average;
pixels[green]= average;
pixels[blue] = average;
```