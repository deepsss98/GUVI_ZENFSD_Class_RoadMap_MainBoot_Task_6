/*Write a constructor for the class Movie, which takes a String representing the title of the movie, 
 a String representing the studio, and a String representing the rating as its arguments, 
 and sets the respective class properties to these values.*/

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        //The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
        this.rating=(rating==undefined?"PG":rating);
    }

    //Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
    
    getPG(arr)
    {
        var res=[];
        for(let i=0;i<arr.length;i++)
        {
          if(arr[i].rating==="PG")
          {
            res.push(arr[i]);
          }
        }
        return res;
    }
}

var a=new Movie("Avatar","Fox Productions",);
var b=new Movie("SpiderMan","Sony Productions",);
var c=new Movie("Avengers","Marvel Studios","G");
var x=new Movie("Vikram","RKFI","G");
var y=new Movie("Kantara","RG",);

//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var z=new Movie("Casino Royale","Eon Productions","PG13");
var arr=[a,b,c,x,y,z];

var PG_Rated_Movies=x.getPG(arr);

for(i=0;i<PG_Rated_Movies.length;i++)
{
  console.log("Title: "+PG_Rated_Movies[i].title+" Studio: "+PG_Rated_Movies[i].studio+" Rating: "+PG_Rated_Movies[i].rating)
}