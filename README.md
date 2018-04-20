<b>Trello:</b> <a href="https://trello.com/b/YsIESSCA/kimmelbook"> Here</a><br>
<b>Requirements:</b> <br>
<ul>
<li>Design a mobile responsive React web app for a library with three different sizes.</li>
<li>Utilize the given API</li>
<li>A homepage that organizes all books.</li>
<li>A method of adding new books to the library.</li>
<li>A method of checking out any available books.</li>
<li>A method of seeing how the book is rated.</li>
<li>The ability to click on the book and see it in more detail.</li>
</ul>
<b>Strugles:</b><br />
At first it took me a moment to figure out the API due to my lack of experience with this type of API. I normally build my own and utilize it on my own backend or I have integrated an external API to my backend but once I got it down things became a bit smoother. I also did some pretty extensive research into making the React App responsive using a library that made things much easier but I did not like how it cluttered up my code. If I spent more time on it I would have found a way to clean that up. <br />
<b>Design Choices:</b><br />
I decided to use a tertiary statement with me bookInfo page instead of writing out a whole new route. I did this for a few reasons, I wanted to show that I could, I also wanted to minimize the amount of pull requests to free up resources. I decided to use a seperate path for the createBook page due to the fact I wanted to show that I could maintain a seperation of concerns and also, in my mind at least, I didn't see it neccesary to have the bookList array loaded while creating a new book which didn't need to have that information. If I had more time I probably would have added a way to manipulate the users somehow and definately would have nailed down a better styling for the app in general. 