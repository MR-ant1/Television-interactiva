# <center>Televisión Interactiva
Welcome to my second project in git! this one is a pre-final version of an interactive television which offers a fictional use of a real tv in your screen with the three lenguages mentioned a little further down

### TABLE OF CONTENTS :open_file_folder: 
- [Stack :wrench:](#Stack-)
- [Features :bulb:](#Features-)
- [Where to try and visualize it :mag:](#Where-to-try-and-visualize-it-) 
- [Database design :computer:](#Database-design-)
- [Author :pencil2:](#Author-)
- [Potential improvements :heavy_check_mark:](#Potential-improvements-)
- [Acknowledgments :raised_hands:][def]

### STACK :wrench:
![Alt text](./img/CSS3_and_HTML5_logos_and_wordmarks.svg.png)
<img src="https://img.shields.io/badge/JAVASCRIPT-000000?style=for-the-badge&logo=javascript&logoColor=yelow" alt="JS" />




### FEATURES :bulb:

- Interact with different functions from this tv. You can power on and off, change between different channels and see the date and hour in real time
- Observe how every channel throws to you the number asociated with itself for a few seconds
- Find out where to contact this business for reservations or any other purpose!
-Cared details like no function to channel buttons without press power button before

### WHERE TO TRY AND VISUALIZE IT :mag: 

Find the repository of this proyect on this link:

https://github.com/MR-ant1/Television-interactiva.git

To run and visualize it online, click the next link down below:

https://mr-ant1.github.io/Proyecto-Carta-Restaurante/

As a way to improve myself, I decided to ramake the proyect from this one that I did with "some help"

https://github.com/MR-ant1/Proyecto-Televisi-n-interactiva.git

### DATABASE DESING :computer:

Here I leave some screenshots showing the HTML, CSS and Javascript codes and some more of the Tv working:
img/Captura de pantalla 2024-02-07 211547.png
img/Captura de pantalla 2024-02-07 211603.png
img/Captura de pantalla 2024-02-07 211634.png
img/Captura de pantalla 2024-02-07 211717.png
img/Captura de pantalla 2024-02-07 211811.png
img/Captura de pantalla 2024-02-07 211823.png

-ESTETIC DESIGN: The way I built the tv and remote design, was basically making a first contain where I put a main row dedicated to TV and remote and then I made some columns dedicated to TV to get the possibility to put legs to it. 
The remote is only a column with some rows where I put the buttons in 3 levels: Power-options, volume-channelchange (no funtional) and 1-9 channel buttons.
-JAVASCRIPT FUNCTIONING: I set a boolean value which controls all events depending on if tv has been turned on or not. 
When the tv is on, date and time functions make visible and when you choose a channel, there's a function using buttons as arrays, that erase index screen and put a class called Channel plus the last character from the id of the selected button (slice(-1)). 
Each button has an id ended in its number so, automatically the class displayed is Channel + (channel number).
Same process happens when you press again power, but this time main screen set to display none instead of flex and a class from css with black background, make tv "look like off". But really looks like that (I didn't have time neither to improve this without finding troubles in whole delcaration)

### AUTHOR :pencil2:
-Antonio Rodrigo - Full Stack Developer student

<a href="https://github.com/MR-ant1">GitHub - <a href="https://www.linkedin.com/in/antonio-rodrigo-camacho-306b60205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbZw124AlRu2kGWtATXloag%3D%3D">Linkedin</a>

### POTENTIAL IMPROVEMENTS :heavy_check_mark: 

-Include images, gifs or even videos in every channel so you can improve the experience with this proyect.
-Enable functions for volume and channel next and previous buttons, making the remote more realistic and functional.
-Add a function to gray options button next to power button, allowing user to go back to main screen to see the time or date.
-Add a led "light" in the screen's corner to show the status of the tv in each moment (red/green)
-Add a channel list menu and show the entire list of channels
-The div containing the Channel's number when you select each, should be discarded when timeout pass, but I haven't enough time to implement this so I just turn it out black and made it less relevant than main screen when you turn on the TV.

### ACKNOWLEDGMENTS :raised_hands:

Big shout out to GeeksHubs for giving me the chance to learn about all this amazing world of "developing"
More and better proyects are coming nearly thanks to them!

[def]: #Acknowledgments-

:arrow_up: [Table-of-contents](#table-of-contents-open_file_folder)
