

const ListComponent = (ide,iden, fun, desc) => {
return(
    <div>
    <li id='clean' onClick={()=>{isdroppedToggle(); setIdentity('cleanUp')}}>Complete Clean up</li>
    {isdropped &&  identity === 'cleanUp' && <DropComponent tex={serviceDesc.completeCleanup}/>}
    
    </div>
)
            }