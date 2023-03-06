
import images from '../../utility/images/images';
import './gallery-component.scss';
import { useState } from 'react';
import Popup from '../popup-componentFolder/popup-component';

// console.log(images);
export const AllPhotos =()=>{
const [imgactive,setimgactive] = useState(false);
const [srcUrl,setSrcUrl] = useState('');
const toggleImgactive = () => {setimgactive(!imgactive)};
const[coord,setcoord]=useState('');
    // console.log(srcUrl);
    // console.log(imgactive)
    
return(
    <div id='gal' className='galContainer'>
        <h2>Gallery</h2>
    {Object.values(images).map(im=><div className='galDiv'><img className='gal' onClick={(e)=>{toggleImgactive()
       setSrcUrl(im)
       console.log(e)
    }} src={im} alt=''/></div>
    )
}
{imgactive && <Popup/>}
<Popup image={srcUrl}/>

    </div>
    
    )
}