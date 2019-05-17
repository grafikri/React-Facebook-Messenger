import React from 'react'
import './RightSection.css'
import { ArrowIcon, GearIcon, InfoIcon, WriteIcon, PlusIcon } from '../Components/Icons'
import { Header, Collapse, ListItem, PhotoGallery } from './../Components'


class RightSection extends React.Component {
  render() {
    return (
      <div className="Right-Section">

        <div className="Header-Container">
          <Header title="Tony Stark" subTitle="3 dakika önce aktifti" rightIcons={[<GearIcon />, <GearIcon />, <GearIcon />]} />
        </div>

        {/* <PhotoGallery /> */}

        {/* Right Section */}
        <Collapse title="Seçenekler">
          <ListItem icon={<GearIcon />} title="Konusmada Ara" />
          <ListItem icon={<InfoIcon />} title="Takma adları düzenle" />
          <ListItem icon={<WriteIcon />} title="Rengi değiştir" />
          <ListItem icon={<PlusIcon />} title="İfade simgesini değiştir" />
        </Collapse>

        <Collapse title="Galeri">
          <PhotoGallery />
        </Collapse>

      </div>
    )
  }
}

export default RightSection