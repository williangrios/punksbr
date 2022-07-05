import React, { useState, useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitterLogo.png'
import moreIcon from '../assets/owner/moreIcon.png'
import './Main.css'
import PunkList from './PunkList'

const Main = (selectedPunk, punkListData) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect (() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighLight'>
                <div className='punkContainer'>
                    <img className='selectedPunk' src={activePunk.image_preview_url} alt='' />
                </div>

            </div>

            <div className='punkDetails' style={{color: '#fff'}}>
                <div className='title'>
                    {activePunk.name}
                </div>

                <span className='itemNumber'>.#{activePunk.tokenId}</span>

            </div>

            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src='' alt='' />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div className='ownerAddress'>
                            {activePunk.owner.address}
                        </div>
                        <div className='ownerHandle'>
                            contact owner
                        </div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt=''/>
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt=''/>
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt=''/>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Main