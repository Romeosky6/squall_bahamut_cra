import { useState } from "react";
//simport React from 'react';
import Button from '../../UI/Button/Button';

function Combat() {

//F° RANDOM INTEGER
function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//SQUALL
    const squallName = "Squall";
    const [squallHp, setSquallHp] = useState(500);
    const [squallMp, setSquallMp] = useState(100);
    const [squallArmor, setSquallArmor] = useState(0);
    const [squallDmg, setSquallDmg] = useState(10);
    

// BAHAMUT
    const bahamutName = "Bahamut";
    const [bahamutHp, setbahamutHp] = useState(500);
    const [bahamutMp, setbahamutMp] = useState(100);
    const [bahamutArmor, setbahamutArmor] = useState(0);
    const [bahamutDmg, setbahamutDmg] = useState(15);

    //F° Attack
    const attack = (opponent) => {
        let random = randomNumberInRange(1,20);

        // SQUALL ATTACK
        if (opponent === bahamutName)  {
            console.log("squallDmg bef rdm -->", squallDmg);
            setSquallDmg(squallDmg + random);

            console.log("squallDmg aft rdm -->", squallDmg);
            console.log("bahamutHp bef dmg -->", bahamutHp);

            const bahamutHpArmor = bahamutHp + bahamutArmor; 
            setbahamutHp(bahamutHpArmor - squallDmg);
            console.log("bahamutHp aft dmg -->", bahamutHp);

            counter();
        } else { //BAHAMUT ATTACK
            setbahamutDmg(bahamutDmg + random );
            console.log("set baha dmg on counter", bahamutDmg);

            const squallHpArmor = squallHp + squallArmor; 
            setSquallHp(bahamutDmg - squallHpArmor );
            
            console.log("set squall hp aft counter attack", squallHp);

        }
    }

    //F° Defend
    const defend = (defender) => {

        let random = randomNumberInRange(1,10);

        //Squall Defend
        if (defender === squallName) {
            setSquallArmor(random += squallArmor);
            counter();
        } else { //Bahamut Defend
            setbahamutArmor(random += bahamutArmor);
        }
    }

    //F° Spell
    const spell = (opponent) => {

        // SQUALL CAST SPELL
        if (opponent === bahamutName && squallMp > 0)  {
            let random = randomNumberInRange(1, squallMp);
            setSquallMp(squallMp - random);
            setbahamutHp(bahamutHp - random);
            counter();
        }
        
        else {  // BAHA CAST SPELL || Baha.Mp already verified by counter()
            let random = randomNumberInRange(1, bahamutMp);
            setbahamutMp(bahamutMp - random);
            setSquallHp(squallHp - random);
        }
    }

    const counter = () => {
        let random = randomNumberInRange(1,3);
        if(random === 1) {
            attack(squallName);
            
        }
        if(random === 2){
            defend(bahamutName);
            
        }
        if(random === 3){
            if(bahamutMp > 0){
                spell(squallName);
            } else {
                counter();
            }
        }
    }


  return (
    <section>
        <Button onClickHandler={() => attack({bahamutName})}>ATTACK</Button>
        <Button onClickHandler={() => defend({squallName})}>DEFEND</Button>
        <Button onClickHandler={() => spell({bahamutName})}>CAST SPELL</Button>
    </section>      
    
  )
}

export default Combat