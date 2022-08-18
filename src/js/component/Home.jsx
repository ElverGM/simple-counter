import React from "react";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { useState, useEffect } from "react";
 
//create your first component
const Home = () => {

	// function Timer (MaxRange) {
	const [digitOne, setDigitOne] = useState(0);
	const [digitTwo, setDigitTwo] = useState(0);
	const [digitThree, setDigitThree] = useState(0);
	const [digitFour, setDigitFour] = useState(0);
 	
	useEffect(()=>{
		setInterval( () => {
			setDigitOne(digitOne => digitOne + 1)},1000)
			
		}, [])

		if(digitOne>=10){
			setDigitOne(0);
			setDigitTwo( digitTwo => digitTwo +1);
		};
		
		if(digitTwo>=10){
			setDigitTwo(0);
			setDigitThree( digitThree => digitThree +1);
		}
		if(digitThree>=10){
			setDigitThree(0);
			setDigitFour( digitFour => digitFour +1);
		}
		if(digitFour==9 && digitThree==9 && digitTwo==9 && digitOne==9){
			setDigitOne(0); 
			setDigitTwo(0);
			setDigitThree(0);
			setDigitFour(0);
		}
		
// }
	return (
		<SimpleCounter
		digitOne={digitOne}
		digitTwo={digitTwo}
		digitThree={digitThree}
		digitFour={digitFour}/>
		
		
	);

};

export default Home;
