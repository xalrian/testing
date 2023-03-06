import './serviceList.scss';
import { useState } from 'react';
import DropComponent from '../drop-componentFolder/drop-component';

const ServiceList = () => {

    const [isdropped,setisdropped] = useState(false);
    const isdroppedToggle = () =>{setisdropped(!isdropped)}
    const [identity,setIdentity] = useState('');
    const serviceDesc = {

        completeCleanup : 'remove tree,stump and all debris',
        lowPossible      : "cut as low as possible",
        stumpDebris      : "remove / grind stump out of ground",
        removeWood       : "remove all wood from vicinity",
        grindpossible    : "grind as low as possible",
        leaveStumpDebris : "leave stump debris",
        leaveWood        : "leave Wood",
        grindSoil        : "grind below soil level",
        noCleanUp        : "no Cleaning"
    }
    // const filterService=(props)=>{
    //    return  serviceDesc.props;
    // }
    // filterService();
//     const filterLi = (ide,iden, fun, desc) => {
// return(
//     <div>
//     <li id='clean' onClick={()=>{isdroppedToggle(); setIdentity(ide)}}>desc</li>
//     {isdropped &&  identity === 'cleanUp' && <DropComponent tex={fun}/>}
//     </div>
    
    
// )
//             }
    // console.log(identity)
    const h = 'hello';
    return(
        <div id='service' className="joh">
        <div className='head'>
            <h1 className='tyson'>Tysons </h1>
            <h1 className='title'>Tree Service</h1>
        </div>
            <div className='serviceAboutContainer'>
                <ol className='serviceAbout'>
                    <li className='serviceAboutItem'><span>Over 25 years Experience</span></li>
                    <li className='serviceAboutItem'><span>American owned and Operated</span></li>
                    <li className='serviceAboutItem'><span>Licensed & Insured</span></li>
                    <li className='serviceAboutItem'><span>Reasonable Pricing</span></li>
                    <li className='serviceAboutItem'><span>Reliable & Honest</span></li>
                    <li className='serviceAboutItem'><span>Thursdays, Lady's Day 10% off all Tree Work</span></li>
                </ol>
            </div>


            <ol className='list-container'>
            <li onClick={()=>{isdroppedToggle(); setIdentity('cleanUp')}}><span>Complete Clean up</span></li>
                {isdropped &&  identity === 'cleanUp' && <DropComponent tex={serviceDesc.completeCleanup} t={h} l={'80%'}/>}
                
            <li onClick={()=>{isdroppedToggle(); setIdentity('cutLow')}}><span>Cut as low as possible</span></li>
                {isdropped && identity === 'cutLow' && <DropComponent tex={serviceDesc.lowPossible}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('stumpDebris')}}><span>Remove stump debris</span></li>
                {isdropped && identity === 'stumpDebris' &&  <DropComponent tex={serviceDesc.stumpDebris}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('wood')}}><span>Remove wood</span></li>
                {isdropped && identity === 'wood' &&  <DropComponent tex={serviceDesc.removeWood}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('grindLow')}}><span>Grind as low as possible</span></li>
                {isdropped && identity === 'grindLow' &&  <DropComponent tex={serviceDesc.grindpossible}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('leaveStump')}}><span>Leave stump debris</span></li>
                {isdropped && identity === 'leaveStump' &&  <DropComponent tex={serviceDesc.leaveStumpDebris}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('leaveWood')}}><span>Leave wood</span></li>
                {isdropped && identity === 'leaveWood' &&  <DropComponent tex={serviceDesc.leaveWood}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('grindBelow')}}><span>Grind below soil level</span></li>
                {isdropped && identity === 'grindBelow' &&  <DropComponent tex={serviceDesc.grindSoil}/>}

            <li onClick={()=>{isdroppedToggle(); setIdentity('noClean')}}><span>No clean up</span></li>
                {isdropped && identity === 'noClean' &&  <DropComponent tex={serviceDesc.noCleanUp}/>}
            </ol>
    
        </div>
    )
    
}

export default ServiceList;