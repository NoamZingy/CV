import React from 'react';
import  'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../images/cheeseCake.jpg'
const Recipe = () =>{

    return( <>
   <div className=' mt-5'>
        <h2 className='row justify-content-center'>recipe</h2>
        <img src={img} className='recipe-img'/>
        </div>
          <h3 className=' row justify-content-center'>cheesecake with crumbles:</h3>
<h4 className=' row justify-content-center'>For the dough: </h4>
<div  className=' row justify-content-center'>
<ul >
<li>2 cups puffed flour</li>
<li>2 tablespoons of sugar</li>
<li>2 egg yolks</li>
<li>200 g butter</li>
</ul>
</div>
<h3 className=' row justify-content-center'>Make dough</h3>
<p className=' row justify-content-center'> 
  Bake in a 2/3 pan (20 minutes) and bake the remaining 1/3 in a separate pan (for crumbs on top)
  </p>
<h3 className=' row justify-content-center'>For filling:</h3>
<p className=' row justify-content-center'>
 In the First bowl, 
 500 g of 9% or 5% cheese
3/4 cup sugar
In the second bowl, whip sweet whipped cream while whisking, 
add 2 tablespoons sugar and a bag of vanilla sugar. Mix the two batter. 
</p>
<p className=' row justify-content-center'>
Spread on the cooled baked dough. Crumble the extra 1/3 crumbs with a fork and sprinkle over. 
Refrigerate for at least a few hours before eating.
Appetite😋
         </p>
        </>
    )}
    export default Recipe;

  